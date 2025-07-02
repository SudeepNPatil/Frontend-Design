import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Restorents from './Components/Restorents.jsx'
import Restorentmenu from './Components/Restorentmenu.jsx'
import Cart from './Components/Cart.jsx'

const myrouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'Restorents',
                element: <Restorents />
            },
            {
                path: 'Cart',
                element: <Cart />
            },
            {
                path: 'Restorentmenu/:id',
                element: <Restorentmenu />
            }
        ]
    }
])

console.log("router page is rendered")

createRoot(document.getElementById('root')).render(<RouterProvider router={myrouter} />)
