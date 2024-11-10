// script.js

const host = "127.0.0.1"; // 服务器地址
const port = 8810; // 服务器端口

const statusEl = document.getElementById('status');
const messagesEl = document.getElementById('messages');
const nicknameEl = document.getElementById('nickname');
const connectBtn = document.getElementById('connectBtn');
const messageEl = document.getElementById('message');
const sendBtn = document.getElementById('sendBtn');

let ws;
let username = '';

connectBtn.addEventListener('click', () => {
    username = nicknameEl.value.trim();
    if (username.length === 0) {
        alert("昵称不能为空");
        return;
    }
    if (username.length > 12) {
        alert("昵称的长度不能超过12个字符");
        return;
    }
    if (username.includes(" ")) {
        alert("昵称中不能带有空格");
        return;
    }

    ws = new WebSocket(`ws://${host}:${port}`);

    ws.onopen = () => {
        statusEl.textContent = "已连接";
        ws.send(`CONNECT ${username}`);
    };

    ws.onmessage = (event) => {
        const msg = event.data;
        if (msg.startsWith("VERSION")) {
            // 处理版本信息
            const version = msg.split(" ")[1];
            if (version !== "3.2") {
                alert("当前客户端版本过低，请升级到最新版");
                ws.close();
            } else {
                statusEl.textContent = "版本验证通过";
            }
        } else if (msg.startsWith("NICKNAME")) {
            const status = msg.split(" ")[1];
            if (status === "EXISTS") {
                alert("昵称已存在，换一个试试吧");
                ws.close();
            } else {
                alert("连接成功");
                messageEl.disabled = false;
                sendBtn.disabled = false;
                messagesEl.innerHTML += `<p>欢迎, ${username}!</p>`;
            }
        } else {
            messagesEl.innerHTML += `<p>${msg}</p>`;
            messagesEl.scrollTop = messagesEl.scrollHeight;
        }
    };

    ws.onclose = () => {
        statusEl.textContent = "已断开连接";
        messageEl.disabled = true;
        sendBtn.disabled = true;
    };

    ws.onerror = (error) => {
        console.error("WebSocket 错误:", error);
        statusEl.textContent = "连接错误";
    };
});

sendBtn.addEventListener('click', () => {
    const msg = messageEl.value.trim();
    if (msg.length > 0) {
        ws.send(msg);
        messageEl.value = "";
    }
});

// 发送文件功能（简化示例）
// 需要使用 File API 和 WebSocket 发送二进制数据
// 这里只是一个占位符
/*
function sendFile(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        ws.send(JSON.stringify(['file', file.name, event.target.result]));
    };
    reader.readAsDataURL(file);
}
*/