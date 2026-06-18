import { useState, useEffect } from "react";
import "./index.css";
import Blogs from "./sections/Blogs";
import About from "./sections/About";
import Contact from "./sections/Contact";
import BlogPost from "./sections/BlogPost";

function App() {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  const navItems = ["home", "about", "projects", "blog", "contact"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  const handleNavClick = (item) => {
    setActive(item);
    setIsMenuOpen(false);
    setCurrentBlog(null);
  };

  const openBlog = (post) => {
    setCurrentBlog(post);
    setActive("blogpost");
  };

  return (
    <div className="app">
      {/* BLUE NAVBAR - BlogPost page pe hide rahega */}
      {active !== "blogpost" && (
        <header className="navbar">
          <div className="logo">
            <h1>MRIGANKA SAIKIA</h1>
          </div>
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <nav className="nav-links">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={active === item ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          {isMenuOpen && (
            <nav className="mobile-menu">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={active === item ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>
          )}
        </header>
      )}

      <div className="nav-line"></div>

      {/* PAGE CONTENT */}
      <div className="page-wrapper">
        {active === "home" && (
          <section className="page">
            <main className="hero">
              <div className="hero-banner">
                <div className="hero-content">
                  <h1>MRIGANKA SAIKIA</h1>
                  <div className="white-line"></div>
                  <p className="hero-intro">
                    Software & Data Engineer with expertise in backend systems, databases, and analytics
                  </p>
                  <button
                    className="about-me-btn"
                    onClick={() => setActive("about")}
                  >
                    About Me
                  </button>
                </div>
              </div>
            </main>

            {/* Currently Exploring - White Card */}
            <section className="currently-exploring">
              <div className="section-container">
                <div className="exploring-card">
                  <h2 className="exploring-title">Currently Exploring</h2>
                  <ul className="exploring-list">
                    <li>Experimenting with local LLM</li>
                    <li>Build and Launch my personal website. You're looking at it</li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        )}

        {active === "about" && (
          <section className="page" id="about">
            <About />
          </section>
        )}

        {active === "projects" && (
          <section className="page">
            <main className="hero">
              <h2>Coming Soon</h2>
              <p>Stay tuned for more updates</p>
            </main>
          </section>
        )}

        {active === "blog" && (
          <section className="page">
            <Blogs openBlog={openBlog} />
          </section>
        )}

        {active === "blogpost" && currentBlog && (
          <BlogPost post={currentBlog} onBack={() => setActive("blog")} />
        )}

        {active === "contact" && (
          <section className="page" id="contact">
            <Contact />
          </section>
        )}
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Mriganka Saikia</p>
          <p>Built with React JS • Designed & Developed by Mriganka Saikia</p>
        </div>
      </footer>
    </div>
  );
}

export default App;