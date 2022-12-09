import styles from './hero.module.scss';
import Image from "next/image";

export default function Hero() {


    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image src={"/images/me_in_circle.jpg"} alt={'an image of a really awesome person'} width={300} height={300}/>
            </div>
            <h1>greeting from a guy named elLuis</h1>
            <p>A blog about front end dreams and broken infrastructure.</p>
        </section>
    )
}