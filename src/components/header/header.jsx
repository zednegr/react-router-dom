import "./header.scss"
import {NavLink} from 'react-router-dom'

function Header() {

    return (

            <section className="header-section">
                    <nav>
                        <ul className="nav_list">
                            <NavLink to={"/"} className="nav_li">Home</NavLink>
                            <NavLink to={"/about"} className="nav_li">About</NavLink>
                            <NavLink to={"/contact"} className="nav_li">Contact</NavLink>
                        </ul>
                    </nav>

            </section>
    )
}

export default Header