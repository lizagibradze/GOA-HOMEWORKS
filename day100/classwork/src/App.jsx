import { Route, Routes, NavLink, Link } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";



export default function App(){
  const navMenuData = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Contacts",
      path: "/contacts"
    },
    {
      title: "Lomi",
      path: "/lomi"
    },
]


  return(
    <div>
      <header>
        <ul>
          {
            navMenuData.map((navItem, navIndex) => (
              <li key={`nav-link-${navIndex}`}>
              <NavLink className={({isActive}) => isActive && "text-red-500"} to={navItem.path} >{navItem.title}</NavLink>
              </li>
            ))
          }
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<div>Contacts</div>} />
        <Route path="/lomi" element={<div>lomi</div>} />



      </Routes>
    </div>

  )
}






