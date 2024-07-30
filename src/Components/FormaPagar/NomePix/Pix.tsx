import React from "react"
import * as S from "./styled"


export const Pix: React.FC = () =>{
    return(
        <>
            <S.div>

                <S.caixaNomePix>
                    <S.nomePix>
                        Pix
                    </S.nomePix>
                </S.caixaNomePix>

                {/* <S.parcelaValor>
                    <S.parcela>1 x </S.parcela>
                    <S.valor>R$ 30.500,00</S.valor>
                </S.parcelaValor>

                <S.fraseCashback>
                    <S.cashBack>
                    Ganhe <S.porcentagem>3%</S.porcentagem> de Cashback</S.cashBack>
                </S.fraseCashback>


                <S.barraAzul>
                    <S.img src={Rectangle}></S.img>
                    <S.ofertaPagamento>
                    🤑 R$ 300,00 <S.valorOferta>de volta no seu Pix na hora</S.valorOferta>
                    </S.ofertaPagamento>
                </S.barraAzul> */}
            </S.div>
        </>
    )
}