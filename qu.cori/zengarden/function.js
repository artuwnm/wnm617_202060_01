$("dt").on("click",function(e) {
	console.log('haha');
	// $(this).next().toggle();
	$(this).next().slideDown().siblings("dd").slideUp();
})

// document.querySelectorAll("dt").forEach(a=>a.addEventListener("click",function(e) {
// 	e.nextElementSibling.style.display = e.nextElementSibling.style == "none" ? "block":"none";
// }))