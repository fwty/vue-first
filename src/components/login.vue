<template>
    <div class="login">
        <div class="title">登陆</div>
        <h3>Welcome to YueTaoTao</h3>
        <!-- 用户名框 -->
        <mt-field label="用户名" @blur="check"  v-model="uname" type="text" placeholder="请输入用户名"></mt-field>
        <!-- 密码框 -->
        <mt-field label="密码" v-model="upwd" type="password" placeholder="请输入密码"></mt-field>
        <!-- 单选框 -->
        <!-- <mt-radio align="left" :options='["买家","卖家"]' ></mt-radio> -->
        <!-- 单选按钮 -->
        <input type="radio" name="ww" class="radio" checked>买家
        <input type="radio" name="ww" class="radio">卖家
        <!-- 验证码框 -->
        <mt-field label="验证码" type="password" placeholder="请输入验证码"></mt-field>
        <!-- 登陆按钮 -->
        <button  class="log-button2" @click="check">登陆</button> <br>
        <!-- 注册框 -->
        <router-link to="/reg" class="log-button3" >前往注册</router-link>
    </div>
</template>
<script>
export default {
    data(){
       return{
         uname:"",
         upwd:"" 
       }
    },
    methods:{
        check(){
            //获得输入的用户名和密码
            var uname=this.uname;
            var upwd=this.upwd;
           //正则
           var reg=/^[a-zA-Z0-9]{6,10}$/
           //如果输入不满足，则弹出提示
           if(!reg.test(uname)){
               this.$messagebox("提示","用户名必须是6-10位数字字母")
               return
            }else{
               if(!reg.test(upwd)){
               this.$messagebox("提示","密码必须是6-10位数字字母的组合")
               return
               } 
            }
            //发送ajax请求
            var url="login";
            var obj={uname,upwd};
            this.axios.get(url,{params:obj}).then(res=>{
                console.log(res)
                if(res.data==-1){
                     this.$messagebox("提示","用户名或密码不正确")
                }else{
                    this.$messagebox("提示","登陆成功");
                    this.$router.push("./index")
                }
            })
        } 
    }
}
</script>
<style>
*{
    margin:0px;
    padding:0px;
}
.login{
    text-align:center;
}
.login .title,.login .log-button2{
    color:#fff;
    background:linear-gradient(60deg,#55ddff,#52a2fd);
    border:none;
    text-align:center;
    
}
.login .title{
    width:100%;
    height:40px;
    line-height: 40px;
    font-size: 16px;
}
.login h3{
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 50px;
}
.login .radio{
    width:20px;
    height:20px;
    margin-left:10px;
    font-size:20px;
}
.login .log-button2,.login .log-button3{
    display:block;
    width:40%;
    height:40px;
    color:#000;
    margin:0 auto;
    border:1px solid #eee;
    background-color:transparent;
    text-decoration: none;
    line-height: 40px;
}
.login .log-button2{
    color:#fff;   
}
</style>

