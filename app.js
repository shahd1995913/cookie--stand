//  'use strict';




// function shop(shopName, min, max, avg) {
//     this.min = min;
//     this.max = max;
//     this.avgCookiePerCustomer = avg;
//     this.shopName = shopName;
//     this.total = 0;
//    // this.list = this.generateList();

//    this.workhour = [
//     '6am',
//     '7am',
//     '8am',
//     '9am',
//     '10am',
//     '11am',
//     '12pm',
//     '1pm',
//     '2pm',
//     '3pm',
//     '4pm',
//     '5pm',
//     '6pm',
//     '7pm',
// ];





// this.getRandom = function () {
//     return Math.floor((Math.random() * (this.max - this.min) + this.min) * this.avgCookiePerCustomer);
// }


// this.cookiesPerHour = [];
// this.generateList = function () {
//     let result = [];
//     for (const hour in this.workhour) {
//         var cookies = this.getRandom();
//         this.total += cookies;
//         result.push(this.workhour[hour] + ': ' + cookies + ' cookies.');
//     }
//     result.push('Total: ' + this.total + ' cookies.')
//     return result;
// }

// this.getHtml = function () {
//     this.list=generateList();
//     var root = document.createElement('div');
//     root.innerHTML = "<h2 style='padding-left:15px;'>" + + "</h2>";
//     var ul = document.createElement('ul');
//     for (let i = 0; i < this.list.length; i++) {
//         const element = document.createElement('li');
//         element.innerHTML = this.list[i];
//         ul.appendChild(element)
//     }
//     root.appendChild(ul);
//     return root;
// }

// this.getTableRow = function () {
//     var html = "<tr><td class='tableElement'>" + this.shopName + "</td>";
//     for (const hour in this.workhour) {
//         var cookies = this.getRandom();
//         this.cookiesPerHour.push(cookies);
//         this.total += cookies;
//         html += "\n<td class='tableElement'>" + cookies + "</td>";
//     }
//     html += "\n<td class='tableElement'>" + this.total + "</td>";
//     html += "\n</tr>";

//     this.cookiesPerHour.push(this.total);
//     return html;
// }
// }

// var seattle = new shop('Seattle', 23, 65, 6.5);
// var Tokyo = new shop('Tokyo', 23, 65, 6.5);
// var Dubai = new shop('Dubai', 23, 65, 6.5);
// var Paris = new shop('Paris', 23, 65, 6.5);
// var Lima = new shop('Lima', 23, 65, 6.5);

// //   document.body.appendChild(seattle.getHtml());
// //   document.body.appendChild(Tokyo.getHtml());
// //   document.body.appendChild(Dubai.getHtml());
// //   document.body.appendChild(Paris.getHtml());
// //   document.body.appendChild(Lima.getHtml());

// var table = document.createElement('table');
// var header = [
//     '6:00am',
//     '7:00am',
//     '8:00am',
//     '9:00am',
//     '10:00am',
//     '11:00am',
//     '12:00pm',
//     '1:00pm',
//     '2:00pm',
//     '3:00pm',
//     '4:00pm',
//     '5:00pm',
//     '6:00pm',
//     '7:00pm',
// ];

// var tableContent = "<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>";
// header.forEach(element => {
//     tableContent += "\n<td><b>" + element + "</b></td>"
// });
// tableContent += "\n<td>Daily Location Total</td></tr>";

// tableContent += seattle.getTableRow();
// tableContent += Tokyo.getTableRow();
// tableContent += Dubai.getTableRow();
// tableContent += Paris.getTableRow();
// tableContent += Lima.getTableRow();

// var footer = "<tr><td class='tableElement'> Totals </td>";
// var totalCookiesPerHour = [];
// for (let i = 0; i < 15; i++) {
//     var totalPerHour = seattle.cookiesPerHour[i]
//         + Tokyo.cookiesPerHour[i]
//         + Dubai.cookiesPerHour[i]
//         + Paris.cookiesPerHour[i]
//         + Lima.cookiesPerHour[i];

//     console.log("[" + i + "]" + seattle.cookiesPerHour[i]);
//     console.log("[" + i + "]" + Tokyo.cookiesPerHour[i]);
//     console.log("[" + i + "]" + Dubai.cookiesPerHour[i]);
//     console.log("[" + i + "]" + Paris.cookiesPerHour[i]);
//     console.log("[" + i + "]" + Lima.cookiesPerHour[i]);
//     console.log(totalPerHour)
//     totalCookiesPerHour.push(totalPerHour);
// }

// totalCookiesPerHour.forEach(cookies => {
//     footer += "\n<td class='tableElement'>" + cookies + "</td>";
// });
// footer += "\n</tr>";

// tableContent += footer;

// table.innerHTML = tableContent;

// document.body.appendChild(table);






























// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// //create a constractor
// function constractorfun(id ,min,max,avg,cookitotal){
//     this.id=id;
//     this.min=min;
//     this.max=max;
//     this.avg=avg;
//     this.cookitotal=cookitotal;
//     this.hourlysales=[];
//   //method

//     this.hourlyCustomer = function () {
//         return Math.floor(Math.random() * (this.max - this.min)) + this.min;

// }
// }
// //create object
// let obj1=new constractorfun('Seattle',23,65,6.3,0);
// obj1.hourlyCustomer();
// console.log(obj1)

// //create object
// let obj2=new constractorfun('Tokyo',3,24,1.2,0);
// obj2.hourlyCustomer();
// console.log(obj2);

// //create object
// let obj3=new constractorfun('Dubai',11,38,3.7);
// obj3.hourlyCustomer();
// console.log(obj3);

// //create object
// let obj4=new constractorfun('Paris',20,38,2.3);
// obj4.hourlyCustomer();
// console.log(obj4);


// //create object
// let obj5=new constractorfun('Lima',2,16,4.6);
// obj5.hourlyCustomer();
// console.log(obj5);

// // let Seattle	= {
// //     min : 23 ,
// //     max : 65 , 
// //     avg : 6.3 , 
// //     customerperhour:[] ,
// //     cookiesnumber: [] ,
// //     hours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '] ,


// //     customers: function() {
// //        for (let i=0 ; i<14 ; i++) {           
// //         let customernumber = randomcustomers(this.min, this.max) ;
// //         this.customerperhour.push(customernumber)  ;
        
// //     }
// //     }, 

// //      avgcookie: function(){
// //         for (let v=0 ; v<14 ; v++){
// //           this.cookiesnumber.push(this.customerperhour[v] * this.avg)         
// //     }
// //     }
    

// // }
// // Seattle.customers();
// // Seattle.avgcookie();
// // console.log(Seattle);

// //Create a random function
// //  function randomcustomers(min, max) {
// //      return Math.floor(Math.random() * (max - min + 1) + min);
// //  }

// //prototype
// constractorfun.prototype.avgcookie =function(){
// for (let v=0 ; v<hours.length ; v++){
//         let a=Math.ceil(this.hourlyCustomer()*this.avg); 

//     this.hourlysales.push(a);   
//     this.cookitotal+-a;
// }
// }
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);
// console.log(obj5);



// //prototype
// constractorfun.prototype.customers =function(){
//     for (let i=0 ; i<14 ; i++) {           
//          let customernumber = this.hourlyCustomer(this.min, this.max) ;
//          this.hourlyCustomer.push(customernumber) ;
//     }}

//    // obj1.avgcookie();
//    // obj1.customers();
    

// //render get html element
// constractorfun.prototype.render =function(){
//     const parentElement =document.getElementById('a')

// //create a table

// let table1=document.createElement('table');
// parentElement.appendChild(table1);

// let tableBody = document.createElement('TBODY');
//     table1.appendChild(tableBody);

// let headerRow =document.createElement('tr');

// table1.appendChild(headerRow);

// let th1=document.createElement('th');
// headerRow.appendChild(th1);
// th1.textContent="Seattle";

// let th2=document.createElement('th');
// headerRow.appendChild(th2);
// th2.textContent="Tokyo";

// let th3=document.createElement('th');
// headerRow.appendChild(th3);
// th3.textContent="Dubai";

// let th4=document.createElement('th');
// headerRow.appendChild(th4);
// th4.textContent="Lima";

// let th5=document.createElement('th');
// headerRow.appendChild(th5);
// th5.textContent="Paris";
// }
// obj1.render();

// constractorfun.prototype.addTable = function () 
// {
//     var myTableDiv = document.getElementById("a");
  
//     let table = document.createElement('TABLE');
//     table.border = '2';
  
//     var tableBody = document.createElement('TBODY');
//     table.appendChild(tableBody);
  
//     for (var i = 0; i < 7; i++) {
//       var tr = document.createElement('TR');
//       tableBody.appendChild(tr);
  
//       for (var j = 0; j < hours.length ; j++) {
//         var td = document.createElement('TD');
//         td.width = '100';
//         td.appendChild(document.createTextNode("Cell " + i + "," + j));
//         tr.appendChild(td);
//       }
//     }
//     myTableDiv.appendChild(table);
//   }
//   //addTable();





// let parent = document.getElementById('a');
// console.log(parent);
// let unOrderedList = document.createElement('ul');
// parent.appendChild(unOrderedList);

// for (let x = 0; x < 14; x++) {
//     let listItem = document.createElement('li');
//     unOrderedList.appendChild(listItem);
//     listItem.textContent = Seattle.hours[x] + Math.floor(Seattle.cookiesnumber[x]) + ' cookies ' ;

// }

// let total = 0
//  for (let y=0 ; y<14 ; y++) {
     
//          total= total + Seattle.cookiesnumber[y]
//         }
//         console.log(total);
//         let totalcookies = document.createElement('li');
//         unOrderedList.appendChild(totalcookies);
//         totalcookies.textContent= 'Total: ' + Math.floor(total) + ' cookies'







// let Tokyo	= {
//     tmin : 3 ,
//     tmax : 24 , 
//     tavg : 1.2 , 
//     tcustomerperhour:[] ,
//     tcookiesnumber: [] ,
//     thours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '] ,



//     customers: function() {
//        for (let i=0 ; i<14 ; i++) {           
//         let tcustomernumber = randomcustomers(this.tmin, this.tmax) ;
//         this.tcustomerperhour.push(tcustomernumber)  ;
//     }
//     }
//     , 
//      avgcookie: function(){
//         for (let v=0 ; v<14 ; v++){
//           this.tcookiesnumber.push(this.tcustomerperhour[v] * this.tavg)         
//     }
//     }
    

// }
// Tokyo.customers();
// Tokyo.avgcookie();
// console.log(Tokyo);

// function randomcustomers(tmin, tmax) {
//     return Math.floor(Math.random() * (tmax - tmin + 1) + tmin);
// }


//     let tparent = document.getElementById('t');
// console.log(tparent);

// let tunOrderedList = document.createElement('ul');
// tparent.appendChild(tunOrderedList);

// for (let x = 0; x < 14; x++) {
//     let tlistItem = document.createElement('li');
//     tunOrderedList.appendChild(tlistItem);
//     tlistItem.textContent = Tokyo.thours[x] + Math.floor(Tokyo.tcookiesnumber[x]) + ' cookies ' ;

// }

// let ttotal = 0
//  for (let y=0 ; y<14 ; y++) {
     
//          ttotal= ttotal + Tokyo.tcookiesnumber[y]
//         }
//         console.log(ttotal);
//         let ttotalcookies = document.createElement('li');
//         tunOrderedList.appendChild(ttotalcookies);
//         ttotalcookies.textContent= 'Total: ' + Math.floor(ttotal) + ' cookies'






//         let Dubai	= {
//             dmin : 11 ,
//             dmax : 38 , 
//             davg : 3.7 , 
//             dcustomerperhour:[] ,
//             dcookiesnumber: [] ,
//             dhours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '] ,
        
        
        
//             customers: function() {
//                for (let i=0 ; i<14 ; i++) {           
//                 let dcustomernumber = randomcustomers(this.dmin, this.dmax) ;
//                 this.dcustomerperhour.push(dcustomernumber)  ;
//             }
//             }
//             , 
//              avgcookie: function(){
//                 for (let v=0 ; v<14 ; v++){
//                   this.dcookiesnumber.push(this.dcustomerperhour[v] * this.davg)         
//             }
//             }
            
        
//         }
//         Dubai.customers();
//         Dubai.avgcookie();
//         console.log(Dubai);
        
//         function randomcustomers(dmin, dmax) {
//             return Math.floor(Math.random() * (dmax - dmin + 1) + dmin);
//         }
        
        
//         let dparent = document.getElementById('d');
//         console.log(dparent);
        
//         let dunOrderedList = document.createElement('ul');
//         dparent.appendChild(dunOrderedList);
        
//         for (let x = 0; x < 14; x++) {
//             let dlistItem = document.createElement('li');
//             dunOrderedList.appendChild(dlistItem);
//             dlistItem.textContent = Dubai.dhours[x] + Math.floor(Dubai.dcookiesnumber[x]) + ' cookies ' ;
        
//         }
        
//         let dtotal = 0
//          for (let y=0 ; y<14 ; y++) {
             
//                  dtotal= dtotal + Dubai.dcookiesnumber[y]
//                 }
//                 console.log(dtotal);
//                 let dtotalcookies = document.createElement('li');
//                 dunOrderedList.appendChild(dtotalcookies);
//                 dtotalcookies.textContent= 'Total: ' + Math.floor(dtotal) + ' cookies'






// let Paris	= {
//     pmin : 20 ,
//     pmax : 38 , 
//     pavg : 2.3 , 
//     pcustomerperhour:[] ,
//     pcookiesnumber: [] ,
//     phours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '] ,



//     customers: function() {
//        for (let i=0 ; i<14 ; i++) {           
//         let pcustomernumber = randomcustomers(this.pmin, this.pmax) ;
//         this.pcustomerperhour.push(pcustomernumber)  ;
//     }
//     }
//     , 
//      avgcookie: function(){
//         for (let v=0 ; v<14 ; v++){
//           this.pcookiesnumber.push(this.pcustomerperhour[v] * this.pavg)         
//     }
//     }
    

// }
// Paris.customers();
// Paris.avgcookie();
// console.log(Paris);

// function randomcustomers(pmin, pmax) {
//     return Math.floor(Math.random() * (pmax - pmin + 1) + pmin);
// }


// let pparent = document.getElementById('p');
// console.log(pparent);

// let punOrderedList = document.createElement('ul');
// pparent.appendChild(punOrderedList);

// for (let x = 0; x < 14; x++) {
//     let plistItem = document.createElement('li');
//     punOrderedList.appendChild(plistItem);
//     plistItem.textContent = Paris.phours[x] + Math.floor(Paris.pcookiesnumber[x]) + ' cookies ' ;

// }

// let ptotal = 0
//  for (let y=0 ; y<14 ; y++) {
     
//          ptotal= ptotal + Paris.pcookiesnumber[y]
//         }
//         console.log(ptotal);
//         let ptotalcookies = document.createElement('li');
//         punOrderedList.appendChild(ptotalcookies);
//         ptotalcookies.textContent= 'Total: ' + Math.floor(ptotal) + ' cookies'





// let Lima	= {
//     lmin : 2 ,
//     lmax : 16 , 
//     lavg : 4.6 , 
//     lcustomerperhour:[] ,
//     lcookiesnumber: [] ,
//     lhours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '] ,



//     customers: function() {
//        for (let i=0 ; i<14 ; i++) {           
//         let lcustomernumber = randomcustomers(this.lmin, this.lmax) ;
//         this.lcustomerperhour.push(lcustomernumber)  ;
//     }
//     }
//     , 
//      avgcookie: function(){
//         for (let v=0 ; v<14 ; v++){
//           this.lcookiesnumber.push(this.lcustomerperhour[v] * this.lavg)         
//     }
//     }
    

// }
// Lima.customers();
// Lima.avgcookie();
// console.log(Lima);

// function randomcustomers(lmin, lmax) {
//     return Math.floor(Math.random() * (lmax - lmin + 1) + lmin);
// }


// let lparent = document.getElementById('l');
// console.log(lparent);

// let lunOrderedList = document.createElement('ul');
// lparent.appendChild(lunOrderedList);

// for (let x = 0; x < 14; x++) {
//     let llistItem = document.createElement('li');
//     lunOrderedList.appendChild(llistItem);
//     llistItem.textContent = Lima.lhours[x] + Math.floor(Lima.lcookiesnumber[x]) + ' cookies ' ;

// }

// let ltotal = 0
//  for (let y=0 ; y<14 ; y++) {
     
//          ltotal= ltotal + Lima.lcookiesnumber[y]
//         }
//         console.log(ltotal);
//         let ltotalcookies = document.createElement('li');
//         lunOrderedList.appendChild(ltotalcookies);
//         ltotalcookies.textContent= 'Total: ' + Math.floor(ltotal) + ' cookies'






















// // let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// // // var allStores = [];
// // // var referencelist = document.getElementById('salamon');
// // // var Total = 0;
// // // var hourlyTotal = [];

// // //Object for Seattle
// // let Seattle =
// // {
// //   Min:23,
// //   Max:65,
// //   AvgCookie:6.3,
// //   hourlySales:[],
// //   dailySales:0,
 
// //   hourly : function (min, max) {
// //     return Math.floor(Math.random() * (max - min)) + min;
// //   },

// //   HourlyTotals: function() {
// //     for ( var i = 0; i < hours.length; i++) {
// //       this.Total.push(Math.ceil(this.hourly( Seattle.Min,Seattle.Max) * AvgCookie));
// //     }

// //   },

  
// //    getRandomInt: function(min, max) {
// //     min = Math.ceil(min);
// //     max = Math.floor(max);
// //     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// //   },

// //   random1 :function () {
// //     var range=Seattle.Max-Seattle.Min;
// //      var count=Math.random() * range+Seattle.Min;
// //      return Math.ceil(count);
// //   },


// //   hourlyDailySales :function () {
// //     for (var i=0;i<hours.length;i++){
// //         var  number1= Math.ceil(Seattle.random1*Seattle.AvgCookie);
// //         Seattle.hourlySales.push(number1);
// //         Seattle.dailySales += number1;
// //     }

// //     },

// // }
// // //  hourlyDailySales 
// // //console.log(Seattle.hourlyDailySales())



// // //Random Number
// // console.log(Seattle.getRandomInt(Seattle.Min,Seattle.Max));
// // // acess object Seattle
// // console.log(Seattle);

// // console.log(Seattle.HourlyTotals())

// // //Object for Tokyo
// // let Tokyo =
// // {
// //   Min:3,
// //   Max:24,
// //   AvgCookie:1.2,
// //   hourlySales:[],
// //   dailySales:0,
 
// //   getRandomIntTokyo: function(min, max) {
// //    min = Math.ceil(min);
// //    max = Math.floor(max);
// //    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// //  },


// // }


// // //Random Number
// // console.log(Tokyo.getRandomIntTokyo(Tokyo.Min,Tokyo.Max));
// // // acess object Tokyo
// // console.log(Tokyo);

// // //Object for Dubai
// // let Dubai =
// // {
// //   Min:11,
// //   Max:38,
// //   AvgCookie:3.7,
// //   hourlySales:[],
// //   dailySales:0,
 
// //   getRandomIntDubai: function(min, max) {
// //    min = Math.ceil(min);
// //    max = Math.floor(max);
// //    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// //  },


// // }


// // //Random Number
// // console.log(Dubai.getRandomIntDubai(Dubai.Min,Dubai.Max));
// // // acess object Dubai
// // console.log(Dubai);

// // //Object for Paris
// // let Paris =
// // {
// //   Min:20,
// //   Max:38,
// //   AvgCookie:2.3,
// //   hourlySales:[],
// //   dailySales:0,
 
// //   getRandomIntParis: function(min, max) {
// //    min = Math.ceil(min);
// //    max = Math.floor(max);
// //    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// //  },


// // }

// // //Random Number
// // console.log(Paris.getRandomIntParis(Paris.Min,Paris.Max));
// // // acess object Paris
// // console.log(Paris);

// // //Object for Lima
// // let Lima =
// // {
// //   Min:2,
// //   Max:16,
// //   AvgCookie:4.6,
// //   hourlySales:[],
// //   dailySales:0,
 
// //   getRandomIntLima: function(min, max) {
// //    min = Math.ceil(min);
// //    max = Math.floor(max);
// //    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// //  },


// // }

// // //Random Number 
// // console.log(Lima.getRandomIntLima(Lima.Min,Lima.Max));
// // // acess object Lima
// // console.log(Lima);
