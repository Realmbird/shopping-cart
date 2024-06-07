import logo from '../assets/logo-site.png'
import Nav from './navbar.jsx'
import styles from './style/home.module.css'
function Home () {
    return (
        <div>
            <div className={styles.home}>
                <div className={styles.title}>
                    <img className = {styles.logo} src={logo} alt="logo" />
                    <h1>Awesome Shop</h1>
                </div>
            </div>
        </div>
    )
}
export default Home