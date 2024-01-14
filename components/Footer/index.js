import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return(
        <footer className={styles.footer}>
        <div className={styles.top}>
            <Link href="" className={styles.links}>Meta</Link>
            <Link href="" className={styles.links}>About</Link>
            <Link href="" className={styles.links}>Blog</Link>
            <Link href="" className={styles.links}>Jobs</Link>
            <Link href="" className={styles.links}>API</Link>
            <Link href="" className={styles.links}>Privacy</Link>
            <Link href="" className={styles.links}>Terms</Link>
            <Link href="" className={styles.links}>Locations</Link>
            <Link href="" className={styles.links}>Instagram Lite</Link>
            <Link href="" className={styles.links}>Threads</Link>
            <Link href="" className={styles.links}>Contact Uploading & Non-Users</Link>
            <Link href="" className={styles.links}>Meta Verified</Link>
        </div>
        <div className={styles.bottom}>
            <Link href="" className={styles.english}>English &#x25BC;</Link>
            <p>&#169; 2024 Instagram from Meta</p>
        </div>
        </footer>
    )
}