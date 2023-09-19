import About from "@/sections/About/About";
import ServicesAndPrices from "@/sections/ServicesAndPrices/ServicesAndPrices";
import Preference from "@/sections/Preference/Preference";
import OurBarbers from "@/sections/OurBarbers/OurBarbers";
import Portfolio from "@/sections/Portfolio/Portfolio";
import Contacts from "@/sections/Contacts/Contacts";

const Home = () => {
  return (
    <>
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