let pecaXadrez = "LAMBORGUINE";
pecaXadrez = pecaXadrez.toLowerCase();

switch(pecaXadrez){
    case "bishop":
        console.log("diagonally any number of squares");
        break;
    case "king":
        console.log("one square in any direction");
        break;
    case "rook":
        console.log("horizontally or vertically any number of squares");
        break;
    case "queen":
        console.log("do what you want with her [OP piece]");
        break;
    case "knight":
        console.log("L shape: two squares in a horizontal or vertical direction, then one square vertically or horizontally");
        break;
    case "pawn":
        console.log("vertically forward one square, with the option to move two squares if they haven't moved yet");
        break;
    default:
        console.log("[ERROR] piece not found")
        break;
}