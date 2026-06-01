let userInput = prompt("Введите число:");
if (userInput === null || userInput.trim() === "") 
    {
    console.log("Ошибка: вы не ввели значение!");
    } 
else 
{
    let number = Number(userInput);
    if (isNaN(number) || !isFinite(number)) 
        {
        console.log("Ошибка: введенная информация не является числом!");
        } 
        else 
        {
        let numberStr = Math.abs(number).toString();
        if (numberStr.includes('.')) 
            {
            numberStr = numberStr.split('.')[0];
            }
        let digitCount = numberStr.length;
        let firstDigit = numberStr[0];
        console.log(`Введенное число: ${number}`);
        console.log(`Количество разрядов (цифр) в этом числе: ${digitCount}`);
        console.log(`Первая цифра этого числа: ${firstDigit}`);
        if (number < 0) 
            {
            console.log(`(Отрицательное число, первая цифра по модулю: ${firstDigit})`);
            }
        }
}