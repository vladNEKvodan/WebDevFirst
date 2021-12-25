var user=["1", "2"]
var numberRandomOfArray = Math.floor(Math.random() * user.length)
var randomUser = user[numberRandomOfArray];
var words=prompt ('Пользователь'+ '   ' + randomUser + '   ' + 'Введите слово').toLowerCase();
var alphabet=["а","б","в","г","д","е","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"]
function Nachalo(Schet) {
    alert("Всего" + "   "+ Schet + "   " + " попыток.");
}

function intro(answerArray) {
    alert("Загаданное слово: " + answerArray.join(" "));
}


function PodchetBukv(word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}

function Vvod() {
    return prompt("Напишите букву" + "   " + alphabet);
}

function Verno(answerArray) {
    alert("Правильно" + "   " + answerArray.join(" ") + "  " + alphabet);
}

function NeVerno(answerArray, Schet) {
    alert("Ошибка" + answerArray.join(" ") +
        "Попыток осталось" + Schet + alphabet);
}

function askForSingleLetter() {
    alert("Пожалуйста, введите только одну букву.");
}

function openLettersAndNotify(guess, word, answerArray, remainingLetters, Schet) {
    guess = guess.toLowerCase();
    var correctLetter = false;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] == "_") {
            answerArray[j] = guess;
            remainingLetters--;
            correctLetter = true;
        }
    }
    if (remainingLetters > 0) {
        if (correctLetter === false) {
            Schet--;
            NeVerno(answerArray, Schet);
        } else {
            Verno(answerArray);
        }
    }
    return {
        newRemainingLetters: remainingLetters,
        newSchet: Schet,
    }
}

function Finale(userExited, Schet, word) {
    if (userExited) {
        alert("Загаданное слово" + "   " + word );
    } else if (Schet === 0) {
        alert("К сожалению, попытки кончились! Загаданное слово" + "   " + word);
    } else {
        alert("Победа, загаданное слово" + "   " + word);
    }
}

function startGame() {
    var word = words;
    var Schet = 9;
    var answerArray = PodchetBukv(word);
    var remainingLetters = word.length;
    var userExited = false;

    Nachalo(Schet);
    intro(answerArray);
    while (remainingLetters > 0 && Schet > 0) {
        var guess = Vvod();
        if (guess === null) {
            userExited = true;
            break;
        } else if (guess.length !== 1) {
            askForSingleLetter();
        } else {
            var newGameState = openLettersAndNotify(guess, word, answerArray,
                remainingLetters, Schet);
            remainingLetters = newGameState.newRemainingLetters;
            Schet = newGameState.newSchet;
        }
    }
    Finale(userExited, Schet, word);
}