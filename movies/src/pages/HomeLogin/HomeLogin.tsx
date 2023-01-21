import * as Style from "./style";
import { InputProps } from "../../types/inputs";

export function HomeLogin({ type, name, defaultValue, onSubmit }: InputProps) {
  return (
    <Style.Body>
      <Style.Login>
        <Style.Form onSubmit={onSubmit}>
            <h2>Acesar conta</h2>
          <input type={type} name={name} defaultValue={defaultValue} />
          <input type={type} name={name} defaultValue={defaultValue} />
          <button type="submit">Entrar</button>
          <br />
          <a>Fazer cadastro</a>  {/* direciona para o form... */}
        </Style.Form>
      </Style.Login>
    </Style.Body>
  );
}
