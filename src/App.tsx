import React from 'react';
import GlobalStyle from './styles/global';

import {SignIn} from './pages/SignIn/SignIn';
// import {SignUp} from './pages/SignUp/SignUp';
function App() {
  return (
    <>
      <SignIn/>
      <GlobalStyle />
    </>
  );
}

export default App;
