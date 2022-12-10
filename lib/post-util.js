import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';


const postDirectoryPath = path.join (process.cwd (), 'posts')


function getPostData (fileName) {


    const filePath = path.join (postDirectoryPath, fileName);

    const fileContent = fs.readFileSync (filePath, "utf-8");

    // data and content are static names in gray-matter context
    const { data, content } = matter (fileContent);

    const postSlug = fileName.replace (/\.md$/, ''); // remove filename ext

    const postData = {
        slug: postSlug,
        ...data,
        content: content,
    };


    return postData;

}

function getAllPosts () {
    const postFiles = fs.readdirSync (postDirectoryPath);

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


function getFeaturedPosts() {


    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}