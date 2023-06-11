const panels = document.querySelectorAll('.panel');
const eventSection = document.querySelector('.all-events');
const showBtn = document.getElementById('other-btn');


showBtn.addEventListener('click', () => {
    eventSection.classList.toggle('show');
    eventSection.scrollIntoView({ block: "center", behavior: "smooth" });
})

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}