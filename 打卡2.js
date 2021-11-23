"ui";

var color = "#009688";

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="GZHU自动打卡工具" />
                <tabs id="tabs" />
            </appbar>
            <frame>
                <linear gravity="center">
                    <button id="start" text="打卡" />
                </linear>

            </frame>
            <frame>
                <linear gravity="center">
                    <text text="打卡前请授予软件“无障碍”权限" textColor="blue" textSize="20sp" />
                </linear>
            </frame>
            <frame>
                <linear gravity="center">
                    <text text="华为用户请注意：请将软件锁定在后台，以免无障碍权限消失！" textColor="red" textSize="20sp" />
                </linear>
            </frame>
        </vertical>
        <vertical layout_gravity="left" bg="#ffffff" w="280">
            <img w="280" h="200" scaleType="fitXY" src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg" />
            <list id="menu">
                <horizontal bg="?selectableItemBackground" w="*">
                    <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}" />
                    <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center" />
                </horizontal>
            </list>
        </vertical>
    </drawer>
);


//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu => {
    menu.add("关于");
});
//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "设置":
            toast("还没有设置");
            break;
        case "关于":
            alert("关于", "GZHU自动打卡工具\nVer:2.1.2\nBy:Yuzi");
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);
//让工具栏左上角可以打开侧拉菜单
ui.toolbar.setupWithDrawer(ui.drawer);

ui.menu.setDataSource([
    {
        title: "退出",
        icon: "@drawable/ic_exit_to_app_black_48dp"
    }
]);

ui.menu.on("item_click", item => {
    switch (item.title) {
        case "退出":
            ui.finish();
            break;
    }
})

ui.start.on("click", () => {
    app.launchApp("企业微信")
    threads.start(function () {
        className("android.widget.RelativeLayout").clickable(true).depth(9).drawingOrder(3).findOne().click()
        className("android.widget.TextView").clickable(false).depth(13).text("健康信息系统").findOne().parent().parent().click()
        //className("android.widget.RelativeLayout").clickable(true).depth(11).drawingOrder(6).findOne().click() 旧版选择“健康信息系统”语句
        sleep(1100)
        className("android.view.View").clickable(true).depth(13).drawingOrder(0).findOne().click()
        sleep(1100)
        className("android.view.View").clickable(true).depth(14).drawingOrder(0).findOne().click()
        sleep(1100)
        className("android.widget.RadioButton").clickable(true).depth(24).drawingOrder(0).id("V0_CTRL287").findOne().click()
        //className("android.widget.RadioButton").clickable(true).depth(24).drawingOrder(0).id("V0_CTRL294").findOne().click()
        className("android.widget.RadioButton").clickable(true).depth(24).drawingOrder(0).id("V0_CTRL175").findOne().click()
        className("android.widget.RadioButton").clickable(true).depth(24).drawingOrder(0).id("V0_CTRL176").findOne().click()
        sleep(500)
        className("android.widget.CheckBox").clickable(true).depth(24).drawingOrder(0).id("V0_CTRL82").findOne().click() //确认框
        className("android.view.View").clickable(true).depth(18).drawingOrder(0).text("提交").findOne().click()
    })
})