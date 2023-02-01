const slides = document.querySelectorAll('.slide')

for (const slide of slides){
    slide.addEventListener('click', ()=>{
        removeActiveClasses()
        slide.classList.add ('active')
    })
}
function removeActiveClasses() {
    for (let slide of slides){
        slide.classList.remove('active')
    }
}