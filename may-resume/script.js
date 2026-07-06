const data = window.RESUME_CONTENT;
const body = document.body;
const track = document.querySelector('.track');
const slides = [...document.querySelectorAll('.slide')];
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const counter = document.querySelector('.counter b');
const progress = document.querySelector('.progress i');
const languageButton = document.querySelector('.lang-toggle');
const chapterButtons = [...document.querySelectorAll('[data-go]')];
let activeIndex = 0;
let wheelLocked = false;
let touchStartX = 0;

const bilingual = (value) => {
  if (typeof value === 'string') return value;
  return `<span class="zh">${value.zh}</span><span class="en">${value.en}</span>`;
};

const bulletList = (bullets) => `
  <ul class="lang-list zh">${bullets.zh.map((item) => `<li>${item}</li>`).join('')}</ul>
  <ul class="lang-list en">${bullets.en.map((item) => `<li>${item}</li>`).join('')}</ul>`;

function renderContent() {
  document.querySelector('#hero-tagline').innerHTML = bilingual(data.identity.tagline);
  document.querySelector('#hero-profile').innerHTML = bilingual(data.identity.profile);
  document.querySelector('#education-list').innerHTML = data.education.map((item) => `<article><strong>${bilingual(item.school)}</strong><span>${bilingual(item.degree)}</span><small>${bilingual(item.period)}</small>${item.detail ? `<em>${bilingual(item.detail)}</em>` : ''}</article>`).join('');
  document.querySelector('#hero-honours').innerHTML = data.honours.map((item) => `<p><span>${bilingual(item)}</span><small>${item.year}</small></p>`).join('');

  document.querySelector('#current-cards').innerHTML = data.experiences.current.map((item) => `<article class="experience-card"><div class="card-top"><time>${bilingual(item.period)}</time><span>${item.badge}</span></div><h3>${bilingual(item.company)}</h3><p class="role">${bilingual(item.role)}</p>${bulletList(item.bullets)}</article>`).join('');

  const consulting = data.experiences.consulting;
  document.querySelector('#consulting-title').innerHTML = bilingual(consulting.company);
  document.querySelector('#consulting-role').innerHTML = `<strong>${bilingual(consulting.role)}</strong><span>${consulting.period}</span>`;
  document.querySelector('#consulting-metrics').innerHTML = consulting.metrics.map(([number, label]) => `<div><strong>${bilingual(number)}</strong><span>${bilingual(label)}</span></div>`).join('');
  document.querySelector('#consulting-bullets').innerHTML = `<ul class="zh">${consulting.bullets.zh.map((item, index) => `<li><b>0${index + 1}</b><span>${item}</span></li>`).join('')}</ul><ul class="en">${consulting.bullets.en.map((item, index) => `<li><b>0${index + 1}</b><span>${item}</span></li>`).join('')}</ul>`;

  document.querySelector('#audit-cards').innerHTML = data.experiences.audit.map((item) => `<article class="audit-card"><div><time>${item.period}</time><h3>${bilingual(item.company)}</h3><p>${bilingual(item.role)}</p></div>${bulletList(item.bullets)}</article>`).join('');
  document.querySelector('#competition-cards').innerHTML = data.competitions.map((item, index) => `<article><span>0${index + 1}</span><time>${item.period}</time><h3>${bilingual(item.title)}</h3><strong>${bilingual(item.award)}</strong>${item.detail ? `<p>${bilingual(item.detail)}</p>` : ''}</article>`).join('');
  document.querySelector('#leadership-cards').innerHTML = data.leadership.map((item) => `<article><div><time>${item.period}</time><h3>${bilingual(item.org)}</h3><p>${bilingual(item.role)}</p></div>${bulletList(item.bullets)}</article>`).join('');

  const library = data.projects.library;
  document.querySelector('#library-copy').innerHTML = `<div class="project-kicker"><span>06 / PRODUCT PROJECT</span><b><i></i>${library.status}</b></div><h2>${bilingual(library.title)}</h2><p class="project-lede">${bilingual(library.lede)}</p><div class="project-problem"><div><small>PROBLEM</small><p>${bilingual(library.problem)}</p></div><div><small>SOLUTION</small><p>${bilingual(library.solution)}</p></div></div><div class="chips">${library.tags.map((tag) => `<span>${tag}</span>`).join('')}</div><a class="demo-button" href="${library.url}" target="_blank" rel="noopener noreferrer">Visit Live Demo <b>↗</b></a>`;

  const career = data.projects.career;
  document.querySelector('#career-copy').innerHTML = `<div class="project-kicker"><span>07 / PRODUCT PROJECT</span><b>${career.status}</b></div><h2>${bilingual(career.title)}</h2><p class="project-lede">${bilingual(career.lede)}</p><div class="chips">${career.tags.map((tag) => `<span>${tag}</span>`).join('')}</div><p class="coming-soon"><span class="zh">产品概念与原型开发中</span><span class="en">Product concept & prototype in progress</span><b>COMING SOON</b></p>`;
  document.querySelector('#career-flow').innerHTML = career.flow.map((step, index) => `<li><b>0${index + 1}</b><span>${step}</span><i>→</i></li>`).join('');

  document.querySelector('#capability-cards').innerHTML = data.capabilities.map((item, index) => `<article><span>0${index + 1}</span><h3>${item.title}</h3><p class="zh">${item.zh}</p><p class="en">${item.en}</p></article>`).join('');
  document.querySelector('#honours-list').innerHTML = data.honours.map((item, index) => `<article><span>0${index + 1}</span><div><strong>${bilingual(item)}</strong><small>${item.year}</small></div></article>`).join('');
  document.querySelector('#tool-list').innerHTML = data.tools.map((tool) => `<span>${tool}</span>`).join('');
  document.querySelector('#contact-list').innerHTML = Object.entries(data.contacts).map(([key, contact], index) => `<button type="button" data-copy="${contact.value}" data-placeholder="${!contact.value}"><small>0${index + 1} / ${contact.label.toUpperCase()}</small><strong>${contact.value || '<span class="zh">待补充</span><span class="en">To be added</span>'}</strong><span>Copy ↗</span></button>`).join('');
}

function goToSlide(index, updateHash = true) {
  const next = Math.max(0, Math.min(slides.length - 1, index));
  activeIndex = next;
  track.style.transform = `translate3d(${-next * 100}vw, 0, 0)`;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === next);
    slide.setAttribute('aria-hidden', String(slideIndex !== next));
  });
  counter.textContent = String(next + 1).padStart(2, '0');
  progress.style.width = `${((next + 1) / slides.length) * 100}%`;
  prevButton.disabled = next === 0;
  nextButton.disabled = next === slides.length - 1;
  const chapter = Number(slides[next].dataset.chapter);
  document.querySelectorAll('.chapter-nav [data-go]').forEach((button) => button.classList.toggle('active', Number(button.dataset.go) === chapter));
  if (updateHash) history.replaceState(null, '', `#${slides[next].id}`);
}

function setLanguage(language) {
  const english = language === 'en';
  body.classList.toggle('english', english);
  document.documentElement.lang = english ? 'en' : 'zh-CN';
  languageButton.querySelectorAll('span').forEach((item, index) => item.classList.toggle('active', english ? index === 1 : index === 0));
  languageButton.setAttribute('aria-label', english ? '切换至中文' : 'Switch to English');
  localStorage.setItem('may-resume-language', language);
}

async function copyContact(button) {
  const value = button.dataset.copy;
  const toast = document.querySelector('.copy-toast');
  if (!value) {
    toast.textContent = body.classList.contains('english') ? 'This detail has not been added yet.' : '这项联系方式还待补充。';
  } else {
    try { await navigator.clipboard.writeText(value); }
    catch {
      const area = document.createElement('textarea');
      area.value = value;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    toast.textContent = body.classList.contains('english') ? 'Copied — looking forward to hearing from you :)' : '复制成功，请联系我吧^ ^~';
  }
  toast.classList.add('show');
  clearTimeout(copyContact.timer);
  copyContact.timer = setTimeout(() => toast.classList.remove('show'), 2000);
}

renderContent();
const initialHashIndex = slides.findIndex((slide) => `#${slide.id}` === location.hash);
goToSlide(initialHashIndex >= 0 ? initialHashIndex : 0, false);
setLanguage(localStorage.getItem('may-resume-language') === 'en' ? 'en' : 'zh');

prevButton.addEventListener('click', () => goToSlide(activeIndex - 1));
nextButton.addEventListener('click', () => goToSlide(activeIndex + 1));
chapterButtons.forEach((button) => button.addEventListener('click', () => goToSlide(Number(button.dataset.go))));
languageButton.addEventListener('click', () => setLanguage(body.classList.contains('english') ? 'zh' : 'en'));
document.querySelectorAll('[data-copy]').forEach((button) => button.addEventListener('click', () => copyContact(button)));

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown') goToSlide(activeIndex + 1);
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') goToSlide(activeIndex - 1);
  if (event.key === 'Home') goToSlide(0);
  if (event.key === 'End') goToSlide(slides.length - 1);
});

window.addEventListener('wheel', (event) => {
  event.preventDefault();
  if (wheelLocked || Math.abs(event.deltaY) + Math.abs(event.deltaX) < 18) return;
  wheelLocked = true;
  goToSlide(activeIndex + (event.deltaY + event.deltaX > 0 ? 1 : -1));
  setTimeout(() => { wheelLocked = false; }, 650);
}, { passive: false });

window.addEventListener('touchstart', (event) => { touchStartX = event.touches[0].clientX; }, { passive: true });
window.addEventListener('touchend', (event) => {
  const distance = touchStartX - event.changedTouches[0].clientX;
  if (Math.abs(distance) > 45) goToSlide(activeIndex + (distance > 0 ? 1 : -1));
}, { passive: true });

window.addEventListener('hashchange', () => {
  const index = slides.findIndex((slide) => `#${slide.id}` === location.hash);
  if (index >= 0) goToSlide(index, false);
});
