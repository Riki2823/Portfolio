document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector(".custom-cursor");
    var links = document.querySelectorAll("a");
    var initCursor = false;
  
    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];
  
      selfLink.addEventListener("mouseover", function() {
        cursor.classList.add("custom-cursor--link");
      });
      selfLink.addEventListener("mouseout", function() {
        cursor.classList.remove("custom-cursor--link");
      });
    }
  
    window.onmousemove = function(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
  
      if (!initCursor) {
        TweenLite.to(cursor, 0.3, {
          opacity: 1
        });
        initCursor = true;
      }
  
      TweenLite.to(cursor, 0, {
        top: mouseY + "px",
        left: mouseX + "px"
      });
    };
  
    window.onmouseout = function(e) {
      TweenLite.to(cursor, 0.3, {
        opacity: 0
      });
      initCursor = false;
    };
});

function appearEstudios(){
  document.getElementById('estudios').style.display="inline";  
  document.getElementById('trabajos').style.display="none";
  document.getElementById('intereses').style.display="none";
}

function appearTrabajos(){
  document.getElementById('trabajos').style.display="inline";  
  document.getElementById('estudios').style.display="none";
  document.getElementById('intereses').style.display="none";
}

function appearIntereses(){
  document.getElementById('intereses').style.display="inline"; 
  document.getElementById('trabajos').style.display="none";
  document.getElementById('estudios').style.display="none"; 
}