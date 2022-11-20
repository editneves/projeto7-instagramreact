//Arrays / Objetos nos componentes e renderizados no JSX usando map. 
//  - Usuario - O usuário acima das sugestões(este não é um array, mas os dados devem vir de props)

export default function Usuario() {
    return (
        <>
            <Usuarios />

            {/* <div class="usuario">
                <img src="img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    <span>
                        Catana
                        <ion-icon name="pencil"></ion-icon>
                    </span>
                </div>
            </div>*/}
        </>
    );
}

export function Usuarios() {
    const usuarios = [
        { texto: "catanacomics", razao: "Catana", imagem: "img/catanacomics.svg" }
    ]

    return (
        <>
            {usuarios.map((item) => <UsuariosItem key={item.texto} texto={item.texto} razao={item.razao} imagem={item.imagem} />)}
        </>
    )
}


{/* 
function ChangeUser(){
    return ()
}
function ChangeName(){
    return ()
}
*/}

function UsuariosItem(props) {
    //console.log(props)
    return (
        <>
            <div className="usuario" data-test="user">
                <img src={props.imagem} />
                <div className="texto">
                    <strong>{props.texto}</strong>
                    <span  data-test="name">
                        {props.razao}
                        <ion-icon data-test="edit-name" name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
        </>
    )
}