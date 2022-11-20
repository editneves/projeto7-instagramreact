import React, { useState } from "react";


export default function Posts() {
    return (
        <>
            <div className="posts">
                <Post />
                {/* 
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src="img/meowed.svg" />
                            meowed
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src="img/gato-telefone.svg" />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src="img/respondeai.svg" />
                            <div class="texto">
                                Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src="img/barked.svg" />
                            barked
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src="img/dog.svg" />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src="img/adorable_animals.svg" />
                            <div class="texto">
                                Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
                */}
            </div>
        </>
    )
}

export function Post() {
    const post = [
        {
            imagem: "img/meowed.svg", texto: "meowed", imagemFeed: "img/gato-telefone.svg",
            imagemUser: "img/respondeai.svg", User: "respondeai", quant: "101.523"
        },
        {
            imagem: "img/barked.svg", texto: "9gag", imagemFeed: "img/dog.svg",
            imagemUser: "img/adorable_animals.svg", user: "adorable_animals", quant: "99.159"
        }
    ]


    return (
        <>
            {post.map((item) => <PostItem key={item.texto} imagem={item.imagem} texto={item.texto}
                imagemFeed={item.imagemFeed} imagemUser={item.imagemUser}
                user={item.user} quant={item.quant} />)}
        </>
    )
}


function PostItem(props) {
    //console.log(props)
    const [style, setStyle] = useState("");

    const changeStyle = () => {
        console.log("you just clicked");
        setStyle("ion-icon");
    };

    return (
        <>
            <div className="post" data-test="post">
                <div className="topo">
                    <div className="usuario">
                        <img src={props.imagem} />
                        {props.texto}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div className="conteudo" data-test="post-image">
                    <img src={props.imagemFeed} />
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div className="ion-icon" >
                            <ion-icon className={style} onClick={changeStyle} data-test="like-post" name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon  name="paper-plane-outline"></ion-icon>
                        </div>
                        <div >
                            <ion-icon  className={style} onClick={changeStyle} data-test="save-post" name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={props.imagemUser} />
                        <div className="texto">
                            Curtido por <strong>{props.user}</strong> e <strong data-test="likes-number">outras {props.quant} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





//Arrays / Objetos nos componentes e renderizados no JSX usando map.
//- Posts(onde cada item será um componente diferente, o Post) - Os posts(deve ter pelo menos 2 posts)