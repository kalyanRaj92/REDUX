import { Provider } from "react-redux";
import store from "./redux/store";
//import CakeContainer from './components/CakeContainer';
//import HooksCakeContainer from "./components/HooksCakeContainer";
//import IceCreamContainer from "./components/IceCreamContainer";
//import Counter from "./components/Counter";
import './App.css';
//import NewCakeContainer from "./components/NewCakeContainer";
//import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserContainer/>
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
        <Counter/> */}
      </div>
    </Provider>
   
  );
}

export default App;
