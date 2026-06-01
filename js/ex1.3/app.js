const Array = 
[
    [5, 4, 8],
    [3, 3, 7],
    [1, 5, 2]
];
console.log("Массив:");
console.table(Array);
let sum = 0;
for (let i = 0; i < Array.length; i++) 
    {
    for (let j = 0; j < Array[i].length; j++) 
        {
        let element = Array[i][j];
        let square = element * element;
        sum += square;
        }
    }
console.log(`Сумма квадратов всех элементов: ${sum}`);