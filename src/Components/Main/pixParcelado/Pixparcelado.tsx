import React from "react";
import * as S from "./styled"

export const Pixparcelado:React.FC = () =>{
    return(
        <>
            <S.conteiner>
                <S.nomePixparcelado>
                    Pix Parcelado
                </S.nomePixparcelado>
                <S.parcela>2 x 15.300,00</S.parcela>
                <S.totalParcela>Total: R$ 30.000,00</S.totalParcela>
            </S.conteiner>
        </>
    )
}