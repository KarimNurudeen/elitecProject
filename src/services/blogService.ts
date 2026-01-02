import api from '@/lib/api';
import { BlogPost, BlogCategory, BlogComment, CreateCommentData, PaginatedResponse } from '@/types/api';

export interface BlogPostParams {
    page?: number;
    search?: string;
    category_id?: string;
    author?: string;
    is_published?: boolean;
    ordering?: string;
}

export const blogService = {
    /**
     * Fetch paginated blog posts with optional filters
     */
    async getBlogPosts(params?: BlogPostParams): Promise<PaginatedResponse<BlogPost>> {
        const response = await api.get<PaginatedResponse<BlogPost>>('/api/blog/blogposts/', {
            params,
        });
        return response.data;
    },

    /**
     * Fetch a single blog post by ID
     */
    async getBlogPost(id: number): Promise<BlogPost> {
        const response = await api.get<BlogPost>(`/api/blog/blogposts/${id}/`);
        return response.data;
    },

    /**
     * Fetch a single blog post by slug or ID
     */
    async getBlogPostBySlug(slugOrId: string): Promise<BlogPost> {
        // First try to get by ID if it's a number
        const id = parseInt(slugOrId);
        if (!isNaN(id)) {
            return this.getBlogPost(id);
        }

        // Otherwise try to find by slug in the list
        const response = await api.get<PaginatedResponse<BlogPost>>('/api/blog/blogposts/', {
            params: { search: slugOrId },
        });
        // Find the exact match by slug
        const post = response.data.results.find(p => p.slug === slugOrId);
        if (!post) {
            throw new Error('Blog post not found');
        }
        return post;
    },

    /**
     * Fetch all blog categories
     */
    async getCategories(): Promise<BlogCategory[]> {
        const response = await api.get<PaginatedResponse<BlogCategory>>('/api/blog/categories/');
        return response.data.results || [];
    },

    /**
     * Fetch comments for a specific blog post
     */
    async getComments(blogPostId: number): Promise<BlogComment[]> {
        const response = await api.get<PaginatedResponse<BlogComment>>('/api/blog/comments/', {
            params: { blog_post: blogPostId },
        });
        return response.data.results || [];
    },

    /**
     * Create a new comment on a blog post
     */
    async createComment(data: CreateCommentData): Promise<BlogComment> {
        const response = await api.post<BlogComment>('/api/blog/comments/', data);
        return response.data;
    },
};
