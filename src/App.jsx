import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout/Layout.jsx"
import { Home } from "./pages/Home/Home.jsx"
import { Login } from "./pages/Login/Login.jsx"
import { PhoneBook } from "./pages/PhoneBook/PhoneBook.jsx"
import { Register } from "./pages/Register/Register.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/PhoneBook" element={<PhoneBook />}/>
        <Route path="/Register" element={<Register />}/>
      </Route>
    </Routes>
  )
}

export default App
