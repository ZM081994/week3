require(["../js/config.js"], function() {
    require(["ajax", "moment", "getParms", "bscroll"], function(ajax, moment, getParms, bscroll) {
        var ulist = document.querySelector(".ulist");
        var timer = getParms.time;

        function init() {
            ajax({
                url: "/api/get/train_tickets",
                data: {
                    time: timer
                },
                dataType: "json",
                success: function(data) {
                    if (data.code === 1) {
                        randers(data.msg)
                    }
                }
            })
        }

        var str = "";
        for (var i = 0; i < 15; i++) {
            var newTime = moment(new Date(timer).getTime() + 86400 * 1000 * i).format("YYYY-MM-DD");
            var strs = newTime.substr(5);

            str += `<li data-time="${newTime}">${strs}</li>`
        }

        ulist.innerHTML = str;

        ulist.onclick = function(e) {
            var target = e.target;

            if (target.tagName === "LI") {
                var lis = ulist.querySelectorAll("li");
                for (var i = 0; i < lis.length; i++) {
                    lis[i].classList.remove("active")
                }
                target.classList.add("active");

                ajax({
                    url: "/api/get/train_tickets",
                    data: {
                        time: e.target.getAttribute("data-time")
                    },
                    dataType: "json",
                    success: function(data) {
                        if (data.code === 1) {
                            randers(data.msg)
                        }
                    }
                })
            }

        }


        function randers(data) {
            var str = "";
            data.forEach(function(file) {
                str += `
                <div class="address">
               <div class="address-left">
                        <p>出发城市</p>
                        <h3>${file.go}</h3>
                    </div>
                    <div class="address-right">
                        <p>到达城市</p>
                        <h3>${file.back}</h3>
                    </div>
                    </div>
               `
            });

            document.querySelector(".section-list").innerHTML = str;
        }

        var scroll = new bscroll("#header", {
            scrollX: true,
            click: true
        })

        init();
    })
})