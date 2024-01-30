import { SharedLayout } from "./SharedLayout";
import { Navigate, Route, Routes} from "react-router-dom";
import { lazy } from "react";
import { Modal } from "./Modal/Modal";
import { useModal } from "../hooks/useModal";
// import { useEffect } from "react";
// import { useDispatch} from "react-redux";
// import { PrivateRoute } from "./PrivateRoute";
// import { RestrictedRoute } from "./RestrictedRoute";


const HomePage = lazy(() => import('../pages/Home/Home'));
const AboutPage = lazy(() => import('../pages/About/About'));
const EducationPage = lazy(() => import ('../pages/Education/Education'));
const SkillsPage = lazy(() => import('../pages/Skills/Skills'));
const PortfolioPage = lazy(() => import('../pages/Portfolio/Portfolio'));
const ContactPage = lazy(() => import('../pages/Contact/Contact'));



export const App= () => {
  const {isEducationModalOpen} = useModal();


  return (
    <>
      <Routes>
        <Route path='/' element = {<SharedLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='*' element={<Navigate to ='/'/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path ='/education' element={<EducationPage/>}/>
          <Route path='/skills' element={<SkillsPage/>}/>
          <Route path='/portfolio' element={<PortfolioPage/>}/>
          <Route path ='/contact' element={<ContactPage/>}/>
        </Route>    
      </Routes>, 
      {isEducationModalOpen && <Modal/>}
    </>
  );
};
