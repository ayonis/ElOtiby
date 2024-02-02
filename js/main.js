$(".phonebtn").mouseover(function(){
    $(".phonebtn").animate({scale: '1.2'},300);
  });

  $(".phonebtn").mouseleave(function(){
    $(".phonebtn").animate({scale: 1},1);
  });

  var i=0;
  function change(btn){
    var ele = document.getElementById("flb-lightbox-image");
    if (btn === 0)
    {
      
      var absUrl = ele.src.split('/');
      var imgname = absUrl[absUrl.length-1];
      var imgnum = imgname.match(/\d+/g);
        var prevImgnum = imgnum - 1;
        if(prevImgnum < 1 ){
          prevImgnum = imgnum;
        }
        if(imgnum<10)
        var prevImgurl = ele.src.slice(0, (ele.src.length-5)) + "" +prevImgnum + ".png";
      else if(imgnum < 100)
      var prevImgurl = ele.src.slice(0, (ele.src.length-6)) + "" +prevImgnum + ".png";
        ele.src = prevImgurl;
     
    } else{
    
      var absUrl = ele.src.split('/');
      var imgname = absUrl[absUrl.length-1];
      var imgnum = imgname.match(/\d+/g);
        var nextImgnum = imgnum -1 + 2;
        
        if(nextImgnum > 17){
          nextImgnum = imgnum;
        }
        if(imgnum<10)
        var nextImgurl = ele.src.slice(0, (ele.src.length-5)) + "" +nextImgnum + ".png";
      else if(imgnum < 100)
      var nextImgurl = ele.src.slice(0, (ele.src.length-6)) + "" +nextImgnum + ".png";
        ele.src = nextImgurl;
        
    }

  }
//Footer Counter
  let counts = setInterval(updated);
  let upto = 0;
  function updated(max) {
      let count = document.getElementById("counter");
      count.innerHTML = ++upto;
      if (upto === max) {
          clearInterval(counts);
      }
  }