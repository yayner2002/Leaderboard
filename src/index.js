// import _ from 'lodash';
import './style.css';

const scores = [
  {
    name: 'Mohammad Salah',
    score: 50,

  },
  {
    name: 'Virgil Vandick',
    score: 70,

  },
  {
    name: 'Diago Jota',
    score: 60,

  },
  {
    name: 'Sadio Mane',
    score: 45,

  },
  {
    name: 'Roberto Firmino',
    score: 25,

  },
];
let scoreData = '';
scores.forEach((score) => {
  scoreData += `
     <li class="score-values">${score.name} : ${score.score}</li>
  `;
});
const scoresEl = document.querySelector('.scores');

scoresEl.innerHTML = scoreData;