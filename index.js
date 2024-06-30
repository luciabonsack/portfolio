console.log("Your index.js file is loaded correctly!");

$("p").on({
    mouseenter: function(){
        $(this).css("color", "white");
    },
    mouseleave: function(){
      $(this).css("color", "");
    },
  });

  $("#fSmol").click(function(){
    var self = $("p.adjFs").parent();
    self.toggleClass("biggerFont");
  });

  $("#fBright").click(function(){
    var self = $("p.adjFs").parent();
    self.toggleClass("brighterFont");
  });