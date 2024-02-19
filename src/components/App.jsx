import { Navigate, Route, Routes, useLocation} from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout";
import { Modal } from "./Modal/Modal";
import { useModal } from "../hooks/useModal";
import { useData } from "../hooks/useData";
import { RefreshLoading } from "../components/CustomLoaders/CustomLoaders";


const HomePage = lazy(() => import('../pages/Home/Home'));
const AboutPage = lazy(() => import('../pages/About/About'));
const EducationPage = lazy(() => import ('../pages/Education/Education'));
const SkillsPage = lazy(() => import('../pages/Skills/Skills'));
const PortfolioPage = lazy(() => import('../pages/Portfolio/Portfolio'));
const ContactPage = lazy(() => import('../pages/Contact/Contact'));


export const App= () => {
  const {isEducationModalOpen, isPortfolioModalOpen, isContactModalOpen} = useModal();
  const {isLoading} = useData();
  const currentPath = useLocation().pathname;


  return (
    <>
      {(isLoading && currentPath === '/contact') && <RefreshLoading />}
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
      </Routes>
      {(isEducationModalOpen || isPortfolioModalOpen || isContactModalOpen) && <Modal/>}
    </>
  );
};
