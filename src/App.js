import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './containers/HomePage/homePage';
import ProfilePage from './containers/ProfilePage/profilePage';
import AboutMePage from './containers/AboutMePage/aboutMePage';
import EducationPage from './containers/EducationPage/educationPage';
import SkillPage from './containers/SkillsPage/skillPage';
import PersonalProjectsPage from './containers/PersonalProjectsPage/personalProjectsPage';
import PersonalExpPage from './containers/PersonalExpPage/personalExpPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<HomePage/>}/>
      <Route path="/profile" element ={<ProfilePage/>}>
        <Route path= "about-me" element={<AboutMePage/>}></Route>
        <Route path= "education" element={<EducationPage/>}></Route>
        <Route path= "skills" element={<SkillPage/>}></Route>
        <Route path= "personal-projects" element={<PersonalProjectsPage/>}></Route>
        <Route path= "personal-experience" element={<PersonalExpPage/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
