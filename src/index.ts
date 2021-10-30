let numerodemes: number = document.getElementById("numerodemes");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
let numerodemes2= Number(numerodemes.value);
let diasp: number = 2;
let diass: number = 4 , 6, 9, 11;
let diast: number = 1, 3, 5, 7, 8, 10, 12 ; 
switch (true) {
  case (numerodemes2===diasp):
  console.log ("Tiene 28 dias");
    
    break; 

    case (numerodemes2===diass):
  console.log ("Tiene 30 dias");
    
    break;
    case (numerodemes2===diast): 
  console.log ("Tiene 31 dias");
    
    break;

  default:
    break;
}