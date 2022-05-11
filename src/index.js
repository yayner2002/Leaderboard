// import _ from 'lodash';
import './style.css';

const nameInputEl = document.getElementById('nameEl');
const scoreInputEl = document.getElementById('scoreEl');
const refreshButton = document.getElementById('refresh');
const addScoreForm = document.getElementById('my-form');
const recentScoresElement = document.getElementById('scores');
const leaderBoardApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

const addScores = () => {
  fetch(leaderBoardApi, {
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    body: JSON.stringify({
      user: nameInputEl.value,
      score: scoreInputEl.value,
    }),
  });
  nameInputEl.value = '';
  scoreInputEl.value = '';
};

addScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addScores();
});
const recentScores = async () => {
  const response = await fetch(leaderBoardApi);
  const processedData = await response.json();
  recentScoresElement.innerHTML = '';
  processedData.result.forEach((score) => {
    recentScoresElement.innerHTML += `
        <li> ${score.user} : ${score.score}</li>
      `;
  });
};

refreshButton.addEventListener('click', (e) => {
  e.preventDefault();
  recentScores();
});

window.addEventListener('load', (e) => {
  e.preventDefault();
  recentScores();
});