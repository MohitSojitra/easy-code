import Link from 'next/link'
export default function Header() {
  return (
    <div>
      <main>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
