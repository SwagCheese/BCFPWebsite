document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('plant-button')

    button.addEventListener('click', ev => {
        ev.currentTarget.parentElement.classList.toggle('active')
    })
})
