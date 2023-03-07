$(document).ready(function () {
    // section loading & home &side-bar & btn-top
    $('.loading').css('display','none')
    $('body').css('overflow','auto')
    $('.side-bar').css('width','0px');
    $('.side-bar a').css('display','none');

    $('.btnClose').click(function (){
        $('.side-bar').animate({width:'0px'},300)
        $('.side-bar a').fadeOut(300);
        $('#home section').animate({marginLeft:'0'},300)
    });
  
    $('.openNav').click(function(){
        if($('.side-bar').css('width')=='0px'){
            $('.side-bar').animate({width:'250px'},300) 
            $('.side-bar a').fadeIn(300);
            $('#home section').animate({marginLeft:'250px'},300)
        }
        else{
            $('.side-bar').animate({width:'0'},300) 
            $('.side-bar a').fadeOut(300);
            $('#home section').animate({marginLeft:'0'},300)

        }

    })

    $("a[href^='#']").click(function(e){
        let aHref = $(e.target).attr('href')  //#contact
        let offset =  $(`${aHref}`).offset().top;  // $('#contact').offset().top;
        $('html').animate({scrollTop: offset},1000)
    })

    $('.btnTop').click(function(){
        $('html,body').animate({scrollTop: '0'},1000)
    })
    let offsetSinger = $('#singer').offset().top /2 ;
  

    $(window).scroll(function(){
        let windowScroll = $(window).scrollTop();
        if(windowScroll > offsetSinger ){
            $('.btnTop').fadeIn()
        }
        else{
            $('.btnTop').fadeOut()
        }
    })





    // section Details
     $('#p').show();
     let singer = $('#singer div h3');
     singer.eq(0).click(function(){
        singer.eq(0).next().slideToggle(1000);
        singer.eq(0).next().nextAll('p').slideUp(1000);
     })
     singer.eq(1).click(function(){
        singer.eq(1).next().slideToggle(1000);
        singer.eq(1).next().siblings('p').slideUp(1000);
     })
     singer.eq(2).click(function(){
        singer.eq(2).next().slideToggle(1000);
        singer.eq(2).next().siblings('p').slideUp(1000);
     })
     singer.eq(3).click(function(){
        singer.eq(3).next().slideToggle(1000);
        singer.eq(3).next().siblings('p').slideUp(1000);
     })

  

     //section Duration
    let endDate =new Date('4/7/2023');
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour*24;
 
    setInterval(show,1000)

    function show(){
        let nowDate = new Date();
        let dif = endDate - nowDate;

        if(dif > 0){
            let days = Math.floor(dif/day)
            let hours = Math.floor((dif%day)/hour)
            let minutes = Math.floor((dif%hour)/minute)
            let seconds = Math.floor((dif%minute)/second)
            document.getElementById('dayes').innerHTML = days + 'D ';
            document.getElementById('hours').innerHTML = hours + 'h ';
            document.getElementById('minutes').innerHTML = minutes + 'm ';
            document.getElementById('seconds').innerHTML = seconds + 's';
        }
    }
     


    //section contact
    let char = 100;
    $('#char').text(char);
    $('textarea').keyup(function(e) {
      var lengthOfInput = $(this).val().length;  //0           // 1
      var NumberOfChar = char-lengthOfInput;  //100-0 = 100    // 100-1 = 99
      $('#char').text(NumberOfChar);  // 100 Characyer Reamining //99 Characyer Reamining
      if( lengthOfInput >= char){
        $('#char').text('your available character finished');
      }

    }); 
        
})
