import Header from './components/Header';
import Hero from './components/Hero';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import backgroundImage from './images/bg-simplify-section-desktop.svg'

function App() {
  return (
    <div className='min-h-screen w-full' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Header />
        <Hero />
        <SectionOne />
        <SectionTwo />
    </div>
  );
}

export default App;
