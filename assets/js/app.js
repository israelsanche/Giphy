// Music Var and how to call it or play in function or onclick
// var themeSong = new Audio("./assets/Spiderman.mp3");
// themeSong.play();

$(document).ready(function () {
    // //javascript, jQuery
    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=j5IKEPJUsALR0XDKDbeEAn878hdXU45E&limit=10");
    // xhr.done(function (data) { console.log("success got data", data) ; });


    $("#cat").on("click", function () {
        var animal = "";
        animal = "cat";
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=j5IKEPJUsALR0XDKDbeEAn878hdXU45E&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#loading").text("")
            console.log(response.data.length);
            // this logs the entire response
            console.log(response);
            //   this finally logged the path to the looping giv i wanted. 1 is the index. for loop to go through all
            console.log(response.data[1].images.fixed_width.url);
        // now to set the images
        $("#image1").attr("src", response.data[0].images.fixed_width.url);
        $("#image2").attr("src", response.data[1].images.fixed_width.url);
        $("#image3").attr("src", response.data[2].images.fixed_width.url);
        $("#image4").attr("src", response.data[3].images.fixed_width.url);
        $("#image5").attr("src", response.data[4].images.fixed_width.url);
        $("#image6").attr("src", response.data[5].images.fixed_width.url);
        $("#image7").attr("src", response.data[6].images.fixed_width.url);
        $("#image8").attr("src", response.data[7].images.fixed_width.url);
        $("#image9").attr("src", response.data[8].images.fixed_width.url);
        $("#image10").attr("src", response.data[9].images.fixed_width.url);
        
        });
    }

    )
    $("#dog").on("click", function () {
        var animal = "";
        animal = "dog";
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=j5IKEPJUsALR0XDKDbeEAn878hdXU45E&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#loading").text("")
            console.log(response.data.length);
            // this logs the entire response
            console.log(response);
            //   this finally logged the path to the looping giv i wanted. 1 is the index. for loop to go through all
            console.log(response.data[1].images.fixed_width.url);
        // now to set the images
        $("#image1").attr("src", response.data[0].images.fixed_width.url);
        $("#image2").attr("src", response.data[1].images.fixed_width.url);
        $("#image3").attr("src", response.data[2].images.fixed_width.url);
        $("#image4").attr("src", response.data[3].images.fixed_width.url);
        $("#image5").attr("src", response.data[4].images.fixed_width.url);
        $("#image6").attr("src", response.data[5].images.fixed_width.url);
        $("#image7").attr("src", response.data[6].images.fixed_width.url);
        $("#image8").attr("src", response.data[7].images.fixed_width.url);
        $("#image9").attr("src", response.data[8].images.fixed_width.url);
        $("#image10").attr("src", response.data[9].images.fixed_width.url);
        
        });
    }

    )

    $("#elephant").on("click", function () {
        var animal = "";
        animal = "elephant";
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=j5IKEPJUsALR0XDKDbeEAn878hdXU45E&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#loading").text("")
            console.log(response.data.length);
            // this logs the entire response
            console.log(response);
            //   this finally logged the path to the looping giv i wanted. 1 is the index. for loop to go through all
            console.log(response.data[1].images.fixed_width.url);
        // now to set the images
        $("#image1").attr("src", response.data[0].images.fixed_width.url);
        $("#image2").attr("src", response.data[1].images.fixed_width.url);
        $("#image3").attr("src", response.data[2].images.fixed_width.url);
        $("#image4").attr("src", response.data[3].images.fixed_width.url);
        $("#image5").attr("src", response.data[4].images.fixed_width.url);
        $("#image6").attr("src", response.data[5].images.fixed_width.url);
        $("#image7").attr("src", response.data[6].images.fixed_width.url);
        $("#image8").attr("src", response.data[7].images.fixed_width.url);
        $("#image9").attr("src", response.data[8].images.fixed_width.url);
        $("#image10").attr("src", response.data[9].images.fixed_width.url);
        
        });
    }

    )
    $("#mouse").on("click", function () {
        var animal = "";
        animal = "mouse";
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=j5IKEPJUsALR0XDKDbeEAn878hdXU45E&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#loading").text("")
            console.log(response.data.length);
            // this logs the entire response
            console.log(response);
            //   this finally logged the path to the looping giv i wanted. 1 is the index. for loop to go through all
            console.log(response.data[1].images.fixed_width.url);
        // now to set the images
        $("#image1").attr("src", response.data[0].images.fixed_width.url);
        $("#image2").attr("src", response.data[1].images.fixed_width.url);
        $("#image3").attr("src", response.data[2].images.fixed_width.url);
        $("#image4").attr("src", response.data[3].images.fixed_width.url);
        $("#image5").attr("src", response.data[4].images.fixed_width.url);
        $("#image6").attr("src", response.data[5].images.fixed_width.url);
        $("#image7").attr("src", response.data[6].images.fixed_width.url);
        $("#image8").attr("src", response.data[7].images.fixed_width.url);
        $("#image9").attr("src", response.data[8].images.fixed_width.url);
        $("#image10").attr("src", response.data[9].images.fixed_width.url);
        
        });
    }

    )
    $("#donkey").on("click", function () {
        var animal = "";
        animal = "donkey";
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=j5IKEPJUsALR0XDKDbeEAn878hdXU45E&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#loading").text("")
            console.log(response.data.length);
            // this logs the entire response
            console.log(response);
            //   this finally logged the path to the looping giv i wanted. 1 is the index. for loop to go through all
            console.log(response.data[1].images.fixed_width.url);
        // now to set the images
        $("#image1").attr("src", response.data[0].images.fixed_width.url);
        $("#image2").attr("src", response.data[1].images.fixed_width.url);
        $("#image3").attr("src", response.data[2].images.fixed_width.url);
        $("#image4").attr("src", response.data[3].images.fixed_width.url);
        $("#image5").attr("src", response.data[4].images.fixed_width.url);
        $("#image6").attr("src", response.data[5].images.fixed_width.url);
        $("#image7").attr("src", response.data[6].images.fixed_width.url);
        $("#image8").attr("src", response.data[7].images.fixed_width.url);
        $("#image9").attr("src", response.data[8].images.fixed_width.url);
        $("#image10").attr("src", response.data[9].images.fixed_width.url);
        
        });
    }

    )
    $("#shrek").on("click", function () {
        var animal = "";
        animal = "shrek";
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=j5IKEPJUsALR0XDKDbeEAn878hdXU45E&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#loading").text("")
            console.log(response.data.length);
            // this logs the entire response
            console.log(response);
            //   this finally logged the path to the looping giv i wanted. 1 is the index. for loop to go through all
            console.log(response.data[1].images.fixed_width.url);
        // now to set the images
        $("#image1").attr("src", response.data[0].images.fixed_width.url);
        $("#image2").attr("src", response.data[1].images.fixed_width.url);
        $("#image3").attr("src", response.data[2].images.fixed_width.url);
        $("#image4").attr("src", response.data[3].images.fixed_width.url);
        $("#image5").attr("src", response.data[4].images.fixed_width.url);
        $("#image6").attr("src", response.data[5].images.fixed_width.url);
        $("#image7").attr("src", response.data[6].images.fixed_width.url);
        $("#image8").attr("src", response.data[7].images.fixed_width.url);
        $("#image9").attr("src", response.data[8].images.fixed_width.url);
        $("#image10").attr("src", response.data[9].images.fixed_width.url);
        
        });
    }

    )

// var imageurl=response.data[1].iamges.looping.mp4;
// console.log(imageurl);



    // function get_articles() {



    //     $.ajax({
    //         url: "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=j5IKEPJUsALR0XDKDbeEAn878hdXU45E&limit=10",
    //         method: "GET"
    //     }).then(function (searchTerm) {
    //         console.log(searchTerm.response.docs);
    //         var article_array;
    //         article_array = searchTerm.response.docs;
    //         console.log(article_array);
    //     })
    // }



    // $("#search_button").on("click", function () {


    //     var searchTerm = $("#formGroupInput1").val();
    //     var how_many = $("#formGroupSelect").val();
    //     var start_year = $("#formGroupInput2").val();
    //     var end_year = $("#formGroupInput3").val();
    //     $("#result_card").empty();
    //     get_articles(searchTerm, how_many, start_year, end_year);

    // })



    // get_articles();
});