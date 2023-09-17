import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
        <Image
          src={"/logo.svg"}
          width={70}
          height={70}
          alt="Logo"
        />
    </Link>
  )
}

export default Logo;