function rollDice(){
    
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const value = Math.floor(Math.random()*6)+1;
    
    diceResult.textContent = value;
    diceImage.innerHTML = `<img src="images/${value}.png">`;
}
