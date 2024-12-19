
import Develop from './Components/Develop';
import Header from './Components/Header';
import Services from './Components/Services';
import Team from './Components/Team';
import People from './Components/People';
import Pricing from './Components/Pricing';
import Latest from './Components/Latest';
import News from './Components/News';
import Contact from './Components/Contact';

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
