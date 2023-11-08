// Task 8
// One Dimensional Array
// Create a function called highestScore
// Receive a 1d array called scores
//return the highest score


console.clear();
function highestScore (scores){
    var max = scores[0];

    for(var i=1 ; i<scores.length; i++){
        if (max < scores[i]){
            max = scores[i];
        }
    }
    return max;
}

var scores = [21,55,89,15,5];
var maxScore = highestScore(scores);
console.log(maxScore);