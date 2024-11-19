(function() {

            // 获取用户代理字符串

            var ua = navigator.userAgent.toLowerCase();

            var isWeixin = ua.indexOf('micromessenger') !== -1;



            if (isWeixin) {

                // 提示用户使用其他浏览器打开

                alert('请使用其他浏览器打开此页面，以获得更好的体验。');



                // 可选：阻止页面继续加载

                // window.stop(); // 适用于大多数浏览器

                // 或者使用以下方法停止加载

                var preventLoad = true;

                if (preventLoad) {

                    // 停止页面加载

                    window.document.open();

                    window.document.write('<html><head><title>请使用其他浏览器打开</title></head><body><h1>请使用其他浏览器打开此页面</h1></body></html>');

                    window.document.close();

                }

            }

        })();
