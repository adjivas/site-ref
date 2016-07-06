// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require gmaps/google
//= require bootstrap.min
//= require_tree .

function event_hidden () {
  const node = document.querySelector("nav");

  if (node.getAttribute("class") === "ghost") {
    node.removeAttribute("class");
  }
  else {
    node.setAttribute("class", "ghost");
  }
}

function event_rotate () {
  const node = document.querySelector('section');

  if (node.getAttribute("class") === "vertical") {
    node.setAttribute("class", "horizontal");
  }
  else {
    node.setAttribute("class", "vertical");
  }
  document.querySelector('ktree-selector').drawNodes();
}
