'use strict';

var storeHours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm', 'Total'];

function Store( location, minCust, maxCust, aveCookSale, id ){
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.id = id;    
    this.aveCookSale=aveCookSale;
    this.cookPerHour=[];
    this.totalCookies=0;
}

Store.prototype.randomNumber = function() {
    for(var i =0; i < 15; i++){
        var numberPeople = Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
        var numberCookies = Math.floor(this.aveCookSale * numberPeople);
        this.cookPerHour.push(numberCookies);
      }  
};

Store.prototype.getTotal = function(){
        for(var i =0; i < 15; i++){
            this.totalCookies += this.cookPerHour[i];
        }
}; 

Store.prototype.addToThead = function(){
    var table = document.getElementsByTagName('thead')[0];
    var tablerow = document.createElement('tr');
    
    var hoursCell = document.createElement('th');
    hoursCell.innerHTML = 'Time';
    tablerow.appendChild(hoursCell);   
    
    for( var i=0; i <= 15; i++){
        var hoursCell = document.createElement('th');
        hoursCell.innerHTML = storeHours[i];
        tablerow.appendChild(hoursCell); 
    }
    table.appendChild(tablerow);

};

Store.prototype.addToTbody = function(){
 
    var table = document.getElementsByTagName('tbody')[0];
    var tablerow = document.createElement('tr');
    this.randomNumber();
    
    var cookiesCell = document.createElement('th');
    cookiesCell.innerHTML = this.location;
    tablerow.appendChild(cookiesCell);

    for( var i=0; i <= 14; i++){
        var cookiesCell = document.createElement('td');
        cookiesCell.innerHTML = this.cookPerHour[i];
        tablerow.appendChild(cookiesCell); 
    }
    this.getTotal();
    var cookiesCell = document.createElement('td');
    cookiesCell.innerHTML = this.totalCookies;
    tablerow.appendChild(cookiesCell);

    table.appendChild(tablerow);
};
       
var airport = new Store ( 'PDX Airport', 23, 65, 6.3, 'airport' );
var powells = new Store ( 'Powell\'s', 11, 38, 3.7, 'powells' );
var pioneer = new Store ( 'Pioneer Square', 3, 24, 1.2, 'pioneer' );
var stjohns = new Store ('St. John\'s', 20, 38, 2.3, 'stjohns');
var waterfront = new Store ( 'Waterfront', 2, 12, 4.6, 'waterfront' );


airport.addToThead();
airport.addToTbody();
powells.addToTbody();
pioneer.addToTbody();
stjohns.addToTbody();
waterfront.addToTbody();









