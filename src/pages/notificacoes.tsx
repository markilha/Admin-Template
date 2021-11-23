import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
 const {alternarTema} = useAppData()
  return (
    <Layout
      titulo="Página de notificações"
      subtitilo="Aqui você vai gerir sua notificações ">       
         
        <button onClick={alternarTema}>Alternar Tema</button>   
    </Layout>
  )
}
