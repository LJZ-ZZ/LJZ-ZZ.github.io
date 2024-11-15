// 简单示例：点击菜单项时隐藏下拉菜单
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            if (item.classList.contains('dropdown')) {
                // 阻止默认链接行为
                event.preventDefault();
                // 可选：添加/移除 active 类以控制样式
                item.classList.toggle('active');
            }
        });
    });
});