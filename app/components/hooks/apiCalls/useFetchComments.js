export default async function useFetchPostByID(id) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const comments = await res.json()
    return {comments}
}
