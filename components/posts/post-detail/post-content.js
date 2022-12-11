import styles from "./post-content.module.scss";
import PostHeader from "./post-header";
import Image from "next/image";
import ReactMarkdown from "react-markdown";


export default function PostContent (props) {


    const { post } = props;

    const imagePath = `/images/posts/${ post.slug }/${ post.image }`;
    const customRenderers = {
    //     img (image) {
    //         return (
    //             <Image
    //                 src={ `/images/posts/${ post.slug }/${ image.src }` }
    //                 alt={ image.alt }
    //                 width={ 600 }
    //                 height={ 300 }/>)
    //     },
        p (paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div className={styles.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>;
        },
    }


    return (<article className={ styles.content }>
        <PostHeader title={ post.title } image={ imagePath }/>
        <ReactMarkdown components={ customRenderers }>{ post.content }</ReactMarkdown>
    </article>)

}