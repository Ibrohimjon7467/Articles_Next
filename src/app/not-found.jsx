import Link from "next/link"
import { headers } from "next/headers"

function NotFound() {

  const headersList = headers()
  const domain = headersList.get('host')

  return (
    <div className="prose">
      <h1>Not Found: {domain}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, et.</p>
      <Link href='/'>Return Home</Link>
    </div>
  )
}

export default NotFound