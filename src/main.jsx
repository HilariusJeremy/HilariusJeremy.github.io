import ReactDOM from 'react-dom/client'
import HomePage from './HomePage/HomePage'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPage from './AboutPage/AboutPage'
import BlogPage from './BlogPage/BlogPage'
import ErrorPage from './ErrorPage/ErrorPage'

const router = createBrowserRouter([{
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
},
{
    path: '/about',
    element: <AboutPage />},

{
    path: '/blog',
    element: <BlogPage />
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)