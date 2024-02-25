// accordin active

const questions = document.querySelectorAll('.qusstionAndAnswer')
questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active')
    })
});


const header = document.querySelector('#header');

document.addEventListener('scroll', (e) => {
    const scroll = scrollY;
    if (scroll > 150) {
        header.classList.add('fixed')
    }
    if (scroll < 150) {
        header.classList.remove('fixed')

    }
})