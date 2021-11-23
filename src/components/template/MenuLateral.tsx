import { IconeAjuste, IconeCasa, IconeSino } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return(
        <aside>
            <ul>
              <MenuItem url="/" texto="Início"  icone={IconeCasa}/>
              <MenuItem url="/ajustes" texto="Ajustes"  icone={IconeAjuste}/>
              <MenuItem url="/novidades" texto="Novidades"  icone={IconeSino}/>
            </ul>
        </aside>
    )
}