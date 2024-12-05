import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Blogs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

interface Blog {
  blog_id: number;
  blog_title: string;
  blog_description: string;
  blog_image: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://api.gamingpandastudios.com/api/fetch_blogs.php');
        const data = await response.json();

        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error(data.message || "Error fetching blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Header />

      <div className='privacy-outer'>
        <div className='cont privacy'>
          <h1>Our Blogs</h1>
        </div>
      </div>

      <div className='cont' id="Case">
        <div className="row">
          {loading ? (
            <div>Loading...</div>
          ) : (
            blogs.map(blog => (
              <div key={blog.blog_id} className="col-md-4 outer">
                <Link to={`/blog?blog_id=${blog.blog_id}`}>
                <div className="item">
                  <img src={`https://api.gamingpandastudios.com/api/${blog.blog_image}`} alt={blog.blog_title} className="blog_img" />
                  <div className="inner">
                      <h3>{blog.blog_title}</h3>
                      <p className="blog_learn_more">
                        Read More <img src="https://ik.imagekit.io/g6xhbzchk/imeta/images/icons/right-arrow.png?updatedAt=1701862303476" alt="Arrow" />
                      </p>
                  </div>
                </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
