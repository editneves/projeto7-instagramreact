import NavBar from "./NavBar";
import Corpo from "./Corpo";

export default function App() {
    return (
        <>
            <NavBar />
            <Corpo />
            <div className="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </>
    )
}

{/*
// componentes

//     - App
//     - Corpo
//  - SideBar
// - NavBar

// Arrays / Objetos nos componentes e renderizados no JSX usando map.

// - Stories(onde cada item será um componente diferente, o Story) Os stories(deve ter pelo menos 2 stories)
//     - Posts(onde cada item será um componente diferente, o Post) - Os posts(deve ter pelo menos 2 posts)
//         - Sugestoes(onde cada item será um componente diferente, o Sugestao) - As sugestões de seguidores(deve ter pelo menos 2 sugestões)
//             - Usuario - O usuário acima das sugestões(este não é um array, mas os dados devem vir de props)
*/}