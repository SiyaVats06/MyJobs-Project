
import './App.css';
import Home from "./components/Home"
import Header from './components/Header'
import Login from './components/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostedJobs from './components/PostedJobs';
import { UserContextProvider } from './contexthook';
import Applicant from './components/Applicant';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/postedjobs",
    element: <PostedJobs />,
  },

]);



function App() {
  return (
 <UserContextProvider>
    <div className="App">
       <Header />
       <RouterProvider router={router} />
    </div>
    </UserContextProvider>
  );
}

export default App;
