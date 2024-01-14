$(function(){
    $(".slide li").hide();

    $(".slide li").eq(0).show();

    var n = 0; //현재 보이는 인덱스 번호

    
    setInterval(function(){
        $(".slide li").eq(n).fadeOut();
        if(n==2){
            n=0;
        } else{
            n++;
        } //if
        console.log(n)
        $(".slide li").eq(n).fadeIn();
    } ,3000) // setinterval


//메뉴
$(".m_btn").click(function(){
    $(".m_nav").stop().slideToggle("fast")
}) //click




    
}) //jquery