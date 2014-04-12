//**********View Created***************
WeatherView = Backbone.View.extend({

    el: $(".container"),
    initialize: function () { // This function runs as soon as the application runs
        this.render();
    },

    render: function () {

        var template = _.template($("#weather_template").html(), {});
        this.$el.html(template);
    }

});
ViewObject = new WeatherView();

//***************Router Created ****************************

//var Router = Backbone.Router.extend({
//    routes: {

//        '': 'home'
//    }
//});

//var route = new Router();
//route.on('route:home', function () {

//    ViewObject.render();
//    console.log("Home Template Loaded !!!");

//});

//Backbone.history.start();


//Weather = Backbone.Model.extend({  // creating the model via backbone
//    initialize: function () {    // declaring the initialize function, acts as a constructor
//        console.log("object is created");

//        //this.on("change:name", function () { // tracking the chage made to the object                    
//        //alert("Name has been changed ");

//        //});
//    },

//    defaults: { // setting the default values.

//        name: "Ankit Jain",
//        age: "27"
//    },

//    getNameAndAge: function () {

//        console.log("Name is " + this.get('name') + " and Age is " + this.get('age'));
//    }


//});

//var weatherObj = new Weather(); // making the objec of the model
//console.log(weatherObj.get('name'));
//console.log(weatherObj.get('age'));
//weatherObj.getNameAndAge();// Calling the function.
//weatherObj.set({name:"Nitika"}); // Setting the new value

