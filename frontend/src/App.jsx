import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddUser  from './pages/AddUser'
import  AddService  from './pages/AddService'
import AddMechanic  from './pages/AddMechanic'
import BookService from './pages/BookService'
import {Navbar} from './component/Navbar'
export const App = () => {
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/dashboard" element={ <Dashboard />  } />
                <Route path="/user" element={ <AddUser />  } />
                <Route path="/service" element={ <AddService />  } />
                <Route path="/mechanic" element={ <AddMechanic />  } />
                <Route path="/booking" element={ <BookService />  } />
            </Routes>
        </Router>
    </>
  )
}
