import styles from "./post-header.module.scss";
import Image from "next/image";



export default function PostHeader(props) {

    const {title, image} = props;


    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <Image src={image} alt={'post header alternate'} width={200} height={150}/>
        </header>
    )
}