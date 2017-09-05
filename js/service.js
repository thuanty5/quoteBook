angular.module("app").service("srv", function(){

    this.quotes = quotes;

    this.removeQuote = function(index){
        this.quotes.splice(index, 1);
    }

    this.addQuote = function(newQuote){
        this.quotes.unshift(newQuote);
    }
})

var quotes = [
    {
        person: "No One Ever",
        quote: "Quotes aren't fun"
    },
    {
        person: "Kevin Kruse",
        quote: "Life isn't about getting and having, it's about giving and being."
    },
    {
        person: "Robert Frost",
        quote: "Two roads diverged in a wood, and I took the one less traveled by, And that has mode all th difference."
    },
    {
        person: "Amelia Earhart",
        quote: "The most difficult thing is the decision to act, the rest is merely tenacity."
    },
    {
        person: "John Lennon",
        quote: "Life is what happens to yo while you're busy making other plans."
    },
    {
        person: "Tyler S. McGinnis",
        quote: "What even is jQuery?"
    },
    {
        person: "Brack Carmony",
        quote: "This is my new quote"
    }
]