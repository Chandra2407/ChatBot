import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import TestRedux from "./components/TestRedux";
import { store } from './teststore';

function App() {

  return (
    // <Provider store={store}>
    <div className="min-h-screen bg-gray-900 w-full">
      <div className="max-w-7xl mx-auto px-2 w-full text-white flex flex-col min-h-screen bg-gray-900">
        <Header />
        <Main />
        <Footer />
        {/* <TestRedux /> */}
      </div>
    </div>
    // </Provider>
  )
}

export default App

// @ts-ignore
// window.store = store

// store.subscribe(() => {
//   console.log("State changed:", store.getState());
// });
// unsubscribe(); // Call this to stop listening to state changes