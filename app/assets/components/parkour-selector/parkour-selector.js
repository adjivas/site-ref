        Polymer({
            is: "parkour-selector",

            showParkour: function (parkour) {
                document.getElementById('current-parkour').innerHTML = "<" + parkour + "></" + parkour+ ">";
            }
        });
