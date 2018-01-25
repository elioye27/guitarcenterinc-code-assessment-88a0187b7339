//ACCORDION
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
       this.classList.toggle("active");
       var panel = this.nextElementSibling;
       if (panel.style.display === "block") {
           panel.style.display = "none";
       } else {
           panel.style.display = "block";
       }
   });
}

// TAB CONTROL
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


//new arrivals
$.getJSON("../json/new-arrivals.json", function(json) {
    console.log(json); // this will show the info it in firebug console
    $('#image').attr('src',json.newArrivals[0].image);
    $('#title').html(json.newArrivals[0].title);
    $('#description').html(json.newArrivals[0].description);
    $("#url").attr("href",json.newArrivals[0].url);
    $("#urlText").html(json.newArrivals[0].url);
    
});