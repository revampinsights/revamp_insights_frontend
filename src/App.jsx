import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Base from './views/Base/Base';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp'
import PasswordReset from './views/PasswordReset/PasswordReset'
import ForgotPassword from './views/ForgotPassword/ForgotPassword'
import LandingPage from './views/LandingPage/LandingPage'
import Jobs from './views/Jobs/Jobs'
import AboutUs from './views/AboutUs/AboutUs'
import ContactUs from './views/ContactUs/ContactUs'
import Tests from './views/Tests/Tests';
import Blog from  './views/Blog/Blog'

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