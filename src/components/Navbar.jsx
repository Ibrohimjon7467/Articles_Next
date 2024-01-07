import Link from "next/link"

function Navbar() {
    return (
        <div>
            <div className="max-container flex items-center justify-between">
                <h1 className="text-3xl font-bold">Articles</h1>

                <nav className="flex gap-4">
                    <Link className="link-hover" href='/'>Home</Link>
                    <Link className="link-hover" href='/articles'>Articles</Link>
                    <Link className="link-hover" href='/about'>About</Link>
                    <Link className="link-hover" href='/contact'>Contact</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar