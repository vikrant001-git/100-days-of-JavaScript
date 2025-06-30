const languages=["C","C++","JavaScript","Java","Python"];

console.log(languages[0]); //First Element of Array
console.log(languages[languages.length-1]); //last Element of Array

let newlanguage="Rust";

languages.push(newlanguage);
console.log(languages); //Array after push

languages.pop();
console.log(languages); //Array after pop

//To print all elements using for loop
for(let i=0;i<languages.length;i++)
{
    console.log(languages[i]);
}

//Using for..of loop
for(let language of languages)
{
    console.log(language.toUpperCase());
}