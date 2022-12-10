import AllPosts from "../../components/posts/all-posts";



const DUMMY_POSTS = [
    {
        slug: 'this-is-my-first-slug',
        title: 'this is my first slug',
        image: 'this-is-my-first-slug.png',
        excerpt: 'this is an excerpt from my first slug',
        date: '2022-12-09',
    },
    {
        slug: 'this-is-my-second-slug',
        title: 'this is my second slug',
        image: 'this-is-my-second-slug.png',
        excerpt: 'this is an excerpt from my second slug',
        date: '2022-12-22',
    },
    {
        slug: 'this-is-my-third-slug',
        title: 'this is my third slug',
        image: 'this-is-my-third-slug.png',
        excerpt: 'this is an excerpt from my third slug',
        date: '2022-12-28',
    },
    {
        slug: 'this-is-my-fourth-slug',
        title: 'this is my fourth slug',
        image: 'this-is-my-fourth-slug.png',
        excerpt: 'this is an excerpt from my fourth slug',
        date: '2023-01-02',
    },

]

export default function AllPostsPage() {


    return(
        <AllPosts posts={DUMMY_POSTS}/>
    )


}