
let x = document.getElementById("myLinks");

x.style.visibility = "hidden";

x.style.height = "0";

        function menu() {
            

            if (x.style.visibility === "hidden") {
                
                x.style.visibility = "visible";

                x.style.height = "16rem";
            }

            else {
                                
                x.style.visibility = "hidden";

                x.style.height = "0";
            }
        }
