// Blog API Types
export interface BlogCategory {
    id: number;
    name: string;
    slug: string;
    created_at: string;
}

export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    author: {
        id: number;
        username: string;
    };
    published_date: string;
    updated_date: string;
    is_published: boolean;
    content: string;
    featured_image: string | null;
    category: BlogCategory;
}

export interface BlogComment {
    id: number;
    blog_post: number;
    author_name: string;
    author_email: string;
    content: string;
    created_at: string;
    is_approved: boolean;
}

export interface CreateCommentData {
    blog_post: number;
    author_name: string;
    author_email: string;
    content: string;
}

// Appointment API Types
export interface Service {
    id: number;
    name: string;
    description: string;
    estimated_duration: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface Appointment {
    id: number;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    business_name: string;
    service: number;
    preferred_date: string;
    preferred_time: string;
    address: string;
    city: string;
    province: string;
    postal_code: string;
    message?: string;
    status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
    created_at: string;
    updated_at: string;
}

export interface CreateAppointmentData {
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    business_name: string;
    service: number;
    preferred_date: string;
    preferred_time: string;
    address: string;
    city: string;
    province: string;
    postal_code: string;
    message?: string;
}

// Contact API Types
export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// Pagination Types
export interface PaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

// API Error Types
export interface APIError {
    detail?: string;
    message?: string;
    [key: string]: any;
}
