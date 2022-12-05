import { getFileBySlug, getFiles } from "../lib/mdx";

export default function Post({ source, frontmatter }) {
    return <h1>Post</h1>;
}

export async function getStaticProps({ params }){
    const { source, frontmatter } = await getFileBySlug(param.slug);

    return {
        props: { source, frontmatter },
    };
}

export async function getStaticPaths(){
    const posts = await getFiles();
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/,""),
        },
    }));
}