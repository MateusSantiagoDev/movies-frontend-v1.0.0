import * as Style from "./style";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Path } from "../../types/routes";
import { Api } from "../../data/api/api";

export function Login() {
  const navigate = useNavigate();
  const [buttonpassword, setButtonPassword] = useState<boolean>(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const LoginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const response = await Api.login(LoginPayload);
    if(response) {
      navigate(Path.HOME);
    }
  }
  return (
    <Style.Body>  
      <Style.Login>
        <Style.Form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input placeholder="email" type="email" name="email" />
          <Style.DivButtonInput>
          <input placeholder="password" type={buttonpassword? "text" : "password" }/>
          <button onClick={() => setButtonPassword(!buttonpassword)}>{buttonpassword? <BsEyeFill/> : <BsEyeSlashFill/>}</button>
          </Style.DivButtonInput>
          <button type="submit">Login</button>
          <Style.Register>
            <Style.ButtonRegister
              onClick={() => {
                navigate(Path.REGISTRATION);
              }}
            >
              Fazer cadastro
            </Style.ButtonRegister>
          </Style.Register>
        </Style.Form>
      </Style.Login>
    </Style.Body>
  );
}
