import ActionCard from "./components/ActionCard";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
      <ActionCard />
    </div>
  );
}

export default App;
