// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("Slides");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 3000); // Change image every 2 seconds
// }


function retrieve() {

    const apiKey = '423b4fa3ae35431b927b27cdcf3bcace'
    let topic = "women empowerment"
    let url = "https://newsapi.org/v2/everything?q=women%20empowerment&apiKey=423b4fa3ae35431b927b27cdcf3bcace"
    $.ajax({
        type: "POST",
        url: "~/get_news.py",
        data: { param: url }
    }).done(function (o) {
        console.log(o)
    });
}
retrieve()