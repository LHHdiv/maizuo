# 卖座网站：

#### 路由

一级路由：(包裹二级路由,都需要有一个一级路由)

| 路径          | 组件名 |
| ------------- | ------ |
| film          | Home   |
| /film/:filmId | Film   |
| / city        | City   |
| /login        | Login  |
| /money        | Money  |

二级路由：

| 路径     | 组件名  | 它的父级 |
| -------- | ------- | -------- |
| /films   | Films   | /        |
| /cinemas | Cinemas | /        |
| /center  | Center  | /        |
