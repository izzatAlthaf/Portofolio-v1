// Script for FAQ section

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(faqItems => {
    faqItems.addEventListener('click', () => {
        faqItems.classList.toggle('active');
    });
});