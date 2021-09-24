import "./App.css";
import UserList from "./components/users/users";

function App() {
  return (
    <div className="App">
      <div className="divSection"></div>
      <header className="App-header">
        <h1>🎢An express server for React app🎢</h1>
        <UserList />
      </header>
    </div>
  );
}

export default App;
