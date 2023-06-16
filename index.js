let userText = prompt('Введите текст');
userText = userText.trim();
let wordFromText = prompt('Введите слово из текста');
wordFromText = wordFromText.trim();

const indexOfWord = userText.indexOf(wordFromText);
console.log(indexOfWord);
const resultString = userText.slice(0, indexOfWord);
alert(`Результат: ${resultString}`)