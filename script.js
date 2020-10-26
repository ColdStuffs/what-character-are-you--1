
let age = $(".oo_input").val();
let strong = $(".uu_input").val();
let smart = $(".uu_input").val();

   $("button").click(function() {
if (age >= 18 && smart) {
   
   
   
     } else if (age <= 18 && strong) {
            $(".owo1").show();

        } else if (age <= 18 && smart) {
            $(".").show();

        } else if (age >= 18 && strong) {
            $(".").show();

        } else {
            alert("Go away you didn't do it right.");
        }
    });