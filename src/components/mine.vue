<template>
    <div class="mine">
        <!-- 头部部分 -->
        <top title="我的" admi="设置"></top>
        <!-- 中间的部分 -->
        <div class="middle">
            <a href="/info">
                <img src="">
                <span>支付</span> 
            </a>
            <a href="/info">
                <img src=""> 
                <span>收藏</span>
            </a>
            <a href="/info">
                <img src=""> 
                <span>订单</span>
            </a>
            <a href="/info">
                <img src=""> 
                <span>收获地址</span>
            </a>
            <a href="/info">
                <img src=""> 
                <span>设置</span>    
            </a>
        </div>
    </div>
   
</template>
<script>
//引入头部组件
import top from "./cartTop.vue"
export default {
    components:{
        "top":top
    }
    
}
</script>
<style scoped>
.mine .middle{
     margin-top:100px;
}
.mine .middle a{
    color:#000;
    font-size:18px;
    text-decoration: none;
    display: block;
    border-bottom:1px solid #aaa;
    height:50px;
    line-height: 50px;
    
}
.mine .middle a span{
    margin-left:20px;
}
</style>
