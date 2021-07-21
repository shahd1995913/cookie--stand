'use strict'

//Global array for working houres 
//`const` means that the identifier can’t be reassigned. 

const workinghoures =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// Global Fun random number between 2 values
function random(minvalue,maxvalu)
{
return Math.floor(Math.random()*(maxvalu-minvalue+1)+minvalue);

}

//Global array
let  shopArray=[];


//Constractur Fun
function shop(locName,Mincustomer,Maxcastomar,AvgCookes)
{

this.locName=locName;
this.Maxcastomar=Maxcastomar;
this.Mincustomer=Mincustomer;
this.AvgCookes=AvgCookes;


this.customereachHoures=[];
shopArray.push(this);

this.cookiesEachhoures=[];
this.cookesTotalPerDay=0;

}

 
shop.prototype.calccustomereachHoures =function()
{
for(let i=0;i<workinghoures.length;i++)
{

this.customereachHoures.push(random(this.Mincustomer,this.Maxcastomar));


}}


shop.prototype.calcCookieEachHoures= function()
{ for(let u=0;u<workinghoures.length;u++)
{

this.cookiesEachhoures.push(Math.floor(this.AvgCookes*this.customereachHoures[u]));
this.cookesTotalPerDay += this.cookiesEachhoures[u];
//there is issues
}



}


let  seattle = new shop('seattle',23,65,6.3);
let  tokyo = new shop('Tokyo',3,24,1.2);
let  dubi = new shop('Dubai',11,38,3.7);
let  Paries = new shop('Paries',20,38,2.3);
let Lima =new shop('Lima',2,16,4.6);

console.log(shopArray);





// get element from HTML pages
let parent1 =document.getElementById('result');
console.log(parent1);


// create a table

let tableElement =document.createElement('table');
parent1.appendChild(tableElement);

//render function
function makeheader(){

//create tr
let headerRow =document.createElement('tr');
tableElement.appendChild(headerRow);

//creat th
let firstTH=document.createElement('th');
headerRow.appendChild(firstTH);
firstTH.textContent='Name';
//hours

for (let p=0;p<workinghoures.length;p++)
{

//loop throth the hours array
let thElemebt =document.createElement('th');
headerRow.appendChild(thElemebt);
thElemebt.textContent=workinghoures[p];

}


//create th
let lastth= document.createElement('th');
headerRow.appendChild(lastth);
lastth.textContent='Daily Location total';





}
makeheader();
//prototype fun for render
shop.prototype.render =function()
{
//create tr
let dataRow =document.createElement('tr');
tableElement.appendChild(dataRow);
let nameData =document.createElement('td');
dataRow.appendChild(nameData);
nameData.textContent =this.locName;

// cookies data

for(let i=0;i<workinghoures.length;i++)
{

let tdElement =document.createElement('td');
dataRow.appendChild(tdElement);
tdElement.textContent=this.cookiesEachhoures[i];


}


//Total Daily Location

let totalDailyforeachshop =document.createElement('td');
dataRow.appendChild(totalDailyforeachshop);
totalDailyforeachshop.textContent=this.cookesTotalPerDay;
}




// for loop to call the functions

for (let o =0;o<shopArray.length;o++)
{
shopArray[o].calccustomereachHoures();
shopArray[o].calcCookieEachHoures();
shopArray[o].render();
}

let footerRow = document.createElement('tr');
//global fun to create a footer
function makeafooter()
{


tableElement.appendChild(footerRow);

let footerth =document.createElement('th');
footerRow.appendChild(footerth);
footerth.textContent='Totals';

//Total in footers
//nested for loop

let total1=0;
for(let k=0;k<workinghoures.length;k++)
{ let totalEachHoures=0;
for(let y =0; y<shopArray.length;y++){
totalEachHoures +=shopArray[y].cookiesEachhoures[k];
total1+=shopArray[y].cookiesEachhoures[k];
}
console.log(totalEachHoures);

let footertd=document.createElement('td');
footerRow.appendChild(footertd);
footertd.textContent=totalEachHoures;

}
let final=document.createElement('td');
footerRow.appendChild(final);
final.textContent=total1;
}
makeafooter();






const formone =document.getElementById('form1');
formone.addEventListener('submit',handleSubmit);

function handleSubmit(event){
    event.preventDefault()
    // take the data from HTML code
    
let NameOfLocation = event.target.namefield.value;
let maxvalue = event.target.Maxfield.value;
let miniamvalue = event.target.minfield.value;
let avragevalue = event.target.AVGfield.value;

    //shop objeect from constractore
// let  loc = new shop(NameOfLocation);
// let  min = new shop(maxvalue);
// let  max = new shop(miniamvalue);
// let  avg = new shop(avragevalue);

footerRow.textContent='';

let place =new shop(NameOfLocation,miniamvalue,maxvalue,miniamvalue)
place.calccustomereachHoures();
place.calcCookieEachHoures();
place.render();
makeafooter();



}

handleSubmit();