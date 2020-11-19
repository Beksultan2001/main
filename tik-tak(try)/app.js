const X_CLASS = 'x';
const CIRCLE_CLASS= 'circle';
const Winning_combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [1,4,7]

]
console.log(Winning_combinations)
const cellElemets = document.querySelectorAll('[data-cell]');
const container = document.getElementById('container');
const just = document.getElementById('just');
const knopka = document.getElementById('knopka');
const text = document.getElementById('text');
let circleturn;

knopka.addEventListener('click',bastay)

function bastay(){
    just.classList.remove('show')
    startGame();
}

startGame();


function startGame(){
    circleturn = false;

    cellElemets.forEach(cell =>{
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener('click',handleClick)
        cell.addEventListener('click',handleClick,{once:true})

    })
    setBoardHover();
}

function handleClick(e){
    const cell = e.target;
    const currentClass = circleturn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell,currentClass);
    if(checkWin(currentClass)){
        endGame(false);
    }else if(isDraw()){
        endGame(true)
    }else{
        swapTurns();
        setBoardHover();
    }
}
function endGame(draw){
    if(draw){
        text.innerText = 'Draw!'
    }else{
        text.innerText = `${circleturn ? "O's" : "X's"} Wins`
    }
    just.classList.add('show')
}
function placeMark(cell,currentClass){
    cell.classList.add(currentClass);
}

function swapTurns(){
    circleturn = !circleturn;
}

function isDraw(){

    console.log([...cellElemets])
    return [...cellElemets].every(cell =>{
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
    })
}

function setBoardHover(){
    container.classList.remove(X_CLASS);
    container.classList.remove(CIRCLE_CLASS);
    if(circleturn){
        container.classList.add(CIRCLE_CLASS)
    }else{
        container.classList.add(X_CLASS)
    }
} 

function checkWin(currentClass){
    return Winning_combinations.some(atleast =>{
        return atleast.every(index =>{

            console.log(cellElemets[index].classList.contains(currentClass));
            return cellElemets[index].classList.contains(currentClass);
        })
    })
}


function just1(n){
    t = [];
    for (var i = 0;i<n.length;i++){
        t.push(i)
    };
    return t;
}
console.log(just1(cellElemets))