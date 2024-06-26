import ThemeToggle from "./components/theme/ThemeToggle";

function App() {
  return (
    <div id="app">
      <ThemeToggle />
      <article>
        <h2 style={{ color: "var(--secondary-color)" }}>React Course</h2>
        <p style={{ color: "var(--text-color)" }}>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}

export default App;
