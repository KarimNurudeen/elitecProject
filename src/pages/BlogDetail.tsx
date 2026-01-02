import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft, Loader2, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { blogService } from "@/services/blogService";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const [commentForm, setCommentForm] = useState({
        name: "",
        email: "",
        content: "",
    });

    // Fetch blog post by slug
    const { data: post, isLoading, isError, error } = useQuery({
        queryKey: ['blogPost', slug],
        queryFn: () => blogService.getBlogPostBySlug(slug!),
        enabled: !!slug,
    });

    // Fetch comments for this post
    const { data: comments = [], isError: commentsError } = useQuery({
        queryKey: ['blogComments', post?.id],
        queryFn: () => blogService.getComments(post!.id),
        enabled: !!post?.id,
        retry: false, // Don't retry on backend errors
    });

    // Mutation for creating a comment
    const commentMutation = useMutation({
        mutationFn: blogService.createComment,
        onSuccess: () => {
            toast({
                title: "Success",
                description: "Your comment has been submitted and is awaiting approval.",
            });
            setCommentForm({ name: "", email: "", content: "" });
            queryClient.invalidateQueries({ queryKey: ['blogComments', post?.id] });
        },
        onError: (error: any) => {
            toast({
                title: "Error",
                description: error.message || "Failed to submit comment. Please try again.",
                variant: "destructive",
            });
        },
    });

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!post || !commentForm.name || !commentForm.email || !commentForm.content) {
            toast({
                title: "Missing Information",
                description: "Please fill in all fields.",
                variant: "destructive",
            });
            return;
        }

        commentMutation.mutate({
            blog_post: post.id,
            author_name: commentForm.name,
            author_email: commentForm.email,
            content: commentForm.content,
        });
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Header Section */}
            <div className="bg-navy text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Blog Detail</h1>
                    <div className="text-center text-white/80">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <span className="mx-2">»</span>
                        <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
                        <span className="mx-2">»</span>
                        <span>Post Detail</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-16 bg-background flex-grow">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link to="/blog">
                        <Button variant="outline" className="mb-8 border-accent text-accent hover:bg-accent hover:text-white">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Button>
                    </Link>

                    {isLoading ? (
                        <div className="flex justify-center items-center py-20">
                            <Loader2 className="h-12 w-12 animate-spin text-accent" />
                        </div>
                    ) : isError ? (
                        <Card className="border-red-200 bg-red-50">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold text-red-800 mb-2">
                                    Error Loading Blog Post
                                </h3>
                                <p className="text-red-600">
                                    {error instanceof Error ? error.message : 'Failed to load blog post. Please try again later.'}
                                </p>
                            </CardContent>
                        </Card>
                    ) : !post ? (
                        <Card className="border-accent/20">
                            <CardContent className="p-12 text-center">
                                <p className="text-muted-foreground text-lg">
                                    Blog post not found.
                                </p>
                            </CardContent>
                        </Card>
                    ) : (
                        <>
                            <article>
                                <Card className="border-accent/20 overflow-hidden">
                                    <CardContent className="p-0">
                                        {/* Featured Image */}
                                        {post.featured_image && (
                                            <div className="relative">
                                                <img
                                                    src={post.featured_image}
                                                    alt={post.title}
                                                    className="w-full h-96 object-cover"
                                                />
                                            </div>
                                        )}

                                        <div className="p-8">
                                            {/* Meta Information */}
                                            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{format(new Date(post.published_date), 'MMMM dd, yyyy')}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <User className="h-4 w-4" />
                                                    <span>{post.author?.username || 'Unknown Author'}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MessageCircle className="h-4 w-4" />
                                                    <span>{comments.length} Comments</span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h1 className="text-4xl font-bold text-navy mb-6">
                                                {post.title}
                                            </h1>

                                            {/* Category */}
                                            {post.category && (
                                                <div className="mb-6">
                                                    <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                                                        {post.category.name}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div
                                                className="prose prose-lg max-w-none text-muted-foreground leading-relaxed"
                                                dangerouslySetInnerHTML={{ __html: post.content }}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </article>

                            {/* Comments Section */}
                            <div className="mt-12">
                                <Card className="border-accent/20">
                                    <CardContent className="p-8">
                                        <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                                            <MessageCircle className="h-6 w-6 text-accent" />
                                            Comments ({comments.length})
                                        </h2>

                                        {/* Existing Comments */}
                                        {comments.length > 0 && (
                                            <div className="space-y-6 mb-8">
                                                {comments.map((comment) => (
                                                    <div key={comment.id} className="border-l-4 border-accent/20 pl-4 py-2">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <User className="h-4 w-4 text-accent" />
                                                            <span className="font-semibold text-navy">{comment.author_name}</span>
                                                            <span className="text-sm text-muted-foreground">
                                                                {format(new Date(comment.created_at), 'MMMM dd, yyyy')}
                                                            </span>
                                                        </div>
                                                        <p className="text-muted-foreground">{comment.content}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Comment Form */}
                                        <div className="border-t border-accent/20 pt-8">
                                            <h3 className="text-xl font-bold text-navy mb-4">Leave a Comment</h3>
                                            <form onSubmit={handleCommentSubmit} className="space-y-4">
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="name">Name *</Label>
                                                        <Input
                                                            id="name"
                                                            value={commentForm.name}
                                                            onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                                                            placeholder="Your name"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="email">Email *</Label>
                                                        <Input
                                                            id="email"
                                                            type="email"
                                                            value={commentForm.email}
                                                            onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                                                            placeholder="your@email.com"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="content">Comment *</Label>
                                                    <Textarea
                                                        id="content"
                                                        value={commentForm.content}
                                                        onChange={(e) => setCommentForm({ ...commentForm, content: e.target.value })}
                                                        placeholder="Write your comment here..."
                                                        rows={5}
                                                        required
                                                    />
                                                </div>
                                                <Button
                                                    type="submit"
                                                    disabled={commentMutation.isPending}
                                                    className="bg-accent hover:bg-accent/90 text-white"
                                                >
                                                    {commentMutation.isPending ? (
                                                        <>
                                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                            Submitting...
                                                        </>
                                                    ) : (
                                                        'Submit Comment'
                                                    )}
                                                </Button>
                                            </form>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Back Button */}
                            <div className="mt-8">
                                <Link to="/blog">
                                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Back to Blog
                                    </Button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogDetail;
