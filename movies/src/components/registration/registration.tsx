import * as Style from "./style";
import { useNavigate } from "react-router-dom";
import { Path } from "../../types/routes";

export function Registration() {
  const navigate = useNavigate();
  return (
    <Style.registration>
      <Style.registrationLogin>
        <h3>cadastro</h3>
        <Style.registrationform>
          <input type="text" name="name" placeholder="nome completo" />
          <input type="text" name="cpf" placeholder="cpf" />
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="idade" placeholder="idade" />
          <input type="text" name="password" placeholder="senha" />
          <input
            type="text"
            name="confirmPassword"
            placeholder="confirmação da senha"
          />
          <Style.registrationDivButton>
            <Style.registrationButton
              onClick={() => {
                navigate(Path.HOME);
              }}
            >
              Enviar
            </Style.registrationButton>
            <Style.registrationButton
              onClick={() => {
                navigate(Path.LOGIN);
              }}
            >
              Voltar
            </Style.registrationButton>
          </Style.registrationDivButton>
        </Style.registrationform>
      </Style.registrationLogin>
    </Style.registration>
  );
}
