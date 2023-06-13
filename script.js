const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// THis removes the active class from all so that only the one clicked will be the active class
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}