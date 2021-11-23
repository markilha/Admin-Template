import Titulo from "./Titulo";

interface CabecalhoProps{
    titulo: String
    subtitilo: string   
}

export default function Cabecalho(props: CabecalhoProps){
    return (
        <div>
            <Titulo titulo={props.titulo} subtitilo={props.subtitilo}/>
          
        </div>
    )
}