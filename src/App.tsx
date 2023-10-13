import "./App.css";
import { AutosuggestionSelect } from "./components/AutosuggestionSelect";
import { FavouriteCharacters } from "./components/FavouriteCharacters";

export default function App() {
  return (
    <main className="app-container">
      <AutosuggestionSelect />
      <FavouriteCharacters />
    </main>
  );
}
