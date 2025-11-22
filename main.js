import { translations } from './translations.js';

// Loader Logic
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 2500); // 2.5 seconds delay
    }
});

// Language Logic
const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('mff_lang') || 'it';

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    if (langToggle) {
        langToggle.textContent = lang === 'it' ? 'EN' : 'IT';
    }

    localStorage.setItem('mff_lang', lang);
    currentLang = lang;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
});

if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'it' ? 'en' : 'it';
        updateLanguage(newLang);
    });
}

// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li a');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        if (burger) burger.classList.remove('toggle');
    });
});
