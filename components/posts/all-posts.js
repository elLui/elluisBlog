import styles from "./all-posts.module.scss"
import PostsGrid from "./posts-grid";




export default function AllPosts(props) {




    return (
        <section className={styles.posts}>
            <h1>toda los posts</h1>
            <PostsGrid posts={props.posts}/>
        </section>
    )
}