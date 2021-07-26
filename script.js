//Initial Data
let currentQuestion = 0;
let correctanswers = 0;
showQuestion();
//Events
document.querySelector('.scoreArea button').addEventListener('click',resetEvent);
//Functions
function showQuestion(){
    let pct =Math.floor((currentQuestion / questions.length) * 100);
    document.querySelector('.progress--bar').style.width = `${pct}%`

    if(questions[currentQuestion]){
        let q = questions[currentQuestion];
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block'

        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = '';

        let optionHtlml = ''
        for(let i in q.options){
          optionHtlml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1 } </span>${q.options[i]} </div>`
        }
        document.querySelector('.options').innerHTML = optionHtlml

        document.querySelectorAll('.options .option').forEach(item =>{
            item.addEventListener('click', optionClickEvent);
        })

    }else{
        finishQuiz();
    }
}

function optionClickEvent(e){
   let clickedOption = parseInt(e.target.getAttribute('data-op'))

    if(clickedOption===questions[currentQuestion].answer){
        correctanswers ++
    }
    currentQuestion++;
    showQuestion();
}
function finishQuiz(){
    document.querySelector('.questionArea').style.display = 'none'
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.progress--bar').style.width = '100%';

    let finalpct= Math.floor((correctanswers / questions.length) * 100)
    document.querySelector(' .scorePct').innerHTML=`Acertou ${finalpct}%`

    document.querySelector(' .scoreText2').innerHTML=`Você respondeu ${questions.length} questões e acertou ${correctanswers}.`

    if(finalpct < 30){
        document.querySelector('.scoreText1').innerHTML = 'Não foi dessa vez!'
        document.querySelector('.scorePct').style.color='red'
    }else if(finalpct>=30 && finalpct <70){
        document.querySelector('.scoreText1').innerHTML = 'Muito Bom!'
        document.querySelector('.scorePct').style.color='yellow'

    }else{
        document.querySelector('.scoreText1').innerHTML = 'Parabéns!'
        document.querySelector('.scorePct').style.color='#0df30d'
    }
}
function resetEvent(){
 
    currentQuestion = 0;
    correctanswers = 0;
    showQuestion();
}