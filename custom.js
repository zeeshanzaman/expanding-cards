// create a variable and apply querySelectorAll on it  
const panels = document.querySelectorAll('.panel')
    // apply for eachLoop
panels.forEach((panel) => {
    // create a function with add eventListner
    panel.addEventListener('click', () => {
        // create a function with for removing classes
        removeActiveClasses()
            // rest part of add eventListener to add classes
        panel.classList.add('active')
    })
})

// functio for remove classes
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}