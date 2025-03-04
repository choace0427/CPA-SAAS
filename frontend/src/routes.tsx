import { Route, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom';

import { AppLayout, RootLayout } from './layouts';
import { AuthLayout } from './layouts/auth-layout';
import { Login } from './pages/auth';
import { Projects } from './pages/projects';

// Ideally this would be an API call to server to get logged in user data
const getUserData = () => {
  return new Promise((resolve, _reject) =>
    setTimeout(() => {
      const user = window.localStorage.getItem('user')
      resolve(user)
    }, 3000)
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} loader={() => defer({ userPromise: getUserData() })}>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Route>
  )
)
