# 疑问
{{show()}}
input @click="show()"
cmp1.add()

# 结合
webpack + vue

# 必须用的
vue-cli启动器(脚手架)：
npm i -g vue-cli
安装完成之后命令叫vue

vue list 常用模板
vue build 

vue init webpack 一个名字
jest
e2e 客户端到服务器端
文件：
assets会被打包，名字会变
static不会被打包，名字也不会变 
# 测试
1.单元测试
2.集成测试
3.压力测试
4.回归测试   改了之后要测一下

# vuex
全局、统一、单一

解决问题？
1.数据跨组件共享
2.防止数据意外修改
3.调试、测试


$store.commit('mutation_name', payload);
$store.dispatch('action_name', payload);

state

mutation(state, arg){
  state.a+=;
  state.b+='dfadf';
}

action(context, arg){
  context.commit('mutation', arg);
}

