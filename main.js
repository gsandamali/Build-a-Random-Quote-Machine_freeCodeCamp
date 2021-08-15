var quoteBank=[
    {
        quote:"Keep smiling, because life is a beautiful thing and there's so much to smile about.",
        author:"-Marilyn Monroe"
    },{
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma.",
        author:"-Steve Jobs"
    },{
        quote:"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
        author:"-Barack Obama"
    },{
        quote:"Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
        author:"-Jim Rohn"
    },{
        quote:"People who succeed have momentum. The more they succeed, the more they want to succeed and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.",
        author: "-Tony Robbins"
    },{
        quote:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author:"-Maya Angelou"
    },{
        quote:"The question isn't who is going to let me; it's who is going to stop me.",
        author:"-Ayn Rand"
    },{
        quote:"I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
        author:"-Mother Teresa"
    },{
        quote:"The most difficult thing is the decision to act, the rest is merely tenacity.",
        author:"-Amelia Earhart"
    },{
        quote:"Life is 10% what happens to me and 90% of how I react to it.",
        author:"-Charles Swindoll"
    }
]
window.onload = init;
function init(){
    generateQuote()
}
//random color
function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var randomcolor = '#';
        for (var i = 0; i < 6; i++) {
            randomcolor += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("new-quote").style.backgroundColor = randomcolor; 
    document.getElementById("color0").style.backgroundColor = randomcolor; 
    document.getElementById("text").style.color = randomcolor;
    document.getElementById("author").style.color = randomcolor;
    document.getElementById("clr").style.background = randomcolor; 
    
}

$(document).ready(function(event){
    $('.fa fa-heart-o').dblclick(css("color", "red"));
    });


//for button new-quote
function generateQuote(){
    //for ramdamly generate
    let randomNum= Math.floor(Math.random()*quoteBank.length);
    let twitterLink="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22You%20may%20be%20disappointed%20if%20you%20fail%2C%20but%20you%20are%20doomed%20if%20you%20don%E2%80%99t%20try.%22%20Beverly%20Sills";
    
    // Add The Quote
    //let quoteInApiFormate = randomQuoteData.quote.replace(/ /g, "%20");
    //twitterLink += quoteInApiFormate
    //Add the Auther
    //let authorInApiFormate = randomQuoteData.quote.replace(/ /g, "%20");
    //twitterLink += authorInApiFormate

    // get the html element with ID
    document.getElementById("text").innerText = quoteBank[randomNum].quote; 
    document.getElementById("author").innerText = quoteBank[randomNum].author;
    document.getElementById("tweet-quote").href =twitterLink;
}

