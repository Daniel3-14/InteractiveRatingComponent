let rating = document.getElementsByClassName("rating");

let ratingSelection = 0;

for (let i = 0; i < rating.length; i++) {
    rating[i].addEventListener("click", function(){
        let activeRating = document.getElementsByClassName("active");
        if (activeRating.length == 0) {
            this.classList.toggle("active");
        } else {
            activeRating[0].classList.remove("active");
            this.classList.toggle("active");
        }
        
        ratingSelection = this.innerHTML;
    });
}

