import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage";
import RootLayout from "../Layout/RootLayout";
import Timeline from "../Components/Timeline/Timeline";
import Status from "../Components/Status/Status";
import AllFriends from "../Components/HomePage/AllFriends";
import FriendDetails from "../Pages/FriendDetails";

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
        element: <Status></Status>
      }
    ]
  },

  {
    
  }
]);