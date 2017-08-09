'use strict';

var airport = {
    location: "PDX Airport",
    minCust: 23,
    maxCust: 65,
    aveCookSale: 6.3,
    cookPerHour: [],
    totalCookies: 0,
    storeHours: ['6am : ','7am : ','8am : ','9am : ','10am : ','11am : ','12pm : ','1pm : ','2pm : ','3pm : ','4pm : ','5pm : ','6pm : ','7pm : ','8pm : ', 'Total : '],
    
    randomNumber: function() {
      for(var i =0; i < 15; i++){
        var numberPeople = Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
        var numberCookies = Math.floor(this.aveCookSale * numberPeople);
        this.cookPerHour.push(numberCookies);
      }  
    },

    getTotal: function(){
        for(var i =0; i < 15; i++){
            this.totalCookies += this.cookPerHour[i];
        }
    },

    run: function(){
        this.randomNumber();
        console.log( this.cookPerHour);
        this.getTotal(); 
        console.log(this.totalCookies);   
    }, 
    
    addToDom: function(){
        // this.getTotal();
        this.randomNumber();
        var element = document.getElementById('airport');
        for( var i=0; i < 15; i++){
            var list = document.createElement('li');
            list.innerHTML = this.storeHours[i] + this.cookPerHour[i];
            element.appendChild(list); 
        }
        this.getTotal();
        var list = document.createElement('li');
        list.innerHTML = this.storeHours[15] + this.totalCookies;
        element.appendChild(list);
    }
}
airport.addToDom();


var pioneer = {
    location: "Pioneer Square",
    minCust: 3,
    maxCust: 24,
    aveCookSale: 1.2,
    cookPerHour: [],
    totalCookies: 0,
    storeHours: ['6am : ','7am : ','8am : ','9am : ','10am : ','11am : ','12pm : ','1pm : ','2pm : ','3pm : ','4pm : ','5pm : ','6pm : ','7pm : ','8pm : ', 'Total : '],
    
    randomNumber: function() {
      for(var i =0; i < 15; i++){
        var numberPeople = Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
        var numberCookies = Math.floor(this.aveCookSale * numberPeople);
        this.cookPerHour.push(numberCookies);
      }  
    },

    getTotal: function(){
        for(var i =0; i < 15; i++){
            this.totalCookies += this.cookPerHour[i];
        }
    },

    run: function(){
        this.randomNumber();
        console.log( this.cookPerHour);
        this.getTotal(); 
        console.log(this.totalCookies);   
    }, 
    
    addToDom: function(){
        //this.getTotal();
        this.randomNumber();
        var element = document.getElementById('pioneer');
        for( var i=0; i < 15; i++){
            var list = document.createElement('li');
            list.innerHTML = this.storeHours[i] + this.cookPerHour[i];
            element.appendChild( list); 
        }
        
        this.getTotal();
        var list = document.createElement('li');
        list.innerHTML = this.storeHours[15] + this.totalCookies;
        element.appendChild(list);
    }
}
pioneer.addToDom();

var powells = {
    location: "Powell's",
    minCust: 11,
    maxCust: 38,
    aveCookSale: 3.7,
    cookPerHour: [],
    totalCookies: 0,
    storeHours: ['6am : ','7am : ','8am : ','9am : ','10am : ','11am : ','12pm : ','1pm : ','2pm : ','3pm : ','4pm : ','5pm : ','6pm : ','7pm : ','8pm : ', 'Total : '],
    
    randomNumber: function() {
      for(var i =0; i < 15; i++){
        var numberPeople = Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
        var numberCookies = Math.floor(this.aveCookSale * numberPeople);
        this.cookPerHour.push(numberCookies);
      }  
    },

    getTotal: function(){
        for(var i =0; i < 15; i++){
            this.totalCookies += this.cookPerHour[i];
        }
    },

    run: function(){
        this.randomNumber();
        console.log( this.cookPerHour);
        this.getTotal(); 
        console.log(this.totalCookies);   
    }, 
    
    addToDom: function(){
        //this.getTotal();
        this.randomNumber();
        var element = document.getElementById('powells');
        for( var i=0; i < 15; i++){
            var list = document.createElement('li');
            list.innerHTML = this.storeHours[i] + this.cookPerHour[i];
            element.appendChild( list); 
        }
        
        this.getTotal();
        var list = document.createElement('li');
        list.innerHTML = this.storeHours[15] + this.totalCookies;
        element.appendChild(list);        
    }
}
powells.addToDom();


var stjohns = {
    location: "St. John's",
    minCust: 20,
    maxCust: 38,
    aveCookSale: 2.3,
    cookPerHour: [],
    totalCookies: 0,
    storeHours: ['6am : ','7am : ','8am : ','9am : ','10am : ','11am : ','12pm : ','1pm : ','2pm : ','3pm : ','4pm : ','5pm : ','6pm : ','7pm : ','8pm : ', 'Total : '],
    
    randomNumber: function() {
      for(var i =0; i < 15; i++){
        var numberPeople = Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
        var numberCookies = Math.floor(this.aveCookSale * numberPeople);
        this.cookPerHour.push(numberCookies);
      }  
    },

    getTotal: function(){
        for(var i =0; i < 15; i++){
            this.totalCookies += this.cookPerHour[i];
        }
    },

    run: function(){
        this.randomNumber();
        console.log( this.cookPerHour);
        this.getTotal(); 
        console.log(this.totalCookies);   
    }, 
    
    addToDom: function(){
        //this.getTotal();
        this.randomNumber();
        var element = document.getElementById('stjohns');
        for( var i=0; i < 15; i++){
            var list = document.createElement('li');
            list.innerHTML = this.storeHours[i] + this.cookPerHour[i];
            element.appendChild( list); 
        }
        
        this.getTotal();
        var list = document.createElement('li');
        list.innerHTML = this.storeHours[15] + this.totalCookies;
        element.appendChild(list);        
    }
}
stjohns.addToDom();


var waterfront = {
    location: "Waterfront",
    minCust: 2,
    maxCust: 16,
    aveCookSale: 4.6,
    cookPerHour: [],
    totalCookies: 0,
    storeHours: ['6am : ','7am : ','8am : ','9am : ','10am : ','11am : ','12pm : ','1pm : ','2pm : ','3pm : ','4pm : ','5pm : ','6pm : ','7pm : ','8pm : ', 'Total : '],
    
    randomNumber: function() {
      for(var i =0; i < 15; i++){
        var numberPeople = Math.floor (Math.random() * (this.maxCust - this.minCust) + this.minCust);
        var numberCookies = Math.floor(this.aveCookSale * numberPeople);
        this.cookPerHour.push(numberCookies);
      }  
    },

    getTotal: function(){
        for(var i =0; i < 15; i++){
            this.totalCookies += this.cookPerHour[i];
        }
    },

    run: function(){
        this.randomNumber();
        console.log( this.cookPerHour);
        this.getTotal(); 
        console.log(this.totalCookies);   
    }, 
    
    addToDom: function(){
        //this.getTotal();
        this.randomNumber();
        var element = document.getElementById('waterfront');
        for( var i=0; i < 15; i++){
            var list = document.createElement('li');
            list.innerHTML = this.storeHours[i] + this.cookPerHour[i];
            element.appendChild( list); 
        }
        
        this.getTotal();
        var list = document.createElement('li');
        list.innerHTML = this.storeHours[15] + this.totalCookies;
        element.appendChild(list);        
    }
}
waterfront.addToDom();




