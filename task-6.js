let userText=prompt('Введите ваш текс');
let wordFromText=prompt('Введите слово из текста');
userText=userText.trim();
wordFromText=wordFromText.trim();
let indexOfWord=userText.indexOf(wordFromText);
console.log(indexOfWord);
let result=(userText.slice(0,indexOfWord));
alert(result);