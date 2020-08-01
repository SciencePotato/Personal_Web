let progress = document.getElementById("progress");
let Height = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.scrollY/ Height) * 100;
    progress.style.width = progressHeight + '%';
}

SrcCode = ["bubble_sort/index.html","selective_sort/index.html","comb_sort/index.html","Insertion_sort/index.html","radix_sort/index.html"];
SortName = ["Bubble Sort", "Selective Sort","Comb Sort","Insertion Sort","Radix Sort"];
SrcNum = 1;
let sort = document.getElementById("sorts");
let sortN = document.getElementById("sortName");
function Change() {
    sort.src = SrcCode[SrcNum];
    sortN.innerHTML = SortName[SrcNum];
    if(SrcNum != SrcCode.length - 1){
        SrcNum++;
    }
    else{
        SrcNum = 0;
    }
}
   