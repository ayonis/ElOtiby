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

  let upto1 = 0;
  let upto2 = 0;
  let upto3 = 0;
  let upto4 = 0;
  let content1 = document.getElementById("counter1");
  let count1 = parseInt(content1.innerText);
  let content2 = document.getElementById("counter2");
  let count2 = parseInt(content2.innerText);
  let content3 = document.getElementById("counter3");
  let count3 = parseInt(content3.innerText);
  let content4 = document.getElementById("counter4");
  let count4 = parseInt(content4.innerText);
	
	  
	let id1 = setInterval(updated, 50 , content1 ,  count1 );
	let id2 = setInterval(updated , 50 , content2 ,  count2 );
    let id3 = setInterval(updated , 50 , content3 ,  count3 );
	 let id4 = setInterval(updated , 50 , content4 ,  count4);
  function updated(ele , maxCount ) {
	  
		if(ele.getAttribute("id") == "counter1" ){
			ele.innerHTML = ++upto1;
			if (upto1 > maxCount) {
		  
				clearInterval(id1);
			}
		}
		if(ele.getAttribute("id") == "counter2" ){
			ele.innerHTML = ++upto2;
			if (upto2 > maxCount) {
		  
				clearInterval(id2);
			}
		}
		if(ele.getAttribute("id") == "counter3" ){
			ele.innerHTML = ++upto3;
			if (upto3 > maxCount) {
		  
				clearInterval(id3);
			}
		
		}
		
		if(ele.getAttribute("id") == "counter4" ){
			ele.innerHTML = ++upto4;
			if (upto1 > maxCount) {
		  
				clearInterval(id4);
			}
		}
     
      
  }
	  
