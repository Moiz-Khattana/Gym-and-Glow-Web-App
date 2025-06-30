import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import User from './Components/User/User'; 
import Reports from './Components/Reports/Reports'; 
import SupportFeedback from './Components/SupportFeedback/SupportFeedback'; 
import ReviewsManagement from './Components/reviews management/Reviews'; 
import NotificationsManagement from './Components/NotificationsManagement/NotificationsManagement';
import Enlist from './Components/Dashboard/Components/Body Section/Top Section/Enlist';
import TopGymOwners from './Components/Dashboard/Components/Body Section/Listing Section/TopGymOwners'; // ✅ Step 1: Import
import TopSalonOwners from './Components/Dashboard/Components/Body Section/Listing Section/TopSalonOwners';
import MyOrders from './Components/Dashboard/Components/Body Section/Top Section/MyOrders';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventManagement from './Components/EventManagement/EventManagement';
import EditProfile from './Components/EditProfile/EditProfile';
import { UserProvider } from './contexts/UserContext'; 

const ErrorPage = () => (
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <h2>404 - Page Not Found</h2>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <a href="/dashboard" style={{ color: '#ff9800', textDecoration: 'none' }}>Go to Dashboard</a>
  </div>
);


const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/user', element: <User /> },
  { path: '/reports', element: <Reports /> },
  { path: '/support-feedback', element: <SupportFeedback /> },
  { path: '/reviews', element: <ReviewsManagement /> }, 
  { path: '/notifications', element: <NotificationsManagement /> },
  { path: '/enlist', element: <Enlist /> },
  { path: '/top-gym-owners', element: <TopGymOwners /> }, 
  { path: '/top-salon-owners', element: <TopSalonOwners /> },
  { path: '/my-orders', element:<MyOrders /> },
  { path:'/event-management', element: <EventManagement />},
  { path:'/edit-profile', element:<EditProfile />}

]);


function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
