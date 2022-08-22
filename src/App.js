import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Todolist from './Components/Todo/Todolist';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
    <div
            className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
        >
            {/* <!-- navbar --> */}
            <Navbar />

            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                {/* <!-- header --> */}
                <Header />
                <hr className="mt-4" />

                {/* <!-- todo list --> */}
                <Todolist />

                <hr className="mt-4" />

                {/* <!-- footer --> */}
                <Footer />
            </div>
        </div>
        </Provider>
  );
}

export default App;
