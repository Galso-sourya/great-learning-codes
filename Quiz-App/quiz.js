function Question(qText){
this.questionText=qText;
}

const question1=new Question("js supports");
const question2=new Question("js supports");
const question3=new Question("js supports");

function AnswerOption(answerText){
    this.answerText=answerText;
}

const answerOptionFunctions=new AnswerOption("a");
const answerOption2=new AnswerOption("aa");
const answerOption3=new AnswerOption("aaa");
const answerOption4=new AnswerOption("b");
const answerOption5=new AnswerOption("c");

function QuestionAnswerOptionsPair(question,answerOptions,correctAnswer){
this.question=question;
this.answerOptions=answerOptions;
this.correctAnswer=correctAnswer;
this.isCorrectAnswer=function(userSuppliedAnswer){
if(userSuppliedAnswer==this.correctAnswer.answerText){
return true;
}else{
    return false;
}
}
}

const answerOptionsQ1=[answerOptionFunctions,answerOption2];
const answerOptionsQ2=[answerOption3,answerOption2];
const answerOptionsQ3=[answerOption4,answerOption5];
const questionAnswerOptionsPair1=new QuestionAnswerOptionsPair(question1,answerOptionsQ1,answerOptionFunctions);
const questionAnswerOptionsPair2=new QuestionAnswerOptionsPair(question2,answerOptionsQ2,answerOption2);
const questionAnswerOptionsPair3=new QuestionAnswerOptionsPair(question3,answerOptionsQ3,answerOption4);

const qAOptionsPairArray=[questionAnswerOptionsPair1,questionAnswerOptionsPair2,questionAnswerOptionsPair3];
//question answer pair array
const quizApp=new QuizApplication(qAOptionsPairArray);

function QuizApplication(qAOptionsPairArray){
this.qAOptionsPairArray=qAOptionsPairArray;
this.score=0;
this.pageIndex=0;
this.init=function(){
    this.applicationInit();
}
this.applicationInit=function(){
    this.pageIndex=0;
    this.addListeners();
    this.displayQuizPage();
}
this.getScore=function(){
return this.score;
}
this.incrementScore=function(){
this.score ++;
}
this.calculateSuccessPercentage=function(){
return
(this.score/this.qAOptionsPairArray.length)*100;
}
this.isLastQAPair=function(){
    if(this.pageIndex==(this.qAOptionsPairArray.length-1)){
return true;
    }else{
        return false;
    }
}
this.addListeners=function(){
    for(let index=0;index<2;index++){
let buttonId="btn"+index;
const answerOptionButton= document.getElementById(buttonId);
//console.log(this);
let currentQuizAppObject=this;
answerOptionButton.onclick=function(event){
    const eventTarget=event.currentTarget;
    console.log(eventTarget);
   const userSuppliedAnswer= eventTarget.children[0].innerHTML;//it will return all the span
    //extract the button text which is user supplied answer
    console.log(this);
   const qaOptionsPair= currentQuizAppObject.qAOptionsPairArray[currentQuizAppObject.pageIndex];
const outcome=qaOptionsPair.isCorrectAnswer(userSuppliedAnswer);
if(outcome){
currentQuizAppObject.incrementScore();
}else{
console.log("wrong");
}
    }
    }
}
this.initNextPage=function(){
    this.pageIndex++;
    this.addListeners();
    this.displayQuizPage();   
}
this.next=function(){
    if(this.isLastQAPair){
this.displayResultPage();
    }else{
this.initNextPage();
    }
}
this.displayQuizPage=function(){
    //this.displayHeader();we do not have any header
    this.displayQASection();
    this.displayFooter();
}
//create a functio  to display the question and option text
//get reference to question html object
this.displayQASection=function(){
//each index page will have separate questions. so we will fetch the text according to the page
    //index value.

    const qaOptionsPair=this.qAOptionsPairArray[this.pageIndex];
    const questionHtmlElement=document.getElementById("question");
    questionHtmlElement.innerHTML=qaOptionsPair.question.questionText;
    for(let index=0;index<2;index++){
let answerChoiceButtonId="choice"+index;
const answerChoiceHtmlButtonElement=document.getElementById(answerChoiceButtonId);
answerChoiceHtmlButtonElement.innerHTML=qaOptionsPair.answerOptions[index].answerText;
    }
}
this.displayFooter=function(){
const progressHtmlElement=document.getElementById("progress");
progressHtmlElement.innerHTML=`Question ${this.pageIndex+1} of ${this.qAOptionsPairArray.length}`
}
this.displayResultPage=function(){

}
}
quizApp.init();
