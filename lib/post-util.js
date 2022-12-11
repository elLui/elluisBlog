import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';


const postDirectoryPath = path.join (process.cwd (), 'posts')

export function getPostsFiles() {
    return fs.readdirSync(postDirectoryPath);
}
export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
    const filePath = path.join(postDirectoryPath, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };


    return postData;

}

export function getAllPosts () {
    const postFiles = getPostsFiles();

    // return an array
    const allPosts = postFiles.map (postFile => {
        return getPostData (postFile);
    })

    const sortedPosts = allPosts.sort ((postA, postB) => postA > postB ? -1 : 1);


    return sortedPosts;

    // for (const postFile of postFiles) {
    //     const postData = getPostData (postFile);
    // }


}


export function getFeaturedPosts() {


    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}