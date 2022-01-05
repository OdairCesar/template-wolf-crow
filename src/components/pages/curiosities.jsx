import React, { useEffect, useState } from 'react'

import Featured from '../template/featured'
import CardDoubt from '../template/cardDoubt'
import RelatedMatters from '../template/relatedMatters'
import Load from '../template/load'

import image from '../../assets/imgs/curiosities.png'
import './curiosities.css'

export default function Curioosities({ listVideo }) {
    const [ visivel, setVisivel ] = useState(true)

    const dataFeatured = {
        image: image,
        title: 'Curiosidades da Marvel e DC Comics',
        description: `Estimular a imaginação, criação de gosto pela leitura, ampliação do vocabulário e melhora ortográfica: poderia muito bem ser o planejamento de uma aula, mas são quatro benefícios que as HQs trazem pra gente! Penetre no mundo das histórias de quadrinhos e descubra mais curiosidades sobre o assunto!`,
        isCreateButton: false,
        isDate: true,
        link:'https://youtu.be/7-DKkYyD-iA',
        date: '2022-01-02'
    }

    const doubt = [{
            id: 0,
            query: 'Capitão America morreu duas vezes ou uma?',
            response: `Sabemos que mortes de personagens são muito comuns e recorrentes nos quadrinhos e são poucos os super-heróis que não passaram por isso. No entanto, você sabia que a Marvel, por algum motivo estranho e inexplicável, parece ter se esquecido de uma morte do Capitão América no início dos anos 2000? Entenda mais abaixo. \nNesta década, o herói morreu na história “The Death of Captain America”, publicada pouco após a Guerra Civil dos quadrinhos, o que ocorreu em 2007. \n O que quase ninguém se lembra – nem mesmo a Marvel, pelo visto – é que em 2002, Steve Rogers também foi dessa pra melhor em uma HQ estrelada pelo Sentinela da Liberdade.\n Nesta história, que focou bastante o relacionamento do herói com Sharon Carter, ele recebe uma ligação de Nick Fury, que o avisa da presença de uma bomba nuclear, criada por capangas do Caveira Vermelha.\n Em grande desvantagem numérica e sem outra escolha, o Capitão América arremessa a bomba, que logo em seguida, explode. Uma equipe de soldados vai até o local, mas não consegue encontrar o corpo do herói, que acaba sendo declarado oficialmente morto.\n No entanto, quase que imediatamente após o término dessa história, a Marvel lançou uma minissérie de três volumes chamada Captain America: Dead Men Running, que apesar do título ter a presença da palavra “morte”, pareceu ter ignorado o que aconteceu anteriormente e mostrou Steve Rogers em meio a um conflito entre soldados, refugiados e traficantes de drogas na América do Sul.\n Sequer há uma explicação de como que o Capitão sobreviveu à explosão da bomba, o que deveria ter ocorrido, já que ele apareceu são e salvo. Além disso, seus aliados também pareceram ter esquecido sua morte.`
        },{
            id: 1,
            query: 'Marvel quase comprou a DC?',
            response: 'O antigo editor da Marvel Comics, Jim Shooter, tem contado por meio de seu Blog sua vida e fatos interessantes envolvendo o mundo editorial das HQsamericanas. Mas o que mais chamou atenção até agora foi a revelação de um plano que por pouco não se tornou realidade: os heróis da DC sendo publicados pela Marvel!!!\n Era o ano de 1984 e o então editor-chefeda Marvel, Jim Shooter, recebeu a surpreendente proposta da Warner. Confira nas palavras do próprio: "Bill Sarnoff era o responsável pelo braço editorial da Warner Communications. Entre as operações sob sua supervisão estava a DC Comics. Bill apresentou-se, como se isso fosse necessário. O que ele queria falar era sobre o licenciamento dos direitos de publicação para todos os personagens da DC para a Marvel Comics".\n Jim Shooter explicou qual seria o plano de publicação inicial: "Decidi que deveríamos começar com sete títulos e evoluir a partir daí, se tudo corresse bem. Os títulos seriam: Superman, Batman, Mulher Maravilha, Lanterna Verde, Jovens Titãs, Liga da Justiça e Legião dos Super-Heróis. Eu projetava que iríamos vender 39 milhões de cópias nos dois primeiros anos gerando um lucro livre de impostos (receita bruta menos o custo das mercadorias vendidas, royalties, pessoal e etc) de cerca de US $ 3.500.000".\n E por que o bom negócio não foi adiante? Shooter responde:\n "Na mesma época, a First Comics lançou um processo contra a Marvel Comics e outros, alegando violações antitruste, entre outras coisas. Uma empresa não podia deter mais de 70% do mercado. Naquela época, a Marvel detinha 69% mais ou menos e a DC cerca de 18%. Eu acho que é seguro dizer que quando você está sendo processado sob leis anti-trust, é um mau momento para devorar o seu maior concorrente." (Pra quem não sabe, a Lei Anti-trust basicamente visa evitar que uma empresa domine todo o mercado com um determinado produto, deixando pouco espaço para a concorrência e podendo assim controlar o preço no mercado como bem entender).'
        },{
            id: 2,
            query: 'Batman já usou armas de fogo?',
            response: 'A história do Batman com armas não é tão clara quanto você imagina. Por várias décadas, o Batman odiava consistentemente armas. Pergunte a qualquer leitor leal e provavelmente todos dirão a mesma coisa – o Batman não usa uma arma, não usa armas e pode até ser descrito como tendo medo de armas..\n No entanto, historiadores precisos do Batman apontam que o Batman usou uma arma no passado. De fato, suas origens estão cheias de exemplos dele usando uma arma. Aqui, observamos o tempo todo em que Batman se envolveu em usar armas mais convencionais, e fomos a alguns especialistas em Batman para ter uma perspectiva de por que o herói evoluiu para um personagem que nunca os usa..'
    }]

    useEffect(() => {
        if(listVideo){
            setVisivel(false)
        }else{
            setVisivel(true)
        }
    }, [listVideo])

    return (
        <div className='curiosities'>
            <Featured featured={dataFeatured}/>
            <div className='effectBackground'>
                <div className='default-container'>
                    <main className='doubts'>
                        <h1>{dataFeatured.title}</h1>
                        {doubt.map(item=>(
                            <CardDoubt key={item.id} doubt={item}/>
                        ))}
                    </main>
                    <RelatedMatters doubt={doubt} list={listVideo}/>
                </div>
            </div>
            <Load visivel={visivel}/>
        </div>
    )
}
