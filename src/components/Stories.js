export default function Stories() {
    return (
        <>
            <div className="stories">
            <Story />
                 {/*
                <div class="story">
                    <div class="imagem">
                        <img src="img/9gag.svg" />
                    </div>
                    <div class="usuario">
                        9gag
                    </div>
                </div>

                <div class="story">
                    <div class="imagem">
                        <img src="img/meowed.svg" />
                    </div>
                    <div class="usuario">
                        meowed
                    </div>
                </div>

                <div class="story">
                    <div class="imagem">
                        <img src="img/barked.svg" />
                    </div>
                    <div class="usuario">
                        barked
                    </div>
                </div>

                <div class="story">
                    <div class="imagem">
                        <img src="img/nathanwpylestrangeplanet.svg" />
                    </div>
                    <div class="usuario">
                        nathanwpylestrangeplanet
                    </div>
                </div>

                <div class="story">
                    <div class="imagem">
                        <img src="img/wawawicomics.svg" />
                    </div>
                    <div class="usuario">
                        wawawicomics
                    </div>
                </div>

                <div class="story">
                    <div class="imagem">
                        <img src="img/respondeai.svg" />
                    </div>
                    <div class="usuario">
                        respondeai
                    </div>
                </div>

                <div class="story">
                    <div class="imagem">
                        <img src="img/filomoderna.svg" />
                    </div>
                    <div class="usuario">
                        filomoderna
                    </div>
                </div>

                <div class="story">
                    <div class="imagem">
                        <img src="img/memeriagourmet.svg" />
                    </div>
                    <div class="usuario">
                        memeriagourmet
                    </div>
                </div>*/}

                <div className="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
        </>
    );
}

export function Story() {
    const story = [
        { texto: "9gag", imagem: "img/9gag.svg" },
        { texto: "meowed", imagem: "img/meowed.svg" },
        { texto: "barked", imagem: "img/barked.svg" },
        { texto: "nathanwpylestrangeplanet", imagem: "img/nathanwpylestrangeplanet.svg" },
        { texto: "wawawicomics", imagem: "img/wawawicomics.svg" },
        { texto: "respondeai", imagem: "img/respondeai.svg" },
        { texto: "filomoderna", imagem: "img/filomoderna.svg" },
        { texto: "memeriagourmet", imagem: "img/memeriagourmet.svg" }
    ]


    return (
        <>
            {story.map((item) => <StoryItem key={item.texto} texto={item.texto} imagem={item.imagem} />)}
        </>
    )
}
function StoryItem(props) {
    //console.log(props)
    return (
        <>
        <div className="story">
            <div className="imagem">
                <img src={props.imagem} />
            </div>
            <div className="usuario">
                {props.texto}
            </div>
            </div>
        </>
    )
}













