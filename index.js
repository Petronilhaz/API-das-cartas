async function pegarUmBaralho(){
    const url = ("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    const resposta = await fetch(url)
    return await resposta.json()
}

async function pegarUmaCarta(deck_id){
    const url = (`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmaCartaDoBaralho(){
    const baralho = await pegarUmBaralho()
    const carta = await pegarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta').src = imagemCarta
    console.log(imagemCarta)
}

