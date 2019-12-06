## 聊聊sequelize的include


### 什么是sequelize

sequelize 是node下面的一个关系型数据库orm框架。提供了人性化的接口去写sql。简单说，就是告别 ` select * from person; `烦人的sql语句。采用 ` Person.findAll({}); ` 这样形式是操作数据库。

### include

include是sequelize实现连表查询的一个语法。至于具体细节，还请参考官方文档。这不是具体讨论的细节，我想记录的，是关于这样一个场景。

### 具体场景





