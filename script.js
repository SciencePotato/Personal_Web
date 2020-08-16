let progress = document.getElementById("progress");
let Height = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.scrollY/ Height) * 100;
    progress.style.width = progressHeight + '%';
};

page = ["#one","#two","#three","#four","#five"];
pageNum = 0;

// SrcCode = ["bubble_sort/index.html","selective_sort/index.html","comb_sort/index.html","Insertion_sort/index.html","radix_sort/index.html"];
// SortName = ["Bubble Sort", "Selective Sort","Comb Sort","Insertion Sort","Radix Sort"];
// SrcNum = 1;
// let sort = document.getElementById("sorts");
// let sortN = document.getElementById("sortName");
// function Change() {
//     sort.src = SrcCode[SrcNum];
//     sortN.innerHTML = SortName[SrcNum];
//     if(SrcNum != SrcCode.length - 1){
//         SrcNum++;
//     }
//     else{
//         SrcNum = 0;
//     }
// }

(function () {
    $(window).scroll(function() {
        var a = $(this).scrollTop() + $(this).innerHeight();
        $(".effect").each(function() { // container must have class name effect to work
            var b = $(this).offset().top;
            if (a > b && $(this).css("opacity") == 0) {
                $(this).css("transform", "none");
                $(this).animate({
                    "opacity": 1
                }, 750);
            }
        });
    }).scroll();
})();


start = () =>{
    window.location = "Personal_Web/#one";
    switchPage = setInterval(() =>{
        pageNum++;
        window.location = "Personal_Web/" + page[pageNum];
        var radioButtons = document.getElementsByName("slides");
        radioButtons[pageNum].checked = "checked";
        if(pageNum == 4){
            pageNum = -1;
        }
        // pageNum = pageNum == 4 ? pageNum - 1 : pageNum ++;
    }, 5000);

}

radioclicked = (destination) =>{
    clearInterval(switchPage);
}