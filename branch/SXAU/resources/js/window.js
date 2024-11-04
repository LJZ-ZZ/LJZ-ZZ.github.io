// 获取元素
const customAlert = document.getElementById('customAlert');
const closeButton = document.getElementById('closeButton');

// 隐藏提示窗口的函数
function hideAlert() {
    if (customAlert) {
        customAlert.classList.remove('show');
        customAlert.classList.add('hidden');
    }
}

// 显示提示窗口的函数
function showAlert() {
    if (customAlert) {
        customAlert.classList.remove('hidden');
        customAlert.classList.add('show');
    }
}

// 在DOM内容加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 检查元素是否存在
    if (closeButton) {
        closeButton.addEventListener('click', hideAlert);
    }

    // 检查元素是否存在并显示
    if (customAlert) {
        showAlert();
    }
});