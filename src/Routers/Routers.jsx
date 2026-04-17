import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage";
import RootLayout from "../Layout/RootLayout";
import Timeline from "../Components/Timeline/Timeline";
import AllFriends from "../Components/HomePage/AllFriends";
import FriendDetails from "../Pages/FriendDetails";
import Dashboard from "../Components/Status/Status";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      
      {
        path: '/allFriend/:id',
        element: <FriendDetails></FriendDetails>
      },
      {
        path: '/timeline',
        element: <Timeline></Timeline>
      },
      {
        path: '/status',
        element: <Dashboard></Dashboard>
      }
    ],
     errorElement: <ErrorPage></ErrorPage>
  }

  
]);