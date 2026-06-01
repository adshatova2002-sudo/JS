let userInput = prompt("Введите строку:");
if (userInput === null || userInput.trim() === "") 
    {
    console.log("Ошибка: вы не ввели строку");
    } 
else 
    {
    console.log(`Исходная строка: "${userInput}"`);
    console.log("Каждый второй символ строки, начиная с последнего:");
    let length = userInput.length;
    let result = [];
    for (let i = length - 1; i >= 0; i -= 2) 
        {
        result.push(userInput[i]);
        }
    console.log(result.join(""));
}