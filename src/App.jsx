import { useState, useEffect } from "react";
import "./index.css";
import Blogs from "./sections/Blogs";
import About from "./sections/About";
import Contact from "./sections/Contact";
import BlogPost from "./sections/BlogPost";
import blogData from "./data/blogData.json"; // ← Make sure this path is correct

function App() {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  const navItems = ["home", "about", "projects", "blog", "contact"];

  // Vite automatically gives us the correct base path
  // In production it becomes "/my_website/"
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, ""); // remove trailing slash

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  // ========== IMPORTANT: Restore page/post from URL on load ==========
  useEffect(() => {
    const pathname = window.location.pathname;

    // Remove the base path so we get a clean path like "/blog/my-slug"
    let cleanPath = pathname;
    if (basePath && pathname.startsWith(basePath)) {
      cleanPath = pathname.slice(basePath.length) || "/";
    }
    cleanPath = cleanPath.replace(/\/$/, "") || "/"; // remove trailing slash

    if (cleanPath.startsWith("/blog/")) {
      const slug = cleanPath.split("/blog/")[1];
      const foundPost = blogData.find((p) => p.slug === slug);
      if (foundPost) {
        setCurrentBlog(foundPost);
        setActive("blogpost");
      }
    } else if (cleanPath === "/about") {
      setActive("about");
    } else if (cleanPath === "/projects") {
      setActive("projects");
    } else if (cleanPath === "/blog") {
      setActive("blog");
    } else if (cleanPath === "/contact") {
      setActive("contact");
    } else {
      setActive("home");
    }
  }, []);

  // Helper to update the browser URL without reloading
  const updateURL = (path) => {
    const fullPath = path === "/" ? basePath + "/" : `${basePath}${path}`;
    window.history.pushState({}, "", fullPath);
  };

  const handleNavClick = (item) => {
    setActive(item);
    setIsMenuOpen(false);
    setCurrentBlog(null);

    // Update URL so sharing works
    if (item === "home") {
      updateURL("/");
    } else {
      updateURL(`/${item}`);
    }
  };

  const openBlog = (post) => {
    setCurrentBlog(post);
    setActive("blogpost");
    // This is the key line that makes the shareable link work
    updateURL(`/blog/${post.slug}`);
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
                    Software & Data Engineer with expertise in backend systems,
                    databases, and analytics
                  </p>
                  <button
                    className="about-me-btn"
                    onClick={() => handleNavClick("about")}
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
                    <li>
                      Build and Launch my personal website. You're looking at it
                    </li>
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
          <BlogPost
            post={currentBlog}
            onBack={() => {
              updateURL("/blog");
              setActive("blog");
              setCurrentBlog(null);
            }}
          />
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