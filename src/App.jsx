import ActionArea from "./components/ActionArea";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { Provider } from "./context/SongContext";

function App() {
  return (
    <Provider>
      <div className="flex flex-row">
        <Sidebar />
        <Main />
        <ActionArea />
      </div>
    </Provider>
  );
}

export default App;
