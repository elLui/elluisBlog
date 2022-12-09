import Link from "next/link";
import Image from "next/image";
import styles from "./post-item.module.scss";

export default function PostItem (props) {


    const { title, image, excerpt, date, slug } = props;

    const formattedDate = new Date (date).toLocaleDateString ('en-US', {
        day: "numeric",
        month: 'long',
        year: "numeric",
    })

    const imagePath = `/images/posts/${ slug }/${ image }`;


    return (
        <li className={ styles.post }>
            <Link>

                <a href="">
                    <div className={ styles.image }>
                        <Image src={ imagePath } alt={ 'alternate post image' } height={ 300 } width={ 200 }/>
                    </div>
                    <div className={ styles.content }></div>
                    <h3>{ title }</h3>
                    <time>{ formattedDate }</time>
                    <p>{ excerpt }</p>
                </a>
            </Link>
        </li>
    )
}