const userString=prompt('Введите текст для обрезки');
let startSliceIndex=prompt('Введите индекс с которого нужно начать обрезку');
let endSliceIndex=prompt('Введите индекс которым нужно закончить обрезку');

startSliceIndex=+startSliceIndex;
endSliceIndex=+endSliceIndex;

let endString=userString.trim().slice(startSliceIndex,endSliceIndex);

alert(`Результат:${endString}`);
console.log(Number(startSliceIndex));
console.log(Number(endSliceIndex));     