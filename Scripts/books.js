(function () {
    $("#carousel123").carousel({ interval: 2000 });
    $("#carouselABC").carousel({ interval: 3600 });
})();

(function () {
    $(".carousel-showmanymoveone .item").each(function () {
        var itemToClone = $(this);

        for (var i = 1; i < 4; i++) {
            itemToClone = itemToClone.next();

            // wrap around if at end of item collection
            if (!itemToClone.length) {
                itemToClone = $(this).siblings(":first");
            }

            // grab item, clone, add marker class, add to collection
            itemToClone
                .children(":first-child")
                .clone()
                .addClass("cloneditem-" + i)
                .appendTo($(this));
        }
    });
})();

fetch('../booklist.txt')
    .then(response => response.text())
    .then(text => addBooks(text))


// < div class="card horizontal" >
//     <div class="container">
//         <div class="col s12 m7">
//             <div class="card-stacked">
//                 <div class="card-content">
//                     <span class="card-title">Title</span>
//                     <p><b>Book Title</b>: Becoming</p>
//                 </div>
//                 <div class="card-action">
//                     <a href="#">MoreInfo</a>
//                 </div>
//             </div>
//         </div>
//     </div>
//         </div >
function addBooks(bookList) {
    var arrayLength = 10;
    const cont = document.getElementById("booklist");
    for (var i = 0; i < arrayLength; i++) {
        const cont1 = document.createElement('div')
        cont1.classList.add("card")
        cont1.classList.add("horizontal")
        const cont2 = document.createElement('div')
        cont2.classList.add("container")
        const cont3 = document.createElement('div')
        cont3.classList.add("col")
        cont3.classList.add("s12")
        cont3.classList.add("m7")
        const cont4 = document.createElement('div')
        cont4.classList.add("card-stacked")
        const cont5 = document.createElement('div')
        cont5.classList.add("card-content")
        const moreInfo = document.createElement('div')
        moreInfo.classList.add("card-action")
        const link = document.createElement("a")
        link.setAttribute("href", "https://www.goodreads.com" + bookList[i][arrayLength - 2])
        const title = document.createElement("span")
        title.classList.add("card-title")
        const para = document.createElement("p")
        title.innerHTML = bookList[i][0]
        para.innerHTML = "Book by ", bookList[i][1]
        link.innerHTML = "More Info"
        cont1.appendChild(cont2)
        cont2.appendChild(cont3)
        cont3.appendChild(cont4)
        cont4.appendChild(cont5)
        cont4.appendChild(moreInfo)
        cont5.appendChild(title)
        cont5.appendChild(para)
        cont.appendChild(cont1)

    }
}