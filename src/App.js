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
        <footer className="text-center">Coded by Silvija Svegzde</footer>
      </div>
    </div>
  );
}
