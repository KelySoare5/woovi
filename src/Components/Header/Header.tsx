import * as S from "./style"

export const Header:React.FC = () => {
    return(
        <>
            <S.conteiner>
                <S.logo/>
                <S.msgSaudacao>
                    João, como você quer pagar?
                </S.msgSaudacao>
            </S.conteiner>
        </>
    )
}