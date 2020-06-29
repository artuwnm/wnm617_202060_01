// $(()=>){} Also means document.ready
// $(document).ready(()=>){

// }

$(() => {

    // Accordion
    $(".accordion dt").on("click", function (e) {
        // $(this).next().toggle()
        // $(this).next().slideToggle();
        // lexical this, the object that got clicked.
        // .next() Traversal method (Document Object model - DOM)
        // can also use .show() to just be able to click on it and now toggle it closed
        $(this).next().slideDown().siblings("dd").slideUp();
    });

    // TAB GROUP
    $(".tabgroup .tab").on("click", function (e) {
        let id = $(this).index();

        $(this).addClass("active").siblings().removeClass("active")

        $(this).closest(".tabgroup").find('.content').eq(id).addClass("active").siblings().removeClass("active")
    })

});

// Same code in Vanilla Js

// window.addEventListener("DOMContentLoaded", function(e){
//     document.querySelectorAll(".accordion dt").forEach(o=>{
//         o.addEventListener("click", function(e){
//             o.nextElementSibling.style.display = this.nextElementSibling.style=="none"?"":"none";
//         })
//     })
// })