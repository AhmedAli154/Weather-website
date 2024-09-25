  var btnClick = document.getElementById("button")
  var butto =document.getElementById("butt")
  var searchinput = document.getElementById("searchh") 
 var displayday =document.getElementById("day")
  var displayCity=document.getElementById("city")
 var displayDegree1=document.getElementById("degree1")
  var diaplayDesc=document.getElementById("desc")
  var diaplayClouds=document.getElementById("clouds")
  var displaySpeed=document.getElementById("speed")
  var displayDeg=document.getElementById("deg")
  var  displayDegree2=document.getElementById("Deg2")
  var displayDesc2=document.getElementById("desc2")
 
  var  displayDegree3=document.getElementById("Deg3")
  var displayDesc3=document.getElementById("desc3")
//   ------------------------------------------------------------------------------
 var img1=document.getElementById("image1")
 var img2=document.getElementById("image2")
 var img3=document.getElementById("image3")
//-------------------------------------------------------------- 
 var displayday1 =document.getElementById("day1")
  var displayDate1 =document.getElementById("date1")
  var displayday2 =document.getElementById("day2")
  var displayday3 =document.getElementById("day3")
 
//----------------------------------------------------------------
 const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
 const monthes = ["january"," February", "March"," April"," May"," June"," July", "August"," September","October","November"," December"]; 
  let data = [];


 
     function geet(){
         var i =searchinput.value
                getmails(i)
 


             }


   async function getmails(index ) {

        
      const response = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${index}&cnt=3&units=metric&appid=85fa3b5bec0b2e09bae5bc6fab1665da`);

            data = await response.json();
           
            date1 =new Date (data.list[0].dt_txt)
            date2 =new Date (data.list[1].dt_txt)
            date3 =new Date (data.list[2].dt_txt)
            displayday1.innerHTML=weekday[date1.getDay()]
            displayday2.innerHTML=weekday[date2.getDay()+1]
            displayday3.innerHTML=weekday[date3.getDay()+2]
            displayDate1.innerHTML=date1.getDate()+""+monthes[date1.getMonth()]
               

            displayCity.innerHTML=data.city.name
            displayDegree1.innerHTML=Math.round(data.list[0].main. temp_max*10) /10+"C"     
            diaplayDesc.innerHTML=data.list[0].weather[0].description   
            diaplayClouds.innerHTML=data.list[0].clouds.all+"%" 
            displaySpeed.innerHTML=data.list[0].wind.speed+"km/h"
            displayDeg.innerHTML=data.list[0].wind.deg+"deg"
            displayDegree2.innerHTML= Math.round(data.list[1].main.temp_max* 10) / 10+"o"  
            displayDesc2.innerHTML=data.list[1].weather[0].description   
            displayDegree3.innerHTML= Math.round(data.list[2].main.temp_max* 10) / 10+"o"     
            displayDesc3.innerHTML=data.list[2].weather[0].description 
            
            //-----------------------first img day1-------------
            var deg1 = Math.round(data.list[0].main.temp_max* 10) / 10 
            if (deg1>35) {
                  img1.innerHTML=`<img  src="./photo/113.webp" alt="" class="image">`
             }else if ( deg1>30)  {
                  img1.innerHTML=`<img  src="./photo/116.webp" alt="" class="image">`

            } else if ( deg1>25){
                   img1.innerHTML=`<img  src="./photo/353.png" alt="" class="image">`
            }else if ( deg1>20){
                  img1.innerHTML=`<img  src="./photo/302.png" alt="" class="image">`
           }else if ( deg1>18){
            img1.innerHTML=`<img  src="./photo/116.webp" alt="" class="image">`
           }
            else{
                   img1.innerHTML=`<img  src="./photo/176.png" alt="" class="image">`
                  }
            //---------------second img day 2----------------

            var deg2 =Math.round(data.list[1].main.temp_max*10) /10  
            if (deg2>35) {
                  img2.innerHTML=`<img src="./photo/113.webp" alt="">`
             }else if ( deg2>30)  {
                  img2.innerHTML=`<img src="./photo/116.webp" alt="">`

            } else if ( deg2>25){
                   img2.innerHTML=`<img src="./photo/353.png" alt="">`
            }else if ( deg2>20){
                  img2.innerHTML=`<img src="./photo/302.png" alt="">`
           }else if ( deg2>18){
            img2.innerHTML=`<img src="./photo/116.webp" alt="">`
           }
            else{
                   img2.innerHTML=`<img src="./photo/176.png" alt="">`
                  }
            //---------------third img day3-------------    
            var Deg3 =Math.round(data.list[2].main.temp_max*10) /10  
            if (Deg3>35) {
                  img3.innerHTML=`<img class="mt-5" src="./photo/113.webp" alt=""> `
             }else if ( Deg3>30)  {
                  img3.innerHTML=`<img class="mt-5" src="./photo/116.webp" alt=""> `

            } else if ( Deg3>25){
                   img3.innerHTML=`<img class="mt-5" src="./photo/353.png" alt=""> `
            }else if ( Deg3>20){
                  img3.innerHTML=`<img class="mt-5" src="./photo/302.png" alt=""> `
           }else if ( Deg3>18){
            img3.innerHTML=`<img class="mt-5" src="./photo/116.webp" alt=""> `
           }
            else{
                   img3.innerHTML=`<img class="mt-5" src="./photo/176.png" alt=""> `
                  }

      }
 
      


      btnClick.addEventListener('click',function () {
            geet()   ;
      })







 









 