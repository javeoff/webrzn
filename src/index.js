// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Font Awesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import './styles/index.scss' 
import './scripts/script.js'

import './scripts/quiz.js'

// document.querySelectorAll('.question').forEach(q => {
//     q.addEventListener("click", e => {
//         e.target.querySelector('info').classList.toggle('show')
//     });
// })

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.question').forEach((q, i) => {
    const show = (e, qq) => {
        e.currentTarget.querySelector('.info').classList.toggle('show')
    }
    document.querySelectorAll('.question')[i].onclick = e => show(e, q)
})

document.querySelectorAll('.sidebar-item').forEach((q, i) => {
    const show = (e, qq) => {
        document.querySelectorAll('.sidebar-item').forEach((q, i) => q.classList.remove('active'))
        e.currentTarget.classList.add('active')
        console.log(e.currentTarget.dataset.id);
        document.querySelectorAll('.content-item').forEach((q, i) => q.classList.remove('show'))
        document.querySelector(`.content div[data-id="${e.currentTarget.dataset.id}"]`).classList.toggle('show')
    }
    document.querySelectorAll('.sidebar-item')[i].onclick = e => show(e, q)
})

// document.querySelector('#myInput').dispatchEvent('focus')