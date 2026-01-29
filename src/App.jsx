import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RoboticsKitPage from './pages/RoboticsKitPage';
import MentorsPage from './pages/MentorsPage';
import ProgramCurriculumPage from './pages/ProgramCurriculumPage';
import RobotTest from './pages/RobotTest';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RiaChatbot from './components/RiaChatbot/RiaChatbot';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robotics-kit" element={<RoboticsKitPage />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/programs" element={<ProgramCurriculumPage />} />
        <Route path="/robot-test" element={<RobotTest />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <RiaChatbot />
    </div>
  );
}

export default App;

