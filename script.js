
const tabs = document.querySelectorAll('.tab-box');
const sections = document.querySelectorAll('.section-box');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(tab.dataset.section).classList.add('active');
  });
});

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

const skills = document.querySelectorAll('.skill');
const dropzone = document.querySelector('.dropzone');

skills.forEach(skill => {
  skill.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.textContent);
  });
});

dropzone.addEventListener('dragover', e => {
  e.preventDefault();
  dropzone.style.backgroundColor = '#ffeaea';
});

dropzone.addEventListener('dragleave', e => {
  dropzone.style.backgroundColor = '#fff0f0';
});

dropzone.addEventListener('drop', e => {
  e.preventDefault();
  dropzone.style.backgroundColor = '#fff0f0';
  const data = e.dataTransfer.getData('text/plain');
  const newSkill = document.createElement('div');
  newSkill.textContent = data;
  newSkill.classList.add('skill');
  newSkill.setAttribute('draggable', 'true');
  dropzone.appendChild(newSkill);
});
function handleMood(mood) {
  const moodCheck = document.getElementById('moodCheck');
  const response = document.getElementById('moodResponse');

  moodCheck.style.display = 'none';

  if (mood === 'good') {
    response.textContent = "That's great to hear! Keep up the positive vibes! 🌟";
  } else {
    const quotes = [
      "Tough times don’t last, but tough people do.",
      "Every day may not be good, but there’s something good in every day.",
      "You’ve got this — take a deep breath and keep going.",
      "Storms make trees take deeper roots. 🌳"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    response.textContent = `Sending strength your way! 💪 "${randomQuote}"`;
  }
}
