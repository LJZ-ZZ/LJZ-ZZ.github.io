// 获取元素
const customAlert = document.getElementById('customAlert');
const closeButton = document.getElementById('closeButton');

// 隐藏提示窗口的函数
function hideAlert() {
    customAlert.classList.add('hidden');
}

// 添加事件监听器
closeButton.addEventListener('click', hideAlert);

// 在DOM内容加载完成后自动显示提示窗口
document.addEventListener('DOMContentLoaded', () => {
    customAlert.classList.remove('hidden');
});
