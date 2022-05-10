import Logo from '../../../assets/img/Logo.png'
import styles from './Header.module.css'
export default function Header() {
    return (
            <div className={styles.header_container}>
                <img className={styles.header_logo} src={Logo} />
                <ul className={styles.header_menuOptions}>
                    <li>Home</li>
                    <li>Pokédex</li>
                    <li>Legendaries</li>
                    <li>Documentation</li>
                </ul>
            </div>  
        
    )
}