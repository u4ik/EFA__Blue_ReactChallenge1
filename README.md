# React Challenge

- Button Component

  - Create a reusable Button component which accepts the props "title", "color", and "event".

    - title is a string that will represent the text displayed in each Button component.
      - Ex. "New Card", "Reset"
    - color is a string that will be a CSS color value to change the background of each button.
      - Ex. "blue", "darkred"
    - event is a callback function, which should execute the necessary functions for each button in the onClick event handler within each component.

      - Ex.</br>
        (In Card.js)

        <Button event={() => fetchCards()}/>

        (In Button.js)

        ```
        <button onClick={event}>
        ```

- Card Component

  - This component is importing two functions, fetchCards, and newCard.

    - fetchCards() will reset the deck.
    - newCard() will get a new card at random

  - Hook up each button that was created above to each function.

    - A button clicked to generate a new card.
    - A button to Reset the deck once all 52 cards have been drawn.

      Each time the card functions are called, they will console.log() their result.

  - Using the card data, display the image of the current card that was drawn, as well as the images for the previous cards that were drawn.

## The end result should look something like this:

![alt text](https://i.ibb.co/N7NJXBP/cardpreview.png)
