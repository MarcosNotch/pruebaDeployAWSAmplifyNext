import Counter from "../components/Counter/Counter"

export default function Layout ({children}) {
    return (
        <div>
            <h1>Este es el layout de los posts</h1>
            <Counter />
            {children}
        </div>
    )
}