import { NavLink } from "react-router-dom"

export default function Navbar() {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive")

    return (
        <div className="navbar">
            <div>
            <NavLink to="/"><img className="navbar__img" src="./src/assets/img/pokedex.png"></img></NavLink>
                
            </div>

            <div className="navbar__links">
                <NavLink className={setActiveClass} to="/">Home</NavLink>
                <NavLink className={setActiveClass} to="/pokemon">Pokemon</NavLink>
            </div>

        </div>

    )
}