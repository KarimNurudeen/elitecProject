import api from '@/lib/api';
import { ContactFormData } from '@/types/api';

export interface ContactResponse {
    detail: string;
}

export const contactService = {
    /**
     * Submit contact form
     */
    async submitContactForm(data: ContactFormData): Promise<ContactResponse> {
        const response = await api.post<ContactResponse>('/api/contact/', data);
        return response.data;
    },
};
