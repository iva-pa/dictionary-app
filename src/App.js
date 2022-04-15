import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>Dictionary</h1>
        <Dictionary defaultKeyword="greetings" />
      </header>
      <footer className="App-footer">
        This project was coded by Iva Papcunova and is{" "}
        <a
          href="https://github.com/iva-pa/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
