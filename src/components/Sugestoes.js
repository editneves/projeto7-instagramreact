//Arrays / Objetos nos componentes e renderizados no JSX usando map. 
//       - Sugestoes(onde cada item será um componente diferente, o Sugestao) - As sugestões de seguidores(deve ter pelo menos 2 sugestões)


export default function Sugestoes() {
    return (
        <>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <Sugestao />
                 {/*    
                <div class="sugestao">
                    <div class="usuario">
                        <img src="img/bad.vibes.memes.svg" />
                        <div class="texto">
                            <div class="nome">bad.vibes.memes</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="img/chibirdart.svg" />
                        <div class="texto">
                            <div class="nome">chibirdart</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="img/razoesparaacreditar.svg" />
                        <div class="texto">
                            <div class="nome">razoesparaacreditar</div>
                            <div class="razao">Novo no Instagram</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="img/adorable_animals.svg" />
                        <div class="texto">
                            <div class="nome">adorable_animals</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="img/smallcutecats.svg" />
                        <div class="texto">
                            <div class="nome">smallcutecats</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>*/}
            </div>
        </>
    );
}

export function Sugestao() {
    const sugestao = [
        { texto: "bad.vibes.memes", razao: "Segue você", imagem: "img/bad.vibes.memes.svg" },
        { texto: "chibirdart", razao: "Segue você", imagem: "img/chibirdart.svg" },
        { texto: "razoesparaacreditar", razao: "Novo no Instagram", imagem: "img/razoesparaacreditar.svg" },
        { texto: "adorable_animals", razao: "Segue você", imagem: "img/adorable_animals.svg" },
        { texto: "smallcutecats", razao: "Segue você", imagem: "img/smallcutecats.svg" }
    ]

    return (
        <>
            {sugestao.map((item) => <SugestaoItem key={item.texto} texto={item.texto} razao={item.razao} imagem={item.imagem} />)}
        </>
    )
}
function SugestaoItem(props) {
    //console.log(props)
    return (
        <>
            <div class="sugestao">
                <div class="usuario">
                <img src={props.imagem} />
                    <div class="texto">
                        <div class="nome">{props.texto}</div>
                        <div class="razao">{props.razao}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        </>
    )
}