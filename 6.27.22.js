//Parameters: 1 or more strings
//Return: 1 string
//Examples: 'I like Cheese, Milk, Chocolate'
//Psuedo code:


function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }