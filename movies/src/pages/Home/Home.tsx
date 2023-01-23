import * as Style from "./style";
import { useNavigate } from "react-router-dom";
import { Path } from "../../types/routes";

export function Home() {
  const navigate = useNavigate()
  return (
    <Style.Home>
      <Style.PageHome></Style.PageHome>
      <Style.Menu>
        <Style.MenuItem onClick={() => {
         navigate(Path.FORM)
        }}>crar perfil</Style.MenuItem>
        <Style.MenuItem>acessar perfil</Style.MenuItem>
      </Style.Menu>
    </Style.Home>
  );
}
