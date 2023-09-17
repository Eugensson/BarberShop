import About from "@/components/About/About";
import ServicesAndPrices from "@/components/ServicesAndPrices/ServicesAndPrices";
import Preference from "@/components/Preference/Preference";
import OurBarbers from "@/components/OurBarbers/OurBarbers";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contacts from "@/components/Contacts/Contacts";

const Home = () => {
  return (
    <>
      <h1 className="visuallyHidden">BarberShop</h1>
      <About/>
      <ServicesAndPrices/>
      <Preference/>
      <OurBarbers/>
      <Portfolio/>
      <Contacts/>
    </>
  )
}

export default Home;