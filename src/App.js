import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> Dictionary </header>
        <br />
        <main>
          <Dictionary />
        </main>
        <br />
        <footer className="text-center">
          <small>
            <a
              href="https://github.com/SilvijaSvegzde/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced on GitHub
            </a>{" "}
            by Silvija Svegzde
          </small>
        </footer>
      </div>
    </div>
  );
}
