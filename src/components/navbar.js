
import { BrowserRouter as Router,
  Link
} from "react-router-dom";


const NavBar = ()=> {
  return(
  <>
    <div>
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    </div>
  </>)
}
export default NavBar;