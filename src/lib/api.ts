import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { APIError } from '@/types/api';

// Create axios instance with base configuration
const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Add any auth tokens here if needed in the future
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError<APIError>) => {
        // Handle common errors
        if (error.response) {
            // Server responded with error status
            const errorMessage = error.response.data?.detail ||
                error.response.data?.message ||
                'An error occurred';

            // Log detailed error for debugging
            console.error('API Error Response:', {
                status: error.response.status,
                statusText: error.response.statusText,
                data: error.response.data,
                url: error.config?.url,
            });

            return Promise.reject({
                message: errorMessage,
                status: error.response.status,
                data: error.response.data,
            });
        } else if (error.request) {
            // Request made but no response received
            console.error('Network Error:', error.message);
            return Promise.reject({
                message: 'Network error. Please check your connection.',
                status: 0,
            });
        } else {
            // Something else happened
            console.error('Error:', error.message);
            return Promise.reject({
                message: error.message,
                status: 0,
            });
        }
    }
);

export default api;
