$(document).ready(function () {
  console.log("We are in jquery", $);
  //   element selector
  $("p").click(function () {
    console.log("clicked", this);
    //   $("p").hide();
    // $(this).hide();
  });
  //   id selector
  $("#second").click(function () {
    console.log("second");
  });

  //class selector
  $(".odd").click(function () {
    console.log("odd");
  });

  //other selectors
  $("*").click(); //click on all the elements
  $("p.odd").click(); // click on odd elements
  $("p:first").click(); //click on first elemenet

  // ---------events in jquery
  // Mouse events = click, doubleclick, mouseenter, mouseleave, mousedown, mouseup, hover
  // keyboard events = keypress, keydown, MediaKeyStatusMap
  // form events = SubmitEvent, change, focus, blur,
  // document/window events = FontFaceSetLoadEvent, resize, scroll, unload

  // doubleclick, mouseenter event
  $("p").dblclick(function () {
    console.log("dblclicked", this);
    //   $("p").hide();
    // $(this).hide();
  });

  $("p").mouseenter(function () {
    console.log("mouse enter", this);
    //   $("p").hide();
    // $(this).hide();
  });

  //demoing the "on" method, used for multiple event handler

  $("p").on({
    click: function () {
      console.log("On method clicked", this);
    },
    mouseleave: function () {
      console.log("On method mouse leave");
    },
  });

  // all method are having callback


  // hide show
  // $('#wiki').hide(1000,function(){
  //   console.log("hide");

  // })
  // $('#wiki').show(1000,function(){
  //   console.log("show");

  // })

  // toggle
  // $("#btn").click(function () {
  //   $("#wiki").toggle(1000);
  // });

  //make
  //fadeIn(), fadeOut(), fadeToggle(), fadeTo()

  //slide function
  $("#wiki").slideUp(1000);
  $("#wiki").slideDown(1000);
  $("#btn").click(function () {
    $("#wiki").slideToggle(1000);
  });

  //animate
  $('#wiki').animate({
    opacity:0.3,
    height:'150px',
    width:'350px'
  },2000) 

  //queue functionality
  $("#wiki").animate({opacity:0.3},4000)
  $("#wiki").animate({opacity:0.9},4000)
  $("#wiki").animate({width:'350px'},1000)

  //stop method
  $("#wiki").stop()

  //dom manipulation
  // $("#wiki").html('<h1>chayan</h1>')
  // $("#wiki").text("heelo text")

  //form
  $('#ta').val("hello")

  //remove empty
  // $("#wiki").empty()
  // $("#wiki").remove()

  ///---add class, id, remove class, toggleclass function
  $("#wiki").addClass("myclass")

  //---- set css
  $("#wiki").css("background-color","red")

  ///-----ajax - get, post, etc, make server
  $.get('https://code.jquery.com/jquery-3.7.1.js',function(data, status){
    alert(data)
    alert(status)
  });

  //form validation, complete crud ajax
   



});
