function start() {
    console.log("RULES");
    console.log("No using console.log(x) to find the solution!");
    console.log("Type begin() to start the challenge");
    console.log("Your goal is to find the value of x");
    console.log("To check your answer, use check(the number you think x is)");
    console.log("Stuck? Use hint() to be given a hint!")
}

var pronumeralAddition = p + r + o + n + u + m + e + r + a + l;
var en = e + n;
var el = e + l;
var uxne = (u+x+n)/e;
var uxa = u + x + a;
var ea = e + a;

function begin() {
    console.log("n = 14");
    console.log("P*r*o*n*u*m*e*r*a*l = " + p*r*o*n*u*m*e*r*a*l);
    console.log("P+r+o+n+u+m+e+r+a+l = " + pronumeralAddition);
    console.log("e + n = " + en);
    console.log("e + l = " + el);
    console.log("(u+x+n)/e = " + uxne);
    console.log("u+x+a = " + uxa);
    return;
}

function check(num) {
    if(num == x) {
        console.log("Congratulations! You win!");
    }
    else {
        console.log("Incorrect. Try again!");
    }
}

start();
function hint() {
    console.log("e + a = " + ea);
    console.log("Still stuck? Use hint2() for another hint!");
}

function hint2() {
    console.log("Think about the pronumeral's relationship to its value.");
    console.log("Still stuck? Use hint3() for another hint!");
}

function hint3() {
    console.log("1st the worst, 2nd the best, 3rd the one with the golden chest.");
    console.log("That's it! No more hints! Good luck!");
}
