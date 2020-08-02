const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;
imgs.forEach(img =>
img.addEventListener('click',imgClick));
function imgClick(e){
  //reset the opacity
  imgs.forEach((img) => {
    img.style.opacity =1;
  });

  //change current image source to the clicked image
  current.src = e.target.src;
  //add fading effect
  current.classList.add('fade-in');
  //remove fade in class after .5s
  setTimeout(()=>current.classList.remove('fade-in'),500);
  //change opacity
  e.target.style.opacity =opacity;

}
