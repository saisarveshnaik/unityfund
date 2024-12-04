import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify'; // Import DOMPurify
import '../styles/Blog.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface BlogData {
    blog_id: number;
    blog_title: string;
    blog_description: string;
    blog_image: string;
}

const Blog: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [blog, setBlog] = useState<BlogData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Extract the blog_id from the query parameter
    const getBlogIdFromQuery = (): string | null => {
        const params = new URLSearchParams(location.search);
        return params.get('blog_id');
    };

    useEffect(() => {
        const fetchBlog = async () => {
            const blog_id = getBlogIdFromQuery();
            if (!blog_id) {
                navigate('/'); // Redirect to home if blog_id is not present
                return;
            }

            try {
                const response = await fetch(`http://api.gamingpandastudios.com/api/fetch_blogs.php?blog_id=${blog_id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch the blog');
                }
                const data = await response.json();
                if (data.message) {
                    setError(data.message);
                } else {
                    setBlog(data);
                }
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [location.search, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!blog) {
        return <div>No blog found</div>;
    }

    // Sanitize the description
    const sanitizedDescription = DOMPurify.sanitize(blog.blog_description);

    return (
        <>
            <Header />
            <div className='blog-outer'>
                <div className='cont blog'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img
                                src={`http://localhost/gamingpanda_admin/pages/${blog.blog_image}`}
                                className='blog-img'
                                alt={blog.blog_title}
                            />
                        </div>
                        <div className='col-md-8'>
                            <h1>{blog.blog_title}</h1>
                        </div>
                    </div>
                </div>
            </div>
              <div className='cont content'>
                    {/* Render sanitized HTML */}
                    <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
                </div>
            <Footer />
        </>
    );
};

export default Blog;
