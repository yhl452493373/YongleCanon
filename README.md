# YongleCanon
九阴真经——永乐大典的手机版手机版，数据从 http://9yin.azurewebsites.net 上面扒的
# 1.0.4下载地址http://downloadpkg.apicloud.com/app/download?path=http://A6097622387850.qiniucdn.apicloud-system.com/e39f3b0a4829e928bc0a61ce2df64c89_d
# 需要配合APICloud使用
------
用APICloud创建好项目后，直接把这里面的文件copy过去，把config.xml里面的<widget id="A6097622387850">里面的id属性改成你新建的项目的id，然后就可以用APICloud编译处理了。
------
本应用用到了几个模块，需要在APICloud里面打包为自定义loader使用。模块分别是：
* groupList，内功、武学、经脉的分组列表，此模块收费，打自定义loader或者试用包免费，编译正式版时按应用收费
* UIInput，内功、武学、经脉的搜索框，此模块免费
* UIActionSelector，内功、武学、经脉的等级选择框，此模块免费
* NVNavigationBar，应用上的导航条，此模块免费
其余的两个都是创建应用时必选的，就不说了
