$(document).ready( function () {

    // Start of story
    $("#dialog").html("<p>Wake up treading water. Respond favorably to the strangers?</p>");
    // Makes choice buttons
    $("#choices").append('<button id="b">Yes</button>');
    $("#choices").append('<button id="c">No</button>');

    
  
  //function takes 4 parameters, returns a jQuery block

function nestedChoice(clickedID, question, yesID, noID) {

    //function takes string and signs it with #
    function wrapClickFunction(clickedID) {
        var wrappedClickedID = "#" + clickedID;
        return wrappedClickedID;
    }

    clickedID = wrapClickFunction(clickedID);


    //function takes string and wraps it in a p tag
    function wrapPTag(question) {
        var pTagQuestion = "<p>" + question + "</p>";
        return pTagQuestion;
    }

    question = wrapPTag(question);


    $(clickedID).click(function () {
        $("#dialog").html(question);
        $("#choices").empty();
        $("#choices").append("<button id=" + yesID + ">Yes</button>");
        $("#choices").append("<button id=" + noID + ">No</button>");
        
        nestedChoice("d", "Happy to reveal, the group asks if you are sure.", "h", "i");
        nestedChoice("h", "They show you the random world generator. Know how it works?", "p", "q");
        nestedChoice("p", "You correlate the time slices in order to time travel.", "a", "b");
        nestedChoice("a", "Wake up treading water. Respond favorably to the strangers?", "b", "c");
        nestedChoice("b", "The group approves of your resolve. Would you like to know a secret?", "d", "e");
        nestedChoice("q", "The worlds that are closest to ours seem continuous, but they are not. They require a cipher that produces also consciousness as a byproduct. They are like zippers, bringing together lost worlds, unknowing what they leave behind. Are you willing to give up your deluded identity?", "d", "c");
        nestedChoice("c", "The group detests your weakness. Try to cajole them?", "f", "g");
        nestedChoice("f", "They abhor clowning. Do you run or not?", "m", "l");
        nestedChoice("l", "They are about to execute you. Good day to die?", "y", "x");
        nestedChoice("m", "You make it to an abyssal plain. Another loner approaches. Stand your ground?", "z", "one");
      

      
        nestedChoice("i", "They have a job for you then. Let's say it is data analysis. Interested?", "s", "r");
        nestedChoice("r", "Well, are you even worth keeping around?", "e", "f");

        nestedChoice("s", "Let's say it is data analysis. Interested?", "g", "h");
        nestedChoice("g", "You're excommunicated. You are very alone; do you care?", "n", "o");
        nestedChoice("n", "Feeling industrious, you find some materials. Make something from them?", "two", "three");
        nestedChoice("two", "You make a bomb. You can take them out, yeah?", "y", "z");
        nestedChoice("y", "They intercept you, impressed. Your choice to do a job willingly or not.", "s", "t");
        nestedChoice("t", "Labor camp. Seems familiar. Work hard and move up the chain.", "i", "j");
        nestedChoice("j", "Would you like to hear what jobs they have to offer?", "t", "u");
        nestedChoice("u", "Don't do the job: they don't approve. Yield?", "k", "l");
        nestedChoice("k", "They quarantine you, plotting your fate. Read the only book in the otherwise dull terrain? ", "w", "v");
        nestedChoice("v", "You go off pondering. Looks like there's a way out. Now free, plan for revenge?", "m", "n");



        nestedChoice("z", "Go Figure: he's with them. There's a job for you. Accept? Seems like you can gety away.", "u", "v");

        nestedChoice("three", "Waiting around, doing very little. But you saw some materials. Abandon them? ", "one", "two");
        nestedChoice("one", "Going alone is risky. And the fatigue.. Go exploring?", "w", "x");
        nestedChoice("w", "You find a book. joy. Read it?", "p", "o");

        nestedChoice("x", "They get you. Pleading, you accept slavery. Among the slaves you hear a loud mantra. Do you listen?", "q", "r");


        nestedChoice("o", "You're excommunicated, very alone; do you care?", "four", "five");
        nestedChoice("four", "Loathing existence you contemplate nothingness, give up?", "four", "three");
        nestedChoice("five", "You are crushed into a paste by incessant burdens. Keep pushing the proverbial boulder up hill?", "five", "six");
        nestedChoice("six", "It's for the best that you finally slip away: a semblance of an escape. Unfortunately it doesn't happen soon enough. Why Bother.", "six", "six");

        nestedChoice("e", "Accepting, however, would you like to hear about a job?", "h", "i");
    });
    
}
nestedChoice("b", "The group approves of your resolve. Would you like to know a secret?", "d", "e");
nestedChoice("c", "The group detests your weakness. Try to cajole them?", "f", "g");

});