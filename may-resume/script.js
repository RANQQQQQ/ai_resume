const body = document.body;
const header = document.querySelector('.site-header');
const languageButton = document.querySelector('.lang-toggle');
const languageParts = languageButton.querySelectorAll('span');
const backToTop = document.querySelector('.back-to-top');
const navLinks = [...document.querySelectorAll('[data-nav]')];
const content = window.RESUME_CONTENT;

renderEditableContent();

function renderEditableContent() {
  if (!content) return;

  document.querySelectorAll('[data-contact]').forEach((element) => {
    const contact = content.contacts[element.dataset.contact];
    if (!contact) return;
    const isPlaceholder = !contact.value;
    element.dataset.copy = contact.value || '待补充';
    element.dataset.placeholder = String(isPlaceholder);
    const valueElement = element.querySelector('[data-contact-value]');
    valueElement.innerHTML = isPlaceholder
      ? '<span class="zh">待补充</span><span class="en">To be added</span>'
      : contact.value;
  });

  document.querySelectorAll('[data-honours]').forEach((list) => {
    const cards = list.dataset.honours === 'cards';
    list.innerHTML = content.honours.map((honour, index) => cards
      ? `<li><span>${String(index + 1).padStart(2, '0')}</span><div><strong class="zh">${honour.zh}</strong><strong class="en">${honour.en}</strong>${honour.year ? `<small>${honour.year}</small>` : ''}</div></li>`
      : `<li><span class="zh">${honour.zh}</span><span class="en">${honour.en}</span>${honour.year ? `<small>${honour.year}</small>` : ''}</li>`
    ).join('');
  });

  document.querySelectorAll('[data-project-link]').forEach((link) => {
    const project = content.projects[link.dataset.projectLink];
    if (project?.url) link.href = project.url;
  });
}

const storedLanguage = localStorage.getItem('may-resume-language');
if (storedLanguage === 'en') setLanguage('en');

languageButton.addEventListener('click', () => {
  setLanguage(body.classList.contains('english') ? 'zh' : 'en');
});

function setLanguage(language) {
  const english = language === 'en';
  body.classList.toggle('english', english);
  document.documentElement.lang = english ? 'en' : 'zh-CN';
  document.title = english
    ? 'May — Product Management Intern'
    : 'May / 南瓜头 — 产品经理实习生';
  languageButton.setAttribute('aria-pressed', String(english));
  languageButton.setAttribute('aria-label', english ? '切换至中文' : 'Switch to English');
  languageParts[0].classList.toggle('active', !english);
  languageParts[1].classList.toggle('active', english);
  localStorage.setItem('may-resume-language', language);
}

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    const isPlaceholder = button.dataset.placeholder === 'true';
    const feedback = button.closest('.contact-list')
      ? document.querySelector('.contact-feedback')
      : document.querySelector('.copy-feedback');

    if (isPlaceholder) {
      showFeedback(feedback, body.classList.contains('english')
        ? 'This detail has not been added yet.'
        : '这项联系方式还待补充。');
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const input = document.createElement('textarea');
      input.value = value;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }

    showFeedback(feedback, body.classList.contains('english')
      ? 'Copied successfully — looking forward to hearing from you :)'
      : '复制成功，请联系我吧^ ^~');
  });
});

let feedbackTimer;
function showFeedback(element, message) {
  clearTimeout(feedbackTimer);
  element.textContent = message;
  element.classList.add('show');
  feedbackTimer = setTimeout(() => element.classList.remove('show'), 2100);
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element, index) => {
  if (index < 7) element.style.transitionDelay = `${index * 45}ms`;
  revealObserver.observe(element);
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.nav === entry.target.id);
    });
  });
}, { rootMargin: '-25% 0px -60%', threshold: 0 });

document.querySelectorAll('main > section[id]').forEach((section) => sectionObserver.observe(section));

function updateScrollUI() {
  const scrollY = window.scrollY;
  header.classList.toggle('scrolled', scrollY > 16);
  backToTop.classList.toggle('visible', scrollY > window.innerHeight * 1.4);
}

window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
