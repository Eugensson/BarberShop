import Image from "next/image";

const PortfolioItem = ({imageUrl}) => {
  return (
    <Image src={imageUrl} alt="Photo barbers working" width={418} height={360} />
  )
}

export default PortfolioItem;