import LikeButtom from "../components/LikeButton/LikeButtom"
import Link from "next/link"
import { useFetchPosts } from "../components/hooks/apiCalls"

const Post = async () => {

    const {posts} = await useFetchPosts()

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <LikeButtom />
                    <Link href={`/post/${post.id}`}> Detalle </Link>
                </div>
            ))}
        </div>
    )
}

export default Post