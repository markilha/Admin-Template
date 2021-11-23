import useAppData from "../../data/hook/useAppData";
import BotaoAlternarTema from "./BotaoAlternarTema";
import Titulo from "./Titulo";

interface CabecalhoProps {
    titulo: String
    subtitilo: string
}

export default function Cabecalho(props: CabecalhoProps) {
    const {tema,alternarTema} = useAppData();
    return (
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitilo={props.subtitilo} />
            <div className={`flex flex-grow justify-end`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema}/>
            </div>
        </div>
    )
}