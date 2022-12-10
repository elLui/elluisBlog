import PostHeader from "./post-header";


const DUMMY_POST = {

    slug: 'this-is-my-first-slug',
    title: 'this is my first slug',
    image: 'this-is-my-first-slug.png',
    excerpt: 'this is an excerpt from my first slug yet it is actually from the post-content dummy-data',
    date: '2022-12-09',
    content: '# a first markdown post'

}


export default function () {

    const imagePath = `/images/posts/${ DUMMY_POST.slug }/${ DUMMY_POST.image }`;


    return (
        <article>
            <PostHeader title={ DUMMY_POST.title } image={ imagePath }/>
            { DUMMY_POST.content }
        </article>
    )
}