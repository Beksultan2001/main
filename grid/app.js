
function myFunction() {
    var element = document.getElementById("main2");
    element.classList.add("grid");
    var element = document.getElementById("kerek1");
    element.classList.add("just");
    var element = document.getElementById("kerek2");
    element.classList.add("just");
    var element = document.getElementById("kerek3");
    element.classList.add("just");
    var element = document.getElementById("kerek4");
    element.classList.add("just");
    var element = document.getElementById("kerek5");
    element.classList.add("just");
    var element = document.getElementById("kerek6");
    element.classList.add("just");
    var element1 = document.getElementById("owko1");
    element1.classList.remove("owko");
    var element = document.getElementById("lasttwo");
    element.classList.remove("lastone");
    document.querySelector('.score').innerHTML = 0;
    score = 0;
    document.querySelector('.text').innerHTML = 0;
    document.querySelector('.person').innerHTML = prompt('Cіздің есіміңіз? (с)Beksultan');
    t = -1;

    next();
}

function myFunction2() {
    var element = document.getElementById("main2");
    element.classList.remove("grid");
    var element = document.getElementById("kerek1");
    element.classList.remove("just");
    var element = document.getElementById("kerek2");
    element.classList.remove("just");
    var element = document.getElementById("kerek3");
    element.classList.remove("just");
    var element = document.getElementById("kerek4");
    element.classList.remove("just");
    var element = document.getElementById("kerek5");
    element.classList.remove("just");
    var element = document.getElementById("kerek6");
    element.classList.remove("just");
    document.querySelector('.main').innerHTML = ''
    document.querySelector('.answ0').innerHTML =''
    document.querySelector('.answ1').innerHTML =''
    document.querySelector('.answ2').innerHTML =''
    document.querySelector('.answ3').innerHTML =''
    document.querySelector('.last').innerHTML = ''
    document.querySelector('.score').innerHTML = '';
    document.querySelector('.text').innerHTML = score;
    var element = document.getElementById("lasttwo");
    element.classList.add("lastone");
}





function Question(question,answers,correct ){
    this.question  = question;
    this.answers = answers;
    this.correct = correct;
}


var q1 = new Question('Үстел үстінде үш стакан шие тұр. Марат бір стакан шиені жеп қойды. Неше стакан қалды?',    

                                    ['3 стакан','4 стакан','5 стакан','6 стакан'],['0']);
var q2 = new Question(' Айдынның Асқардан бойы ұзын, бірақ Жанаттан кіші. Кім ұзын? ',    

                                    ['Айдын ұзын','Аскар ұзын','Жанат ұзын','Маран ұзын'],['2']);
var q3 = new Question('Менің атым Медет Менің тәтемнің бір ғана інісі бар. Менің тәтемнің інісінің аты кім?',    

                                    ['Марат','Медет','Мурат','Жанат'],['1']);
var q4 = new Question('Екі бала шахматты екі сағат ойнады. Олардың әрқайсысы неше сағат ойлады? ',    

                                    ['5 сағат','3 сағат','4 сағат','2 сағат'],['3']);

var q5 = new Question(' Көшеде екі әкесі, екі баласы, және атасы немересімен қыдырып жүр. Көшеде неше адам жүр? ',    

                                    ['5 ','3 ','4 ','2 '],['1']);
var q6 = new Question(' Допты лақтырғанда, доп сол ізімен кері қайту үшін оны қалай лақтыру керек?',  

                                    ['Төмен ','Солға ','Оңға ','Жоғары'],['3']);
var q7 = new Question('Бөлмедегі әр бұрышта бір мысықтан және оған қарама-қарсы үш мысықтан отырса, бөлмеде неше мысық бар?',  

                                    ['5 ','3 ','4 ','2 '],['2']);
var q8 = new Question('Суға қай кезде қолды кесіп алуға болады? ',  

                                    ['Жылы','Мұз','Ыстық','Кей кезде'],['1']);

var score = 0;
var questions = [q1,q2,q3,q4,q5,q6,q7,q8];
console.log(q1.answers);
console.log(questions.length)
var t = -1;

function begin(){
    document.querySelector('.main').innerHTML = questions[t].question
    document.querySelector('.answ0').innerHTML =questions[t].answers[0];
    document.querySelector('.answ1').innerHTML =questions[t].answers[1];
    document.querySelector('.answ2').innerHTML =questions[t].answers[2];
    document.querySelector('.answ3').innerHTML =questions[t].answers[3];
    document.querySelector('.last').innerHTML = 'Келесі сұрақ'

    return questions[t];


};


function just1(answer){
    
    if(answer == questions[t].correct){
        document.querySelector('.answ'+questions[t].correct).style.backgroundColor = "yellow";
        score += 1;

        

    }
    else{
        document.querySelector('.answ'+questions[t].correct).style.backgroundColor = 'red';
        score -=1;
    }
    return score;


}
function next(){
    console.log(t)
    t+=1;
    if(t == questions.length){
        myFunction2();
    }
    begin();
    document.querySelectorAll('.wait').forEach(function(el) {
        el.style.backgroundColor = el.getAttribute('');
    });
    document.querySelector('.score').innerHTML = score;
    return t;
};





