$(document).ready(function(){
    $("#btn").click(function(){
      $("p").hide();
    });
  });
  
  $(document).ready(function(){
    $("#p1").mouseenter(function(){
      alert("WOW beautiful!");
    });
  });

  $(document).ready(function(){
    $("img").click(function(){
      $(this).hide();
    });
  });

  $(document).ready(function(){
    $("#hide").click(function(){
      $("img").hide();
    });
    $("#show").click(function(){
      $("img").show();
    });
  });

  $(document).ready(function(){
    $("#btn-2").click(function(){
      $("#c1").fadeIn();
      $("#c2").fadeIn("slow");
      $("#c3").fadeIn(3000);
    });
  });

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#down").slideDown("slow");
    });
  });

  $(document).ready(function(){
    $("#run").click(function(){
      $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
      });
    });
  });

  $(document).ready(function(){
    $("#slide").click(function(){
      $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
      $("#panel").stop();
    });
  });

  $(document).ready(function(){
    $("#btn-5").click(function(){
      $("h4").hide("slow", function(){
        alert("Your paragraph will hidden");
      });
    });
  });

  $(document).ready(function(){
    $("#btn-6").click(function(){
      $("#pp").css("color", "red")
        .slideUp(2000)
        .slideDown(2000);
    });
  });

  $(document).ready(function(){
    $("#btn-7").click(function(){
      alert("Text: " + $("#test").text());
    });
    $("#btn-8").click(function(){
      alert("HTML: " + $("#test").html());
    });
  });

  $(document).ready(function(){
    $("#btn-9").click(function(){
      $("#link").attr("href", "https://www.w3schools.com/jquery/");
    });
  });

  $(document).ready(function(){
    $("#btn-10").click(function(){
      $("#ppp").append(" <b>NIKE</b>.");
    });
  
    $("#btn-11").click(function(){
      $("ol").append("<li>ADIDAS</li>");
    });
  });

  $(document).ready(function(){
    $("#btn-12").click(function(){
      $("#remove").empty();
    });
  });

  $(document).ready(function(){
    $(".btn").click(function(){
      $("#head, #add-1").addClass("blue");
      $("#imp").addClass("important");
    });
  });

  $(document).ready(function(){
    $(".btn-1").click(function(){
      $("#backg1, #backg2, #backg3, #backg4").css("background-color", "darkgreen");
    });
  });

  $(document).ready(function(){
    $(".btn-2").click(function(){
      var txt = "";
      txt += "Width of dimension: " + $("#dimension").width() + "</br>";
      txt += "Height of dimension: " + $("#dimension").height();
      $("#dimension").html(txt);
    });
  });
  