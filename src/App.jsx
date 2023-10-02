import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const Base = lazy(() => import('./views/Base/Base'))
const Login = lazy(() => import('./views/Login/Login'))
const SignUp = lazy(() => import('./views/SignUp/SignUp'))
const PasswordReset = lazy(() => import('./views/PasswordReset/PasswordReset'))
const ForgotPassword = lazy(() => import('./views/ForgotPassword/ForgotPassword'))
const LandingPage = lazy(() => import('./views/LandingPage/LandingPage'))
const Jobs = lazy(() => import('./views/Jobs/Jobs'))
const AboutUs = lazy(() => import('./views/AboutUs/AboutUs'))
const ContactUs = lazy(() => import('./views/ContactUs/ContactUs'))
const Tests = lazy(() => import('./views/Tests/Tests'))
const Blog = lazy(() => import( './views/Blog/Blog'))

const router = createBrowserRouter([
    {
      path: '/',
      element: <Base />,
      children: [
        {
          path: '',
          element: <LandingPage />
        },
        {
          path: 'jobs',
          element: <Jobs />
        },
        {
          path: 'tests',
          element: <Tests />
        },
        {
          path: 'about-us',
          element: <AboutUs />
        },
        {
          path: 'contact-us',
          element: <ContactUs />
        },
        {
          path: 'blog',
          element: <Blog />
        },
      ]
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'sign-up',
      element: <SignUp />
    },
    {
      path: 'password-reset',
      element: <PasswordReset />
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword />
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App