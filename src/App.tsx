import { List } from "./components/List/List";

function App() {
  return (
    <div>
      <p className="test">testing</p>

      <List initialItems={["Kaik", "Joao", "Lucas"]} />
    </div>
  );
}

export default App;
