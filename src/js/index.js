require(["./js/config.js"], function() {
    require(["ajax"], function(ajax) {
        function init() {
            //渲染初始化页面
            loadData();
        }

        var input = document.querySelector("#input");
        var btn = document.querySelector("#btn");

        function loadData() {

            btn.onclick = function() {
                var val = input.value;

                location.href = "./page/time.html?time=" + val
            }

        }
        init();
    })
})