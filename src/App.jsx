import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WeRrcmUnique from './components/WeRrcmUnique';
import WeRrcmJourney from './components/WeRrcmJourney';
import WeRrcmCurriculum from './components/WeRrcmCurriculum';
import SuccessStories from './components/SuccessStories';
import WeRrcmMentors from './components/WeRrcmMentors';
import WeRrcmTestimonials from './components/WeRrcmTestimonials';
import GallerySection from './components/GallerySection';
import RoboKitSection from './components/RoboKitSection';
import WeRrcmContactForm from './components/WeRrcmContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <WeRrcmUnique />
      <WeRrcmJourney />
      <WeRrcmCurriculum />
      <SuccessStories />
      <WeRrcmMentors />
      <WeRrcmTestimonials />
      <GallerySection />
      <RoboKitSection />
      <WeRrcmContactForm />
      <Footer />
    </div>
  );
}

export default App;
