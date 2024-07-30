import React from "react";
import { Header } from '../Components/Header/Header';
import {CartParcelado} from '../Components/Main/CartParcela/CartParcela'
import { CartPix } from '../Components/Main/Cartpix/CartPix';
import { Pixparcelado } from '../Components/FormaPagar/pixParcelado/Pixparcelado';
import { Footer } from "../Components/Footer/Footer";
import { Pix } from "../Components/FormaPagar/NomePix/Pix";


export const PaginaUm:React.FC = () => {
    return(
        <>
            <Header />
            <Pix />
            <CartPix/>
            <Pixparcelado />
            <CartParcelado />
            <CartParcelado />
            <CartPix />
            <CartParcelado />
            <CartParcelado />
            <CartParcelado />
            <Footer />

        </>
    )
}