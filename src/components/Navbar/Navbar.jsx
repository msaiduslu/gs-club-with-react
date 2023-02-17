import "./Navbar.scss"
import logo from "../../helpers/GS_Logo.svg.png"

const Navbar = ()=>{
  return(
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
      <div className="links">
        <a href="#team">Team</a>
        <a href="#players">Players</a>
        <a href="#matches">Matches</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>

    </div>
  )
}

export default Navbar