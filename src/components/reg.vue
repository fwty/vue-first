<template>
   <div class="reg">
        <div class="top">
            <router-link to="/" class="a">返回</router-link>
            <button>注册</button>
        </div>
        <h3>Welcome to YueTaoTao</h3>
        <!-- 用户名输入框 -->
        <mt-field label="用户名" v-model="uname" placeholder="请输入用户名"></mt-field>
        <!-- 密码输入框 -->
        <mt-field label="密码" v-model="upwd" placeholder="请输入密码"></mt-field>
        <!-- 确认密码框 -->
        <mt-field label="确认密码" v-model="cpwd" placeholder="请再次输入密码"></mt-field>
        <!-- 手机号 -->
        <mt-field label="手机号" v-model="phone" placeholder="请输入手机号"></mt-field>
        <!-- 邮箱 -->
        <mt-field label="邮箱" v-model="email" placeholder="请输入邮箱地址"></mt-field>
        <!-- 单选框 -->
        <mt-cell>
            <mt-radio :options='["买家", "卖家"]'></mt-radio>
            <!-- <mt-radio options=></mt-radio> -->
        </mt-cell>
       <!-- 注册框 -->
       <button class="reg-button" @click="check" >注册</button>
   </div>
    
</template>
<script>
export default {
    data(){
       return{
         uname:"",
         upwd:"" ,
         cpwd:"",
         phone:"",
         email:"",
         path:""
       }
    },
    methods:{
       check(){
           console.log(this.upwd,this.cpwd)
           var regname =/^[a-zA-Z0-9]{6,10}$/
           var regpwd=/^\w{8,12}$/
           var regphone=/^1[3-8]\d{9}$/
           //如果输入不满足，则弹出提示
           if(!regname.test(this.uname)){
               this.$messagebox("提示","用户名必须是6-10位数字字母")
           }else{
               if(!regpwd.test(this.upwd)){
               this.$messagebox("提示","密码必须是8-12位数字字母下划线的组合")
               }else{
                   if(this.upwd!==this.cpwd){
                    this.$messagebox("提示","两次密码不一致")
                   }else{
                       if(!regphone.test(this.phone)){
                           this.$messagebox("提示","手机格式不正确")
                       }else{
                           this.$messagebox("提示","注册成功")
                       }
                   }
               }
            }  
       }
    }
    
}
</script>
<style>
*{
    margin:0px;
    padding:0px;
}
.reg .top{
    width:100%;
    height:40px;
    background:linear-gradient(60deg,#55ddff,#52a2fd);
    line-height: 40px;
    position: relative;
}
.reg .top>button{
    width:60px;
    color:#fff;
    font-size:18px;
    margin:0 auto;
    background-color: transparent;
    border:none;
    position: absolute;
    left:50%;
    margin-left:-30px;
    line-height: 40px;
}
.reg .top>.a{
    color:#fff;
    text-decoration: none;
    margin-left:8px;
}
.reg h3{
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 50px;
    text-align: center;
}
.reg .reg-button{
    display: block;
    width:40%;
    height:40px;
    text-align: center;
    line-height: 40px;
    color:#fff;
    background-color:#07c160;
    border:none;
    margin:0 auto;
}
</style>
