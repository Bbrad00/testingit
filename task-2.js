const myName='Daniil';
const programmingLanguage='JavaScript';
const courseCreatarName='Vladilen Minin';
const reasonText='данный язык мне интересен, хочу развиваться в данной сфере';
const numberOfMonth=1;
let myInfoTex=`Всем привет! Меня зовут, ${myName}.Сейчас я изучаю язык программирования
${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatarName}.Я хочу стать веб-разработчиком, потому что reasonText. До этого я изучал(а)
${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до
конца!`;
console.log(myInfoTex);
let myInfoTexCaps=myInfoTex.replaceAll(programmingLanguage,programmingLanguage.toUpperCase())
console.log(myInfoTexCaps);
console.log(myInfoTexCaps.length);
console.log(myInfoTexCaps[0]);
console.log(myInfoTexCaps[263]);