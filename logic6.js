// Vowel or Consonent

var letter = prompt("Enter your letter : ");

letter = letter.toLowerCase();

if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
document.write(" <br> This letter is Vowel");

/*else if(letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U")
document.write(" <br> This letter is Vowel");*/

else
document.write(" <br> This letter is Consonent");



//Digit Spelling
// 0 - Zero, 1 - One.... 9 - Nine , 10 - Not a valid digit
//switch, case, break, default


var digit = prompt("Enter any digit : ");


switch(digit){
    case "0":
    console.log("Zero");
    break;
    case "1":
    console.log("One");
    break;
    case "2":
    console.log("Two");
    break;
    case "3":
    console.log("Three");
    break;
    case "4":
    console.log("Four");
    break;
    case "5":
    console.log("Five");
    break;
    case "6":
    console.log("Six");
    break;
    case "7":
    console.log("Seven");
    break;
    case "8":
    console.log("Eight");
    break;
    case "9":
    console.log("Nine");
    break;
    default:
        console.log("Not a digit");
}

// if (digit == 0)
//     console.log("Zero");
// else if (digit == 1)
//     console.log("One");
// else if (digit == 2)
//     console.log("Two");
// else if (digit == 3)
//     console.log("Three");
// else if (digit == 4)
//     console.log("Four");
// else if (digit == 5)
//     console.log("Five");
// else if (digit == 6)
//     console.log("Six");
// else if (digit == 7)
//     console.log("Seven");
// else if (digit == 8)
//     console.log("Eight");
// else if (digit == 9)
//     console.log("Nine");
// else
//     console.log("Not a digit");