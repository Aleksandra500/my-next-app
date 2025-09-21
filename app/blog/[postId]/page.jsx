import {posts} from '../data'

export default async function BlogPost({params}){

    const {postId} = params

    const post = posts.find((p) => p.id === postId)

    if(!post){
        return <h1>Post not found</h1>
    }
    return(
        <article>
            <h1>{post.title}</h1>
            <h1>{post.content}</h1>
        </article>
    )
}