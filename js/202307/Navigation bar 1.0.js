window.onload = function() {
  // 获取 ul 元素
  var menu = document.getElementById("menu").getElementsByTagName("ul")[0];

  // 添加新的导航菜单项
  menu.innerHTML += '<li><a href="https://tomzhao.xyz/">&nbsp;&nbsp;首页</a></li>' +
                    '<li><a href="https://games.tomzhao1016.top">&nbsp;&nbsp;&nbsp;&nbsp;Tom_zhao 游戏集</a></li>' +
                    '<li><a href="https://tomzhao.xyz/tools">&nbsp;&nbsp;&nbsp;&nbsp;Tom_zhao 工具集</a></li>'+
                    '<li><a href="https://tomzhao.xyz/image/">&nbsp;&nbsp;&nbsp;&nbsp;Tom_zhao 镜像站</a></li>'+
                    '<li><a href="https://blog.tomzhao.xyz/">&nbsp;&nbsp;&nbsp;&nbsp;Tom_zhao 博客</a></li>'+
                    '<li><a href="https://tomzhao.xyz/updateplan/">&nbsp;&nbsp;&nbsp;&nbsp;更新计划</a></li>'+
                    '<li><a href="https://tomzhao.xyz/updatalog/">&nbsp;&nbsp;&nbsp;&nbsp;更新日志</a></li>'+
                    '<li><a href="https://link.tomzhao.xyz/index/">&nbsp;&nbsp;&nbsp;&nbsp;链接库</a></li>'+
                    '<li><a href="#"> </a></li>' ;
};