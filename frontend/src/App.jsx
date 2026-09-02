import {BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddUser  from './pages/AddUser'
import  AddService  from './pages/AddService'
import AddMechanic  from './pages/AddMechanic'
import BookService from './pages/BookService'
import {Navbar} from './component/Navbar'
import {Login} from "./component/Login"
import { Register } from './component/Register'
import { ProtectedRoute } from './component/ProtectedRoute'

// Common Layout
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export const App = () => {
  return (
    <>
        <Router>
            
            <Routes>
                <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    {/* Ye saare pages MainLayout ke andar honge */}
                <Route element={<ProtectedRoute />}>
                    <Route element={<MainLayout />}>
                        <Route path="/dashboard" element={ <Dashboard />  } />
                        <Route path="/service" element={ <AddService />  } />
                        <Route path="/mechanic" element={ <AddMechanic />  } />
                        <Route path="/booking" element={ <BookService />  } />
                   </Route>
                </Route>
            </Routes>
        </Router>
    </>
  )
}
