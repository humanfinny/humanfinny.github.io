$(document).ready(function(){

    function ImageSwitcher(choices, i) {
        i = 0;
        
        this.Next = function() {
            hide_current_image();
            show_next_image();
        }
        
        var hide_current_image = function() {
            if(choices){
                choices[i].style.visibility = "hidden";
                i += 1;
            }
        }
        var show_next_image = function() {
            if(choices){
                if(i == (choices.length)) {
                    i = 0;
                }
                choices[i].style.visibility = "visible";
            }
        }
    }
      
        var pants = $(".pant");
        var shirts = $(".shirt");
        var dress = $(".dress");
        var jacket = $(".jacket");
        var socks = $(".socks");
        var shoes = $(".shoes");
        var hands = $(".hands");
        var bag = $(".bag");
        var backgrounds = $(".bg");
        
    
        var shirt_picker = new ImageSwitcher(shirts);
        document.getElementById("top_button").onclick = function() { shirt_picker.Next(); };
        
        var pants_picker = new ImageSwitcher(pants);
        document.getElementById("bottom_button").onclick = function() {pants_picker.Next(); };

        var dress_picker = new ImageSwitcher(dress);
        document.getElementById("dress_button").onclick = function() {dress_picker.Next(); };

        var jacket_picker = new ImageSwitcher(jacket);
        document.getElementById("jacket_button").onclick = function() {jacket_picker.Next(); };

        var socks_picker = new ImageSwitcher(socks);
        document.getElementById("socks_button").onclick = function() {socks_picker.Next(); };

        var shoes_picker = new ImageSwitcher(shoes);
        document.getElementById("shoes_button").onclick = function() {shoes_picker.Next(); };

        var hands_picker = new ImageSwitcher(hands);
        document.getElementById("hands_button").onclick = function() {hands_picker.Next(); };

        var bag_picker = new ImageSwitcher(bag);
        document.getElementById("bag_button").onclick = function() {bag_picker.Next(); };
        
        var bg_picker = new ImageSwitcher(backgrounds);
        document.getElementById("bg_button").onclick = function() {bg_picker.Next(); };
    
    });
    
      $("#top_button").click(function(){
      $("#top-menu").css("visibility", "visible"); });
