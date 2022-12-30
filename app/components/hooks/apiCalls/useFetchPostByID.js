

export default async function useFetchPostByID(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    return {post}
}
