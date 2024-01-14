import styles from "./Form.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function form() {
    return(
        <>
            <div className={styles.main}>
                <form >
                    <fieldset className={styles.form}>
                        <Image src={'/images/instagram.png'} className={styles.insta} alt="instagram logo" width={200} height={80}/>
                        <input className={styles.inputbox} type ="text" placeholder="Phone number, username, or email"/>
                        <input className={styles.inputbox} type ="password" placeholder="Password"/>
                        <button className={styles.submit} type="submit">Log in</button>
                        <h3 className={styles.or}>
                        <span className={styles.linespan}>OR</span></h3>                 
                        
                        <Link href="www.facebook.com" className={styles.facebook}>
                        <Image src={'/images/facebook.png'} alt="facebook logo" width={20} height={20}/>
                        <h3 className={styles.face3}>Log in with Facebook</h3>
                        </Link>
                        <Link href="https://www.instagram.com/accounts/password/reset/" className={styles.forgotpass}><h3>Forgot password&#63;</h3></Link>
                    </fieldset>
                </form>
            </div>
        </>
    )
}