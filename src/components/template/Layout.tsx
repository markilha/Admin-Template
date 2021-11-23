import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutProps{
    titulo: String
    subtitilo: string
    children?: any
}

export default function Layout(props: LayoutProps){
    return (
        <div className={`
        flex h-screen w-screen
        `}>
            <MenuLateral/>
            <div className={`
            flex flex-col w-full p-7
             bg-gray-300 dark:bg-gray-800
            `}>                
            <Cabecalho titulo={props.titulo} subtitilo={props.subtitilo} />
            <Conteudo>
                {props.children}
            </Conteudo>
            </div>
        </div>
    )
}