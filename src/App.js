import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Pages/Blogs/Blogs';
import AddProduct from './Pages/Dashboard/Dashboard/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ManageProducts from './Pages/Dashboard/Dashboard/ManageProducts';
import MyOrder from './Pages/Dashboard/Dashboard/MyOrder';
import Review from './Pages/Dashboard/Dashboard/Review';
import Users from './Pages/Dashboard/Dashboard/Users';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import MyPortfolio from './Pages/MyPorfolio/MyPortfolio';
import Footer from './Pages/SharedPage/Footer';
import Navbar from './Pages/SharedPage/Navbar';
import NotFound from './Pages/SharedPage/NotFound';
import Payment from './Pages/Dashboard/Dashboard/Payment';
import MyProfile from './Pages/Dashboard/Dashboard/MyProfile';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='registration' element={<Registration />}></Route>
        <Route path='blogs' element={<Blogs />}></Route>
        <Route path='portfolio' element={<MyPortfolio />}></Route>
        <Route path='purchase/:purchaseId' element={<RequireAuth><Purchase /></RequireAuth>}></Route>

        <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrder />}></Route>
          <Route path='review' element={<Review />}></Route>
          <Route path='profile' element={<MyProfile />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path='manageProduct' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
