import Image from 'next/image';
import styles from './post-header.module.scss';

export default function (props) {


    const {title, image} = props;

    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <Image src={image} alt={'title image'} width={200} height={150} />
        </header>
    )
}