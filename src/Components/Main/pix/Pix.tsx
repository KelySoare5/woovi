import React from "react"
import * as S from "./styled"

export const Pix: React.FC = () =>{
    return(
        <>
            <S.div>
                <S.nomePix>
                    PIX
                </S.nomePix>
                <S.valor>1 x R$ 30.500,00</S.valor>
                <S.cashBack>3% de cashback</S.cashBack>
                <S.barraAzul>
                    <S.oferta>R$ 300,00 de volta no seu Pix na hora</S.oferta>
                </S.barraAzul>
            </S.div>
        </>
    )
}