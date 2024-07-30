import React from "react";
import * as S from "./styled"

export const CartParcelado:React.FC = () =>{
    return(
        <>
            <S.conteiner>

                <S.parcelaValor>
                    <S.parcela>2 x </S.parcela>
                    <S.valor>R$ 15.300,00</S.valor>
                </S.parcelaValor>


                <S.totalParcela>
                    <S.total>
                    Total: R$ 30.000,00
                    </S.total>
                </S.totalParcela>
            </S.conteiner>
        </>
    )

}