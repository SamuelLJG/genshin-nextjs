
import Link from "@/components/Link";
 
export default function NotFound() {
  return (
    <main id='not-found-main'>
      <h2>404 - Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </main>
  )
}