import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Loading } from './CustomLoaders/CustomLoaders';
import { Footer } from "../components/Footer/Footer"
import { StyledContainer } from './SharedLayout.styled';



export const SharedLayout = () => {

  return(
    <StyledContainer>
      <Header/>
      <Suspense fallback={<Loading/>}>
        <main className='main'>
          <Outlet />
        </main>
      </Suspense>
      <Footer/>
    </StyledContainer>
  );
};