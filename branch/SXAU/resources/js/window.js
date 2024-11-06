// 获取弹窗元素
var popup = document.getElementById("popup");

// 获取关闭按钮元素
var closeButton = document.querySelector(".close-button");

// 当DOM内容加载完成后显示弹窗
document.addEventListener("DOMContentLoaded", function() {
    popup.style.display = "block";
});

// 当用户点击关闭按钮时隐藏弹窗
closeButton.onclick = function() {
    popup.style.display = "none";
};

// 当用户点击弹窗外部区域时隐藏弹窗
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}