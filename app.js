const cubes = document.querySelectorAll("div");
const img = document.querySelector("img");
const contextAudio = new Audio("cri.mp3")


for (let i = 0; i < cubes.length; i++) {
    const cube = cubes[i];
    cube.addEventListener("click", skip =>{
        if(cube.classList.contains("active")){
            cube.classList.toggle("active")
            cubes[i+1].classList.toggle("active")
        }
        if(cubes[3].classList.contains("active")){
    img.style.display = "block"
    contextAudio.play()
}
    })
}