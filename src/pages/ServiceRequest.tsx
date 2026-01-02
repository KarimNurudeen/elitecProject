import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarDays as CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { appointmentService } from "@/services/appointmentService";

const ServiceRequest = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    preferredDate: undefined as Date | undefined,
    alternateDate: undefined as Date | undefined,
    timePreferences: {
      anytime: false,
      morning: false,
      afternoon: false,
      evening: false,
    },
    consent: false,
  });

  // Mutation for creating appointment
  const mutation = useMutation({
    mutationFn: appointmentService.createAppointment,
    onSuccess: () => {
      toast({
        title: "Appointment Request Submitted!",
        description: "We'll contact you shortly to confirm your appointment.",
      });
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetAddress: "",
        apartment: "",
        city: "",
        state: "",
        zipCode: "",
        preferredDate: undefined,
        alternateDate: undefined,
        timePreferences: {
          anytime: false,
          morning: false,
          afternoon: false,
          evening: false,
        },
        consent: false,
      });
    },
    onError: (error: any) => {
      console.error('Appointment submission error:', error);

      // Extract detailed error message
      let errorMessage = "Failed to submit appointment. Please try again.";

      if (error.data) {
        // If there are field-specific errors, show them
        const fieldErrors = Object.entries(error.data)
          .map(([field, messages]) => `${field}: ${Array.isArray(messages) ? messages.join(', ') : messages}`)
          .join('\n');

        if (fieldErrors) {
          errorMessage = fieldErrors;
        }
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email ||
      !formData.phone || !formData.preferredDate || !formData.consent) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Determine preferred time based on checkboxes
    let preferredTime = "09:00:00"; // default
    if (formData.timePreferences.morning) preferredTime = "09:00:00";
    else if (formData.timePreferences.afternoon) preferredTime = "13:00:00";
    else if (formData.timePreferences.evening) preferredTime = "17:00:00";

    // Format data for Django API
    const appointmentData: any = {
      customer_name: `${formData.firstName} ${formData.lastName}`,
      customer_email: formData.email,
      customer_phone: formData.phone,
      business_name: "N/A", // Not collected in this form
      preferred_date: format(formData.preferredDate, 'yyyy-MM-dd'),
      preferred_time: preferredTime,
      address: formData.apartment
        ? `${formData.streetAddress}, ${formData.apartment}`
        : formData.streetAddress || "",
      city: formData.city || "",
      province: formData.state || "",
      postal_code: formData.zipCode || "",
      message: formData.alternateDate
        ? `Alternate date: ${format(formData.alternateDate, 'PPP')}`
        : "",
    };

    // Include service field (make sure you have at least one service in Django admin)
    appointmentData.service = 1;

    console.log('Submitting appointment data:', appointmentData);
    mutation.mutate(appointmentData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-100 text-navy py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Service Request</h1>
          <div className="text-center text-navy/70">
            <span>Home</span> <span className="mx-2">»</span> <span>Service Request</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-16 bg-background flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="E.g. John"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="E.g. Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="E.g. john@doe.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="E.g. +1 416-273-8471"
                  required
                />
                <p className="text-sm text-muted-foreground">
                  By providing your phone number, you agree to receive text messages (SMS) from Elitec Group.
                  You can unsubscribe at anytime by replying STOP. Message and data rates may apply.
                  Message frequency varies.
                </p>
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="streetAddress">Street Address</Label>
                <Input
                  id="streetAddress"
                  value={formData.streetAddress}
                  onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                  placeholder=""
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="apartment">Apartment, suite, etc</Label>
                <Input
                  id="apartment"
                  value={formData.apartment}
                  onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                  placeholder=""
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder=""
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder=""
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP / Postal Code</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  placeholder=""
                />
              </div>
            </div>

            {/* Appointment Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy">Appointment Details</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>
                    Which Day would be best for an appointment? <span className="text-destructive">*</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.preferredDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.preferredDate ? (
                          format(formData.preferredDate, "PPP")
                        ) : (
                          <span>Choose Date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.preferredDate}
                        onSelect={(date) => setFormData({ ...formData, preferredDate: date })}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>What is another day that works for you?</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.alternateDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.alternateDate ? (
                          format(formData.alternateDate, "PPP")
                        ) : (
                          <span>Choose Date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.alternateDate}
                        onSelect={(date) => setFormData({ ...formData, alternateDate: date })}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Consent */}
              <div className="space-y-4">
                <Label>
                  Consent <span className="text-destructive">*</span>
                </Label>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent: checked === true })}
                    required
                  />
                  <Label
                    htmlFor="consent"
                    className="font-normal cursor-pointer text-sm leading-relaxed"
                  >
                    Confirm that you agree to our terms of service and cancellation policy by checking this box.
                  </Label>
                </div>
              </div>

              {/* Preferred Time */}
              <div className="space-y-4">
                <Label>What are your preferred arrival times?</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="anytime"
                      checked={formData.timePreferences.anytime}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          timePreferences: { ...formData.timePreferences, anytime: checked === true }
                        })
                      }
                    />
                    <Label htmlFor="anytime" className="font-normal cursor-pointer">
                      Any time
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="morning"
                      checked={formData.timePreferences.morning}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          timePreferences: { ...formData.timePreferences, morning: checked === true }
                        })
                      }
                    />
                    <Label htmlFor="morning" className="font-normal cursor-pointer">
                      Morning
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="afternoon"
                      checked={formData.timePreferences.afternoon}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          timePreferences: { ...formData.timePreferences, afternoon: checked === true }
                        })
                      }
                    />
                    <Label htmlFor="afternoon" className="font-normal cursor-pointer">
                      Afternoon
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="evening"
                      checked={formData.timePreferences.evening}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          timePreferences: { ...formData.timePreferences, evening: checked === true }
                        })
                      }
                    />
                    <Label htmlFor="evening" className="font-normal cursor-pointer">
                      Evening
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={mutation.isPending}
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit appointment'
              )}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceRequest;
