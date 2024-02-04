import { Provider } from "react-redux";
import "./App.css";
import Head from "./components/Head";
import store from "./store/store";
import { RouterProvider } from "react-router-dom";
import { approuter } from "./router/approuter";

{
  /* Head
    Body
    Sidebar
      MenuItems
    Maincontainer
      ButtonList
      VideoConatiner
        VideoCard
    */
}

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <RouterProvider router={approuter}/>
      </div>
    </Provider>
  );
}

export default App;
