

interface TituloProps{
    titulo: String
    subtitilo: string   
}

export default function Titulo(props: TituloProps){
    return (
        <div>
            <h1 className={`
            `}>
                {props.titulo}
            </h1>
            <h2 className={`
            `}>
                {props.subtitilo}
            </h2>
          
        </div>
    )
}