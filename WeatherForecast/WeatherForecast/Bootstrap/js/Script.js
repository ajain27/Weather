WeatherView = Backbone.View.extend({

    el: $(".container"),
    initialize: function () {
        //alert("");
        this.render();
    },

    render: function () {

        var template = _.template($("#weather_template").html(), {});
        this.$el.html(template);
    }

});

VieObject = new WeatherView();




Weather = Backbone.Model.extend({  // creating the model via backbone
    initialize: function () {    // declaring the initialize function, acts as a constructor
        console.log("object is created");

        //this.on("change:name", function () { // tracking the chage made to the object                    
        //alert("Name has been changed ");

        //});
    },

    defaults: { // setting the default values.

        name: "Ankit Jain",
        age: "27"
    },

    getNameAndAge: function () {

        console.log("Name is " + this.get('name') + " and Age is " + this.get('age'));
    }


});

var weatherObj = new Weather(); // making the objec of the model
console.log(weatherObj.get('name'));
console.log(weatherObj.get('age'));
//weatherObj.getNameAndAge();// Calling the function.
//weatherObj.set({name:"Nitika"}); // Setting the new value
