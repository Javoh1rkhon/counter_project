window.addEventListener('click', (event) => {
//     if (event.target.dataset.action === 'plusBig') {
//         const count = document.querySelector('.count')
//         const counter = document.querySelectorAll('[data-counter]')
// for (let i = 0; i < counter.length; i++) {
//     counter.innerHTML = ++counter.innerHTML
    
    
// }

//         console.log(counter);
//     }
if (event.target.dataset.action === 'plus') {
    // console.log('click');
    const aComp = event.target.closest('.aComp')
    const counter = aComp.querySelector('[data-counter]')
    counter.innerHTML = ++counter.innerHTML
}

if (event.target.dataset.action === 'minus') {
    const aComp = event.target.closest('.aComp')
    const counter = aComp.querySelector('[data-counter]')

    if (parseInt(counter.innerHTML) > 0) {
        counter.innerHTML = --counter.innerHTML
    } else {
        counter.innerHTML = '0'
    }
}

})