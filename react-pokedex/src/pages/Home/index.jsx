import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../assets/img/home/banner.png'
export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <header>
                <Header />
            </header>
            <main>
                <div className={styles.coverText}>
                    <div>
                        <h1 className={styles.coverText_title}>
                        <strong>Find</strong> all your favorite <strong>Pokemon</strong>
                    </h1>
                    <h2 className={styles.coverText_paragraph}>
                        You can know the type of Pokemon, its strengths, disadvantages and abilities
                    </h2>
                    <button className={styles.coverText_button}>
                        <Link to="/poke">See pokemons</Link>
                    </button>
                    </div>

                    <img className={styles.banner} src={Banner} alt="" />
                    
                </div>
            </main>
            <Footer />
        </div>

    )
}