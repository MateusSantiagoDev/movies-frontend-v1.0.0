import * as Style from "./style";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Path } from "../../types/routes";
import { Api } from "../../data/api/api";
import { Loading } from "../utils/loading/loading";

export function Login() {
  const navigate = useNavigate();
  const [buttonpassword, setButtonPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const LoginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const response = await Api.login(LoginPayload);
    setLoading(false)
    if (!response) {
      setErro(true);
      return 
    }
    navigate(Path.HOME);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Style.Body>
          <Style.Login>
            <Style.Form onSubmit={handleSubmit} error={erro}>
              <h2>Login</h2>
              <input placeholder="email" type="email" name="email" />
              <input placeholder="password" type="password" name="password" />
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
      )}
    </>
  );
}
