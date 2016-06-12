// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require gsdk
//= require turbolinks
//= require underscore
//= require gmaps/google
//= require_tree .

var diag = document.getElementById("diag");
var two = document.getElementById("two");
var three = document.getElementById("three");
     console.log(diag);
        console.log(two);
        console.log(three);
if (diag)
{
  diag.addEventListener("click", function (){
    document.querySelector('parkour-selector').showParkour('parkour-diagnostique');
  });
}

if (two)
{
 
  two.addEventListener("click", function (){
     console.log("ok : ")
    document.querySelector('parkour-selector').showParkour('template-deux-parkour');
  });
}
if (three)
{
  three.addEventListener("click", function (){
    document.querySelector('parkour-selector').showParkour('template-trois-parkour');
  });
}
