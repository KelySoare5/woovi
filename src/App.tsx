import React, { FC } from 'react';
import { StyledGlobal } from './Styled/Global';
import { Header } from './pag_1/header/Header';
import { Pix } from './pag_1/main/pix/Pix';
import { Pixparcelado } from './pag_1/main/pixParcelado/Pixparcelado';


export const App:React.FC = () => {
  return (
    <>
      <StyledGlobal />
      <Header />
      <Pix/>
      <Pixparcelado />
      
    
    </>
  );
}

