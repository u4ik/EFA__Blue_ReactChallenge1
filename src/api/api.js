let id;
/**
 * Will reshuffle the deck when called
 */
export const fetchCards = async () => {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const json = await response.json();
    const { deck_id } = json;
    id = deck_id;
}
/**
 * Will return a new drawn card
 */
export const newCard = async () => {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    const json = await response.json()
    console.log(json);
    return json;
}


fetchCards()