import { useFetchComments } from "../../../components/hooks/apiCalls";

const PostCommentsPage = async ({params}) => {
    const {id} = params;
    const { comments } = await useFetchComments(id)
    
    return (
        <div>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <h1>{comment.name}</h1>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostCommentsPage