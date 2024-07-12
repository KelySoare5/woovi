import React from "react";
import { Header } from '../Components/Header/Header';
import { Pix } from '../Components/Main/pix/Pix';
import { Pixparcelado } from '../Components/Main/pixParcelado/Pixparcelado';
import { Footer } from "../Components/Footer/Footer";


export const PaginaUm:React.FC = () => {
    return(
        <>
            <Header />
            <Pix/>
            <Pixparcelado />
            <Pixparcelado />
            <Pixparcelado />
            <Pix/>
            <Pixparcelado />
            <Pixparcelado />
            <Pixparcelado />
            <Footer />

        </>
    )
}