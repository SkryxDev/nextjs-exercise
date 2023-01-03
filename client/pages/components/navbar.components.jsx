export default function Navbar() {
    return(
        <div>
            <nav className="navbar bg-dark sticky-top">
            <div className="container-fluid">
                <style jsx>{
                    ".whitetext{color:white;}"
                }
                </style>
                <a className="navbar-brand whitetext" href="#">NextJS e Express esercise</a>
            </div>
            </nav>
        </div>
    )
}