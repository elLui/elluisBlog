import PostHeader from "./post-header";
import styles from "./post-content.module.scss";
import ReactMarkdown from "react-markdown";


const DUMMY_POST = {

    slug: 'this-is-my-first-slug',
    title: 'this is my first slug',
    image: 'this-is-my-first-slug.png',
    excerpt: 'this is an excerpt from my first slug yet it is actually from the post-content dummy-data',
    date: '2022-12-09',
    content: '# a first markdown post'

}


export default function PostContent() {

    const imagePath = `/images/posts/${ DUMMY_POST.slug }/${ DUMMY_POST.image }`;


    return (
        <article className={styles.content}>
            <PostHeader title={ DUMMY_POST.title } image={ imagePath }/>
            <ReactMarkdown>{ DUMMY_POST.content }</ReactMarkdown>

        </article>
    )
}