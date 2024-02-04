
        function sideBar_open() {
            var element = document.getElementById("mySidebar");
            element.classList.add("showSB");

            var element = document.getElementById("closeMobile")
            element.classList.add("showCloseSB");
        }

        function sideBar_close() {
            var element = document.getElementById("mySidebar");
            element.classList.remove("showSB");

            var element = document.getElementById("closeMobile")
            element.classList.remove("showCloseSB");
        }