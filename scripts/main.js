let rating = document.getElementsByClassName("rating");
const submit = document.getElementById("submit");
const start = document.getElementById("start");
const end = document.getElementById("end");

let ratingSelection = null;

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


submit.addEventListener("click", function(){
    let rated = document.getElementById("rated");

    if (ratingSelection === null) {
        console.log("No rating selected")
    } else {
        // rated.innerHTML("You selected " + ratingSelection + " out of 5");
        start.classList.toggle("hidden");
        end.classList.toggle("hidden");
    }
    
});

