import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppConstextProps {
    tema: Tema
    alternarTema?: () => void
}

const AppContext = createContext<AppConstextProps>({
    tema: null,
    alternarTema: null
})

export function AppProvider(props){
    const [tema,setTema] = useState<Tema>('dark')

    function alternarTema(){
       setTema(tema===''? 'dark':'')
    }
    
    return(
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
