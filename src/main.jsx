import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider } from 'react-router'
import { router } from './Routers/Routers'
import FriendContext from './Context/Context'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendContext>
      <RouterProvider router={router} />
    </FriendContext>
    
  </StrictMode>
)
