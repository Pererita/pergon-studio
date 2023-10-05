import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {

  // Logo navbar
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image 
      src="/images/logo.png"
      width={70}
      height={70}
      alt='Logo de Pergon Studio'/>
    </Link>
  )
}
