import api from '@/lib/api';
import { Service, Appointment, CreateAppointmentData } from '@/types/api';

export const appointmentService = {
    /**
     * Fetch all active services
     */
    async getServices(): Promise<Service[]> {
        const response = await api.get<{ results: Service[] }>('/api/services/');
        // Django returns paginated response with results array
        return response.data.results || [];
    },

    /**
     * Fetch a single service by ID
     */
    async getService(id: number): Promise<Service> {
        const response = await api.get<Service>(`/api/services/${id}/`);
        return response.data;
    },

    /**
     * Create a new appointment
     */
    async createAppointment(data: CreateAppointmentData): Promise<Appointment> {
        const response = await api.post<Appointment>('/api/appointments/', data);
        return response.data;
    },

    /**
     * Fetch a single appointment by ID
     */
    async getAppointment(id: number): Promise<Appointment> {
        const response = await api.get<Appointment>(`/api/appointments/${id}/`);
        return response.data;
    },

    /**
     * Fetch all appointments (admin use)
     */
    async getAppointments(): Promise<Appointment[]> {
        const response = await api.get<Appointment[]>('/api/appointments/');
        return response.data;
    },
};
