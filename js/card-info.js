var card_item = document.querySelectorAll(".portfolio-card-item");
var card_info = document.querySelectorAll(".card-info");
var close_info = document.querySelectorAll(".close-info");
var body = document.getElementById("body")

card_item.forEach((item,card_index) => {
        card_item[card_index].addEventListener('click',function(){
            card_info.forEach((info,info_index)=>{
                if(info_index == card_index){
                    info.style.display="block";
                    body.style.overflowY="hidden";
                }
        })
    })
});

close_info.forEach((close,close_index) => {
    close_info[close_index].addEventListener('click',function(){
        card_info.forEach((info,info_index)=>{
            if(info_index == close_index){
                info.style.display="none";
                body.style.overflowY="auto";
            }
    })
})
});
