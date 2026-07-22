import blogData from "../data/blogData.json";
import "./Blogs.css";

export default function Blogs({ openBlog }) {
  return (
    <section className="blogs-section">
      {/* Big Blue Hero Section */}
      <div className="blogs-hero">
        <h1>Blog</h1>
        <p>Thoughts, experiments, and development notes</p>
      </div>

      {/* Blog Cards */}
      <div className="blogs-content">
        {blogData.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-text">
              <span className="blog-date">
                {post.date} • {post.readTime}
              </span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button
                className="learn-more-btn"
                onClick={() => openBlog(post)}
              >
                Read Full Story →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}