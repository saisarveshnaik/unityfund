import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Inside.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

interface Blog {
  blog_id: number;
  blog_title: string;
  blog_image: string;
}

const Inside: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      offset: 100,   // Trigger offset in pixels
    });

    // Fetch blogs data from API
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost/gamingpanda_admin/pages/fetch_blogs.php');
        const data = await response.json();

        console.log('Fetched Blogs:', data); // Log the fetched data to inspect its structure

        // Ensure the data is an array before setting it to the state
        if (Array.isArray(data)) {
          setBlogs(data); // Set the blogs in the state if it's an array
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Get the first blog (big one) and two random others (small)
  const bigBlog = blogs.length > 0 ? blogs[0] : null;
  const smallBlogs = blogs.length > 1 ? blogs.slice(1, 3) : [];

  return (
    <div className='inside-outer'>
      <div className='cont inside' id='blogs'>
        <h1 data-aos="fade-up">INSIDE THE WORLD OF GAMING</h1>
        <p data-aos="fade-up">GamingPanda Studios is a top-notch game development studio offering consistently superior services to clients.</p>

        <div className='row'>
          <div className='col-md-7 left'>
            {bigBlog && (
              <Link to={`/blog?blog_id=${bigBlog.blog_id}`}>
              <div className='big' data-aos="zoom-in">
                <img src="/images/inside_1.jpg" className='big-bg' alt="big-bg" />
                <h2>{bigBlog.blog_title}</h2>
                <p>GamingPanda Studios is a top-notch game development studio offering consistently superior services to clients.</p>
                <img src={`http://localhost/gamingpanda_admin/pages/${bigBlog.blog_image}`} className='big-small' alt="game-img" />
              </div>
              </Link>
            )}
          </div>
          <div className='col-md-5 right'>
            {smallBlogs.map((blog) => (
              <div key={blog.blog_id} className='small' data-aos="zoom-in">
                <Link to={`/blog?blog_id=${blog.blog_id}`}>
                <img src="/images/inside_2.jpg" className='small-bg' alt="big-bg" />
                <h3>{blog.blog_title}</h3>
                <img src={`http://localhost/gamingpanda_admin/pages/${blog.blog_image}`} className='small-small' alt="game-img" />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Inside;
