function run() {
    var username, password;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if (username !== "cs") {
        // 获取弹窗
        var modal = document.getElementById('popup_username');

        // 获取 <span> 元素，用于关闭弹窗
        var span = document.querySelector('.close');

        // 打开弹窗

        modal.style.display = "block";


        // 点击 <span> (x), 关闭弹窗
        span.onclick = function () {
            modal.style.display = "none";
        }

        // 在用户点击其他地方时，关闭弹窗
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    //document.getElementById("popup_username").innerHTML="用户名不属于授权列表内";
    else {
        if (password !== "cs") {
            // 获取弹窗
            var modal2 = document.getElementById('popup_passsword');

            // 获取 <span> 元素，用于关闭弹窗
            var span2 = document.querySelector('.close2');

            // 打开弹窗
            modal2.style.display = "block";

            // 点击 <span> (x), 关闭弹窗
            span2.onclick = function () {
                modal2.style.display = "none";
            }

            // 在用户点击其他地方时，关闭弹窗
            window.onclick = function (event) {
                if (event.target === modal2) {
                    modal2.style.display = "none";
                }
            }
        }
        else {
            //登录
            //SetCookie("登录","ok")

            window.location='DownloadPage.html'
            window.location='https://www.baidu.com'
            window.location.replace('DownloadPage.html')
            

        }

    }

}
