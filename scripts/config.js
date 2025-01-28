// Variables
const titleName = 'Nome Sobrenome';
const crpNumber = 'CRP ' + '00/000000';
const linkedin = '';
const whatsapp = '+55' + '11111111111';
const instagram = '';
const message = 'Olá, gostaria de agendar uma avaliação.';

// Elements
const linkedinlinks = document.querySelectorAll('a.linkedin');
const wpplinks = document.querySelectorAll('a.whatsapp');
const instalinks = document.querySelectorAll('a.instagram');
const client = document.getElementById("client");
const crp = document.getElementById("crp");

// Linkedin Generate
function linkedInGenerate(linkedin) {
    return `https://br.linkedin.com/in/${linkedin}`;
}
linkedinlinks.forEach(link => {
    const newLink = linkedInGenerate(linkedin);
    link.href = newLink;
});

// Whatsapp Generate
function whatsappGenerate(whatsapp, message) {
    return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}
wpplinks.forEach(link => {
    const newLink = whatsappGenerate(whatsapp, message);
    link.href = newLink;
});

// Instagram Generate
function instagramGenerate(instagram) {
    return `https://www.instagram.com/${instagram}`;
}
instalinks.forEach(link => {
    const newLink = instagramGenerate(instagram);
    link.href = newLink;
});

// Title
document.title = titleName;
client.textContent = titleName;
crp.textContent = crpNumber;

// Metatags
const newKeywords = "palavra-chave1, palavra-chave2, palavra-chave3";
const newDescription = "Esta é a nova descrição da página.";

const metaKeywords = document.querySelector('meta[name="keywords"]');
const metaDescription = document.querySelector('meta[name="description"]');

metaKeywords.content = newKeywords;
metaDescription.content = newDescription;

// Og Metatags
const newOgTitle = "Título da Página para o Facebook";
const newOgDescription = "Descrição da Página para o Facebook";
const newOgImage = '../images/presentation.jpg';

const ogTitle = document.querySelector('meta[property="og:title"]');
const ogDescription = document.querySelector('meta[property="og:description"]');
const ogImage = document.querySelector('meta[property="og:image"]');

ogTitle.content = newOgTitle;
ogDescription.content = newOgDescription;
ogImage.content = newOgImage;

// Current Year Footer
const currentYear = document.getElementById("current-year");
const year = new Date().getFullYear();

currentYear.innerHTML = year;

// Animated Scroll
const animateds = document.querySelectorAll('.animated-scroll');

const reveal = () => {
    for (let i = 0; i < animateds.length; i++) {
        const element = animateds[i];
        let position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 200) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    }
};

window.addEventListener('scroll', reveal);
reveal();