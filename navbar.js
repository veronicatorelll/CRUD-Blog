import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="name">Veronica Torell</h1>
            <div className="links">
          <Link to ="/">Hem</Link>
          <Link to ="/create">Ny Blogg</Link>

            </div>
        </nav>
     );
}
 
export default Navbar;