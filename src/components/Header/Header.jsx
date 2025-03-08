import "./Header.css"
import { FaPlaneDeparture } from "react-icons/fa6";
import{ NavLink } from 'react-router-dom'

const navLinks = [
    {to:'/', label: 'home'},
    {to:'/destinations', label: 'destinations'},
    {to:'/packages', label: 'packages'},
    {to:'/contact', label: 'contact'}
]


function Header () {
    return(
        <div className="header-wrapper">
            <section className="header">
                <HeaderLogo />
                <HeaderNavs />
                <HeaderCta />
            </section>

        </div>
    )
}

function HeaderLogo () {
    return(
        <div className="header-logo">
            <FaPlaneDeparture className="logo-icon" />

            <p className="logo-text">
                zaph tours
            </p>
        </div>
    )
}

function HeaderNavs() {
    return(
        <nav className="header-navs">
            <ol className="navs-list">
                {navLinks.map(navLink => <NavigationLink to={navLink.to} label={navLink.label} key={navLink.label} />)}
            </ol>
        </nav>
    )
}

function NavigationLink({to, label}) {
    return(
        <li className="nav">
            <NavLink className={({ isActive }) => isActive=== true ? "active-link" : ""} to={to}>{label}</NavLink>
        </li>
    )
}

function HeaderCta() {
    return (
        <div className="header-cta">
            <a href="#" className="cta-link">
                Book Trip
            </a>
        </div>
    ) 
}

export default Header