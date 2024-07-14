import * as S from "./style"
import logo from "../../assets/imgs/logo.png"
export const Header:React.FC = () => {
    return(
        <>
            <S.conteiner>

                <S.logo>
                    <S.img src={logo}></S.img>
                </S.logo>

                <S.paragrafo>
                    <S.msgSaudacao>
                        João, como você quer pagar?
                    </S.msgSaudacao>
                </S.paragrafo>
                
            </S.conteiner>
        </>
    )
}