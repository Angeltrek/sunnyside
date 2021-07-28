document.querySelector("#burger").addEventListener('click', function(){
    document.querySelector('.navmenu').classList.toggle('show-menu');
});

if(screen.width <= 1000){
    document.querySelectorAll(".image-description")[0].innerHTML =
        "<div class='image-container'> <img src='./images/desktop/image-transform.jpg' alt=''> </div> <div class='description-container'> <div class='description'> <h2>Transform your brand</h2> <p> We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p> <a href=''>Learn more</a> </div> </div>";
}