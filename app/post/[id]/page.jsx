import Link from "next/link"
import { useFetchPostByID } from "../../components/hooks/apiCalls"

const PostId = async ({params }) => {

    const { id } = params;
    const { post } = await useFetchPostByID(id)

    return (
        <div>
            <ul>
                <li key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link href={`/post/${post.id}/comments`}> Mostrar Comentarios </Link>
                </li>
            </ul>
        </div>
    )
}

export default PostId   