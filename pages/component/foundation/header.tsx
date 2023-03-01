import LoginControl from "../module/loginControl"
import styles from '@/styles/Header.module.css'


export default function Header(){
    return (
        <header className={styles.header}>
            <h1>Trial OrderSystem</h1>
            <LoginControl />
        </header>
    )
}