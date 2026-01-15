// App.js
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Andrei Hamor</h1>
        <p>Frontend Developer | React Enthusiast</p>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate developer who enjoys building clean and simple web
          applications using React. I love learning new technologies and
          improving my skills.
        </p>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>Project One</h3>
            <p>A simple React project showcasing UI and logic.</p>
          </div>
          <div className="card">
            <h3>Project Two</h3>
            <p>A small web app built to practice React fundamentals.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>GitHub: github.com/yourusername</p>
      </section>

      <footer className="footer">
        <p>© 2026 Andrei Hamor</p>
      </footer>
    </div>
  );
};

export default App;
