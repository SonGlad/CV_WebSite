import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles/globaleStyles.styled.js';
import { theme } from './globalStyles/theme.js';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import {store, persistor} from "./redux/store.js";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* <Provider store = {store}> */}
      {/* <PersistGate loading={null} persistor={{persistor}}> */}
        <BrowserRouter basename='/react_template'>
          <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);


