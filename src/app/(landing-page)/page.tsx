
import FifthSection from './FifthSection/page';
import FourthSection from './FourthSection/page';
import Hero from './HeroScetion/page';
import Navbar from './Navbar/page';
import SecondSection from './SecondSection/page';
import ThirdSection from './ThirdSection/page';

export default function Home() {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
    </section>
  )
}
