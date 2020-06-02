// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import $ from "jquery"
// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { initCarousel } from './carousel'
import { scrollio, updateLcar } from './lcar'
document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  // const one = document.querySelector('.project-1')
  // const two = document.querySelector('.project-2')
  // if (document.getElementById('project-carousel-holder')) {
  //   document.getElementById('project-carousel-holder').addEventListener('scroll', (e) => {
  //     console.log(e.target.offetWidth)
  //   })
  // }

  // if (one) {
  //   setInterval(
  //   function() {
  //     console.log(one.scrollWidth)
  //   }
  // , 4000);
  // }
});

require("trix")
require("@rails/actiontext")

$(document).ready(function(){
  if (".category-choice") {
    $(".category-choice").click(function(){
      $(this).toggleClass("active");
    });
  }
});

if (document.getElementById('lcar')) {

  window.onresize = updateLcar;
  window.onload = updateLcar
  scrollio()
}
