//Arrays / Objetos nos componentes e renderizados no JSX usando map. 
//  - Usuario - O usuário acima das sugestões(este não é um array, mas os dados devem vir de props)
import React, { useState } from "react"

export default function Usuario() {
    const imagemPadrao = "img/catanacomics.svg"
    const [nome, setNome] = React.useState("Catana")
    const [imagem, setImagem] = useState(imagemPadrao)

    function ChangeImg() {
        const imagemAdicionada = prompt("Escolha o link da sua imagem")
        setImagem(imagemAdicionada)

    }
    function ChangeName() {
        setNome(prompt("Qual é o seu nome?"))
    }
    
        return (
            <>
                <div className="usuario" data-test="user">
                    <img onClick={ChangeImg} data-test="profile-image" src={imagem} />
                    <div className="texto">
                        <strong>catanacomics</strong>
                        <span data-test="name">
                            {nome}
                            <ion-icon onClick={ChangeName} data-test="edit-name" name="pencil"></ion-icon>
                        </span>
                    </div>
                </div>

            </>
        );
    
        // https://i.pinimg.com/564x/69/a7/5e/69a75e677610d96a237a76faae9236d8.jpg
        // https://images6.fanpop.com/image/photos/34400000/Aurora-disney-princess-34426848-343-547.png


}
{/** 
export function Usuarios() {
    const usuarios = [
        { texto: "catanacomics", razao: nome, imagem: imagemPadrao }
    ]

    return (
        <>
            {usuarios.map((item) => <UsuariosItem key={item.texto} texto={item.texto} razao={item.razao} imagem={item.imagem} />)}
        </>
    )
}

function UsuariosItem(props) {
    //console.log(props)
    // muadar o nome em props.razao
    return (
        <>
            <div className="usuario" data-test="user">
                <img onClick={ChangeImg} data-test="profile-image" src={props.imagem} />
                <div className="texto">
                    <strong>{props.texto}</strong>
                    <span data-test="name">
                        {props.razao}
                        <ion-icon onClick={ChangeName} data-test="edit-name" name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
        </>
    )
}
*/}