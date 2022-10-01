/* Global Variables */
//Create API credentials on OpenWeatherMap.com
const apiKey = "&APPID=6baa2c81ec49e558dd6a3d0b68d19e9d&units=imperial";
//const base_url = "http://api.openweathermap.org/data/2.5/weather?zip=zip&APPID=6baa2c81ec49e558dd6a3d0b68d19e9d&units=imperial";
const base_url = "http://api.openweathermap.org/data/2.5/weather?zip=";
// Create a new date instance dynamically with JS
let d = new Date().toLocaleDateString();     ///MM/DD/YYYY
//let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
//////get button
const butt=document.getElementById("generate");
//Adds an event listener when click on button
butt.addEventListener('click',function() {
    //get zip value using id
    const zip = document.getElementById('zip').value;
    //get feelings value using id
  const feel = document.getElementById('feelings').value;
    //base url 
    const url=`${base_url}${zip}${apiKey}`;
     ////call getDate function to fetch the data from the app endpoint 
     getData(url).then(function(data){
    console.log(data)
    //get temp
    const temp=Math.round(data.main.temp);
    console.log(temp);
    //call postData function should take two argument(URL,object)
    postData("http://localhost:7000/add",{temp:temp,content:feel});

     });
     //Dynamically Update UI 
  getData("http://localhost:7000/all").then(function(dat){
        console.log(dat);
        document.getElementById("date").innerHTML = "Date:"+ dat.date;
        document.getElementById('temp').innerHTML = "temp:"+dat.temp+"degrees";
       document.getElementById('content').innerHTML = "content:"+dat.content;
    }
    ).catch((err) => {
        console.log("error",err);
      });
    
    });
//async function postDate 
async function postData(url,data={}){
   const re= await fetch(url,{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            date:d,
            temp:data.temp,
            content:data.content}
            )
    });
    
}
//async function getDate to fetch the data 
async function getData(url){
    const dat= await fetch(url);
      return await dat.json();
    }
    

