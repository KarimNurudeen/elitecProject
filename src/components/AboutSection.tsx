import aboutImage from "@/assets/about-main.png";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Single Image */}
          <div className="relative">
            {/* Main image */}
            <div className="relative">
              <img 
                src={aboutImage}
                alt="Grease trap internal components and mechanism"
                className="w-full h-[500px] object-contain rounded-lg bg-white"
              />
            </div>
            
            {/* Years Badge - positioned at bottom */}
            <div className="absolute left-8 bottom-8 bg-yellow p-8 rounded-lg shadow-2xl text-center z-10">
              <div className="text-5xl font-bold text-navy">25<span className="text-3xl">+</span></div>
              <div className="text-sm font-semibold text-navy mt-1">Years Of Experience</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-wide">
              About us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Reliable Grease Trap Services That Keep Your Business Running Smoothly.
            </h2>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              At Elitec Groups, we offer flexible, stress-free grease trap cleaning and preventive maintenance services tailored to the needs of restaurants and food processing facilities. Our expert team ensures every job is done thoroughly and on time — so you can focus on your business, not your drains.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-8 h-8 text-navy flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
                <div>
                  <h3 className="font-bold text-navy text-lg">Experienced team</h3>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-8 h-8 text-navy flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-bold text-navy text-lg">Weekly, Biweekly, or On-Demand</h3>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-8 h-8 text-navy flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-navy text-lg">Complete Service Solutions</h3>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-8 h-8 text-navy flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <div>
                  <h3 className="font-bold text-navy text-lg">Book, Manage & Track Services Online</h3>
                </div>
              </div>
            </div>

            {/* Yellow decorative line */}
            <div className="w-full h-1 bg-yellow rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};