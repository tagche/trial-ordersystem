import Link from 'next/link'
import LoginControl from "../module/loginControl"
import styles from '@/styles/Header.module.css'


export default function Header(){
    return (
        <header className={styles.header}>
            <h1><Link href="/">Portfolio OrderSystem</Link></h1>
            <LoginControl />
        </header>
    )
}