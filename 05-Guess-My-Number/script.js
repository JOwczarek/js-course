'use strict';
/**
 * The DOM is the Document Object Model. Structured representation of 
 * HTML Documents and allows javascript to access html elements and 
 * styles to manipulate them.
 * DOM manipulation is selecting elements from the DOM and changing 
 * text, HTML attributes, and CSS styles.
 * DOM is created by broweser from html file. Each element is one
 * object on the tree.
 * (Document) -> (Element<HTML>) - >( Element <head>, Element <body>)
 * Document is the entry point to the dom.
 * Whatever is in the HTML document must also be in the DOM.
 * DOM and DOM methods are not part of JS, they are part of web API's
 * proved by the browser. There are many Web API's, there is a 
 * specification so that the API's are the same across browsers.
 */
// console.log(document.querySelector(".message").textContent);
// /**
//  * Use TextContent to set the text of an html element
//  */
// document.querySelector(".message").textContent = "Correct Number! ✨";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// /**
//  * Use the value to get or set the value of an input
//  */
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
/**
 * Adding event listener in JS like this is the best and most
 * often used method. There are other ways...
 * Anytime you get input from html it is usually going to be 
 * string.
 */
/**
 * Need to define the secret number out of the handler so it is only
 * defined once. Math.random() will generate a number between 0 and 1.
 * use *20 to get a number between 0 and 19. Use + 1 to get a number
 * between 1 and 20. Use Math.trunc to trim the decimal portion.
 * Do not rely on DOM to hold data. Variables should hold the data in
 * the code.
 */
let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highScore = 0;

function setHtml(htmlE, message) {
    document.querySelector(htmlE).textContent = message;
}

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    
    /**
     * First thing to do is check if there is actually a value.
     */
    if(!guess) {
        setHtml(".message", "💢 No number !");
        // document.querySelector(".message").textContent = "💢 No number !";

        /**
         * When player guesses the secret Number and wins
         */
    } else if (guess === secretNumber) {
        setHtml(".number",secretNumber);
        // document.querySelector(".number").textContent = secretNumber;

        document.querySelector(".message").textContent = "Correct Number! ✨";

        /**Change background color using CSS of body element */
        document.querySelector("body").style.backgroundColor = "#60b347";

        /**
         * Change width of element with number class. This adds inline
         * CSS to the element.
         */
        document.querySelector(".number").style.width = "30rem";

        /**
         * Checks if the current score is higher than the highscore
         */
        if ( score > highScore) {

            /**
             * Updates highscore to score and html to display new 
             * highscore
             */
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

        /**
         * If players guess is lower than the secret number
         */
    } else if (guess !== secretNumber) {

        /**Check if the user still has guesses remaining */
        if (score > 1) {
            document.querySelector(".message").textContent = guess > secretNumber ? "Too High!📈" : "Too Low!📉";
            score--;
            document.querySelector(".score").textContent = score;

            /**If user is out of guesses display message and end game */
        } else {
            document.querySelector(".message").textContent = "You Lose!";
            document.querySelector(".score").textContent = 0;
        }
    }
}) 

/**
 * Again button resets all scores, html, and css.
 */
document.querySelector(".again").addEventListener("click", function(){
    /**
     * Get a new secretNumber and reset score
     */
    secretNumber = Math.trunc((Math.random() * 20) + 1);
    score = 20;

    /**
     * Restore all default messages of html elements
     */
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";

    /**
     * Restore default CSS of body and number div
     */
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";

})