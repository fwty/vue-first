<template>
    <div class="middle">
        <div class="big-picture">
            <img :src="imgurl">      
        </div>
        <p>&yen;{{price}}</p>
        <p>上衣打折快来抢购</p>
        <p><span>快递:免邮费</span>  <span>月销:{{count}}</span> <span>{{city}}</span></p>
    </div>
</template>
<script>
export default {
 props:{
     imgurl:"",
     price:"",
     count:"",
     city:"",
 }   
}
</script>
<style scoped>
.middle>.big-picture{
    width:95%;
    margin:0 auto;
}
.middle>.big-picture>img{
    width:100%;
}
.middle p:nth-child(2){
    color:#f00;
    font-size:22px;
    margin-left:13px;
}
.middle p:nth-child(3){
    color:#666;
    font-size: 22px;
    margin-left:10px;
}
.middle p:nth-child(4){
    color:#999;
    font-size: 14px;
}
.middle p:nth-child(4) span:nth-child(1){
    margin-left:10px;
}
.middle p:nth-child(4) span:nth-child(2){
    margin-left:100px;
}
.middle p:nth-child(4) span:nth-child(3){
    margin-left:77px;
}
</style>
