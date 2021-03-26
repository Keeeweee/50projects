const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        let wasActive = panel.classList.contains('active');
        removeActiveClasses();
        if (!wasActive) {
            panel.classList.add('active');
        }
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
