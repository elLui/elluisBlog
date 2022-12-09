import styles from './featured-post.module.scss';
import PostsGrid from "../posts/posts-grid";


export default function FeaturedPost(props) {



    return (
        <section className={styles.latest}>
            <h2>happening posts</h2>
            <PostsGrid posts={props.posts}/>
        </section>
    )
}