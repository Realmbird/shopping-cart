import styles from './style/nav.module.css'
import { Link } from "react-router-dom";
import Cart from "../assets/grocery-store.png"

function Nav ({cart}) {
    return(
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="">Contact</Link>
                </li>
                <li>
                    <Link to="">About</Link>
                </li>
                <li>
                    <Link to="shop">Shop</Link>
                </li>
            </ul>
            <div className={styles.shopping}>
                <Link to="cart">
                    <img className = {styles.icon} src={Cart} alt="Shopping" />
                </Link>
                {cart.length}
            </div>
        </nav>
    );
}
export default Nav