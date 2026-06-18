import "./BlogPost.css";

export default function BlogPost({ post, onBack }) {
  return (
    <div className="blog-post-page">
      {/* Blue Header */}
      <header className="blog-post-header">
        <div className="blog-post-logo">
          <h1>MRIGANKA SAIKIA</h1>
        </div>
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
      </header>

      <div className="blog-post-content">
        <div className="blog-post-container">
          <span className="blog-post-date">
            {post.date} • {post.readTime}
          </span>
          
          <h1 className="blog-post-title">{post.title}</h1>
          
          <div className="blog-post-body">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}