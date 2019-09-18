import { Component, OnInit } from '@angular/core';
import { QuizInfoService } from '../services/quiz-info.service';
import { QuestionsAndAnswers } from '../models/questions-and-answers';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  _questionsAndAnswers: QuestionsAndAnswers[];
  _displayTitle: boolean;
  _questionAndAnswer: QuestionsAndAnswers;
  _numberCorrect: number;
  _answers: string[];

  constructor(
    private _quizInfoService: QuizInfoService,
  ) { }

  ngOnInit() {
    this.initalize();
  }

  initalize() {
    this._displayTitle = true;
    this._quizInfoService.getJson().subscribe(this.onSuccess.bind(this), this.onError.bind(this));
  }

  generateOrderForAnswers() {
    let answers = this._questionAndAnswer.others;
    answers.push(this._questionAndAnswer.answer);
    const length = answers.length;
    const randomOrder = [];
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * Math.floor(answers.length));
      randomOrder.push(answers[index]);
      answers = answers.filter(a => a !== answers[index]);
    }
    return randomOrder;
  }

  onSuccess(items: QuestionsAndAnswers[]) {
    const final = items.map((res: any) => {
      return { id: res.id, question: res.question, answer: res.answer, others: res.others, answered: false, correct: false, image: 'img/html.png' };
    });
    this._questionsAndAnswers = final;
  }

  onError(error: any) {
    console.log(error);
  }

  getQuestion(): QuestionsAndAnswers {
    const nonUsed: QuestionsAndAnswers[] = this._questionsAndAnswers.filter(qanda => !qanda.answered);
    const randomIndex = Math.floor(Math.random() * Math.floor(nonUsed.length));
    const question = nonUsed[randomIndex];
    return question;
  }

  getCorrectAmount() {
    const correctQuestions = this._questionsAndAnswers.filter((item: QuestionsAndAnswers) => item.correct);
    this._numberCorrect = correctQuestions.length;
  }

  startQuiz() {
    this._numberCorrect = 0;
    this._displayTitle = false;
    this._questionAndAnswer = this.getQuestion();
    this._answers = this.generateOrderForAnswers();
  }

  submitAnswer(answer: string) {
    const index = this._questionsAndAnswers.indexOf(this._questionAndAnswer);
    if (this._questionAndAnswer.answer === answer) {
      this._questionsAndAnswers[index].correct = true;
      this._questionsAndAnswers[index].answered = true;
      alert('Correct');
    } else {
      this._questionsAndAnswers[index].correct = false;
      this._questionsAndAnswers[index].answered = true;
      alert('Wrong');
    }
    console.log(this._questionsAndAnswers);
    this.getCorrectAmount();
    this._questionAndAnswer = this.getQuestion();
    if (this._questionAndAnswer === undefined) {
      this.initalize();
      return;
    }
    this._answers = this.generateOrderForAnswers();
  }
}

