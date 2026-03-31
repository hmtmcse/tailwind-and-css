import Collapse from 'bootstrap/js/dist/collapse';

document.querySelectorAll('.accordion').forEach(el => {
    new Collapse(el, {toggle: false});
});

console.log('Bootstrap Accordion JS Loaded');