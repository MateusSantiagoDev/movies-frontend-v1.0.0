import * as Style from "./style";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { Path } from "../../types/routes";
import { User } from "./types/type";
import { Api } from "../../data/api/api";

export function Registration() {
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user: User = {
      name: e.currentTarget.nameUser.value,
      cpf: e.currentTarget.cpf.value,
      email: e.currentTarget.email.value,
      idade: Number(e.currentTarget.idade.value),
      role: "user",
      password: e.currentTarget.password.value,
      confirmPassword: e.currentTarget.confirmPassword.value,
    };

    const response = await Api.createUser(user);
    if (response) {
      navigate(Path.LOGIN);
    }
  }
  return (
    <Style.registration>
      <Style.registrationLogin>
        <h3>cadastro</h3>
        <Style.registrationform onSubmit={handleSubmit}>
          <input type="text" name="nameUser" placeholder="nome completo" />
          <input type="text" name="cpf" placeholder="cpf" />
          <input type="text" name="email" placeholder="email" />
          <input type="number" name="idade" placeholder="idade" />
          <input type="text" name="password" placeholder="senha" />
          <input
            type="text"
            name="confirmPassword"
            placeholder="confirmação da senha"
          />
          <Style.registrationDivButton>
            <Style.registrationButton type="submit">
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
