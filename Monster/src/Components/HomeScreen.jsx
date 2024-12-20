
import Header from './Header';
import Services from './Services';
import Develop from './Develop';
import Team from './Team';
import People from './People';
import Pricing from './Pricing';
import News from './News';
import Contact from './Contact';
export default function HomeScreen() {
  return(
    <>
 <section className='relative '>
        <Header/> 
      <section className='px-20 flex flex-col gap-16'>
        <Services/>
      <Develop/>
      <Team/>
      <People/>
      <Pricing/>
      <News/>
      <Contact/>
      </section>
    </section>
    </>
  )
}
