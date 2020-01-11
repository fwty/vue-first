<template>
    <div class="info">
        <top title="简介" admi="返回" href="/mine"></top>
        <div class="middle">
            <p>欢迎来到月淘淘</p>
            <div>
                开发者是个渣渣，这个功能还没有完善出来，请大家敬请期待渣渣开发者<span>小小月</span>的作品
            </div>
           
        </div>
    </div>
    
</template>
<script>
//引入头部
import top from "./infoTop.vue"
export default {
    components:{
        "top":top,
    }
}
</script>
<style scoped>
.info div::before{
    content:"";
    display:table;
}
.info .middle{
  margin-top:100px;
  font-size:20px;
}
.info .middle p{
    text-align: center;
    color:#f44;
    font-size:25px;
    margin-bottom:40px;
}
.info .middle div{
    width:80%;
    margin:0 auto;
}
.info .middle div span{
    color:#f44;
    font-size: 25px;
}
</style>

