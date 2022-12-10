import styles from "./post-content.module.scss";
import PostHeader from "./post-header";

import ReactMarkdown from "react-markdown";



const DUMMY_POST =     {
    slug: 'this-is-my-second-slug',
    title: 'this is my second slug',
    image: 'this-is-my-second-slug.png',
    date: '2022-12-22',
    content: '# h1 this is a first post'
}

const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;




export default function PostContent() {





    return(
        <article className={styles.content}>
            <PostHeader title={ DUMMY_POST.title} image={ imagePath}/>
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    )

}