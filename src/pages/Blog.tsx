import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
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
  const [tocLinks, setTocLinks] = useState<{ title: string; refIndex: number }[]>([]);
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);

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
        const response = await fetch(
          `https://api.gamingpandastudios.com/api/fetch_blogs.php?blog_id=${blog_id}`
        );
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

  useEffect(() => {
    if (blog) {
      const regex = /<h([2-3])[^>]*>(.*?)<\/h\1>/g;
      const matches: { title: string; refIndex: number }[] = [];
      let match;
      let counter = 0;
      while ((match = regex.exec(blog.blog_description))) {
        matches.push({ title: match[2], refIndex: counter++ });
      }
      setTocLinks(matches);
    }
  }, [blog]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }

  // Sanitize the blog description to avoid XSS but still allow HTML rendering
  const sanitizedDescription = DOMPurify.sanitize(blog.blog_description, {
    USE_PROFILES: { html: true },
  });

  const handleScrollToSection = (index: number, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (headingRefs.current[index]) {
      headingRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contentWithRefs = sanitizedDescription.split(/(<h[2-3][^>]*>.*?<\/h[2-3]>)/g).map((part, index) => {
    if (part.match(/<h[2-3][^>]*>.*?<\/h[2-3]>/)) {
      const heading = part.replace(/<\/?h[2-3][^>]*>/g, '');
      const headingIndex = tocLinks.findIndex((link) => link.title === heading);
      return (
        <h2
          key={index}
          ref={(el) => (headingRefs.current[headingIndex] = el)}
          id={`section-${headingIndex}`}
        >
          {heading}
        </h2>
      );
    }
    return <p key={index} dangerouslySetInnerHTML={{ __html: part }} />; // Render other content as paragraphs using raw HTML
  });

  return (
    <>
      <Header />
      <div className="blog-outer">
        <div className="cont blog">
          <div className="row">
            <div className="col-md-4">
              <img
                src={`https://api.gamingpandastudios.com/api/${blog.blog_image}`}
                className="blog-img"
                alt={blog.blog_title}
              />
            </div>
            <div className="col-md-8">
              <h1>{blog.blog_title}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="cont">
        <div className="row">
          {/* Table of Contents */}
          <div className="col-md-3">
            <div className="toc">
              <h5>Table of Contents</h5>
              <ul>
                {tocLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#section-${link.refIndex}`}
                      onClick={(e) => handleScrollToSection(link.refIndex, e)}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Blog Content */}
          <div className="col-md-9 content">
            {contentWithRefs} {/* Render the content with headings and paragraphs */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
