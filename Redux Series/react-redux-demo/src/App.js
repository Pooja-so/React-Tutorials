// ----------------- Notice ---------------------
//  "react-redux" library is used in the components folder and "redux" library is used in the redux folder

import { Provider } from "react-redux";
import store from "./redux/store";

import CakeConatiner from "./components/CakeContainer";
import HooksCakeConatiner from "./components/HooksCakeContainer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeConatiner />
        <HooksCakeConatiner />
      </div>
    </Provider>
  );
}

export default App;
