<template>
<div class="index">  
    <div class="top">
        <a class="login" href="/">登陆</a>
        <mt-field class="input" placeholder="商品五折起"></mt-field>
        <span class="vip">会员</span>
        <div class="hr"></div>
    </div>
    <!-- 导航部分 -->
    <div class="nav">
      <span>热搜:</span>
      <mt-button class="button">高跟鞋</mt-button>
      <mt-button class="button">内衣</mt-button>
      <mt-button class="button">平板鞋</mt-button>
      <mt-button class="button">水乳</mt-button>
    </div>
    <!-- 轮播图部分 -->
    <div class="banner">
        <img src="" alt="">
    </div>
    <!-- 中间的图片部分 -->
    <div class="middle">
        <p>头条 <span>Hot</span></p> 
        <p>今日头条低价售卖各类服装</p>
        <div class="picture">
            <div v-for="(item,i) of list1" :key="i">
                <img :src="'http://127.0.0.1:4000/src/index_clothes/'+item.imgurl" alt="">
            </div>
        </div>
    </div>
    <!-- 中间小图标部分 -->
    <div class="icons">
        <a href="">
            <div class="icon one"></div>
            上衣
        </a>
        <a href="">
            <div class="icon two"></div>
            短裤
        </a>
        <a href="">
            <div class="icon three"></div>
            裤子
        </a>
        <a href="">
            <div class="icon four"></div>
            裙子
        </a>
        <a href="">
            <div class="icon five"></div>
            内衣
        </a>
    </div>
    <!-- 衣服图片部分 -->
    <div class="cloth-picture">
        <a v-for="(item,i) of list2" :key="i"  :href="'/details?pid='+item.pid" >
            <img :src="'/src/index_clothes/'+item.imgurl" >   
            <p>{{item.title}}</p>
            <p><span>&yen;{{item.price}}</span> <span>{{item.count}}人付款</span></p>
        </a>
    </div>
    <!--底部导航栏部分 -->
    <!-- <tabber></tabber>  -->
</div>
</template>
<script>
import tabber from "./tabber.vue";
export default {
    components:{
        "tabber":tabber
    },
    created(){
        this.load();
    },
    data(){
        return {
         list:[],
         list1:[],
         list2:[]
        }
    },
    methods:{
        load(){
            this.axios.get("index").then(res=>{
                if(res.data.code==1){
                  this.list=res.data.data;
                  this.list1=this.list.slice(0,4);
                  this.list2=this.list.slice(4);
                }
            })
        }
    }
}
</script>
<style scoped>
 .index a{
     text-decoration: none;
 }
 .index>.top{
    width:100%;
    height:60px;
    color:#fff;
    background: linear-gradient(60deg,#55ddff,#52a2fd);
    display:flex;
    flex-wrap:wrap;
    line-height:60px;
    position: fixed;
    z-index: 10;
} 
.index:before{
    content:"";
    display:table;
}
.mint-cell{
    min-height: 0;
}
 .index>.top>.login,.index>.top>.vip{
     color:#fff;
     text-decoration: none;
     margin: -3px 0 0 10px;
     font-size:13px;
 }
 .index .top>.input {
    margin-top:10px;
    width:220px;
    height:30px;
    font-size: 10px;
    margin-left:40px;
    border-radius: 30px;
    font-size:12px;
} 
.index>.top>.vip{
     margin-left:35px;
 }
.index .top>.hr{
    width:100%;
    border:1px solid transparent;
    margin:5px 0px;
}
.index .nav{
    background:linear-gradient(60deg,#55ddff,#52a2fd);
    padding-top:10px;
    color:#fff;
    height:40px;
    line-height: 40px;
    margin-top:60px;
}
.index .nav>span{
    font-size:14px;
    margin-left: 5px;
}
.index .nav>.button{
    width:70px;
    height:24px;
    color:#fff;
    font-size:12px;
    background-color:#55ddff;
    border:1px solid #eee;
    border-radius:12px ;
    margin:5px;
}
.index .middle p:first-child{
   color:#333;
   font-size:18px;
   margin-bottom:5px;
}
.index .middle p span{
    color:rgb(209, 8, 8);
    margin-left:78%;
}
.index .middle p:nth-child(2){
   color:#aaa;
   font-size:12px;
   margin-bottom: 5px;
}
.index .middle .picture{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around
}
.index .middle .picture div{
   width:48%;
}
.index .middle .picture div:nth-child(2){
    margin-bottom:15px;
}
.index .middle .picture div img{
    width:100%;
    height:180px;
}
/* 中间衣服的小图标部分的样式 */
.index .icons{
    display:flex;
    justify-content: space-around;
    
}
.index .icons  a{
    text-decoration: none;
    color:#999;
    text-align: center;
}
.index .icons .icon{
    width:43px;
    height:45px;
    background-image: url("../assets/clo-icon/backg.png")
}
.index .icons .icon.one{
    background-position: 0px -156px;
}
.index .icons .icon.two{
    background-position: -161px 0px;
}
.index .icons .icon.three{
    background-position: -105px -50px;
}
.index .icons .icon.four{
    background-position: 0px -50px;
}
.index .icons .icon.five{
    background-position: -108px -156px;
}
/* 衣服图片部分的样式 */
.index .cloth-picture{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top:25px;
    padding-bottom:30px;
}
.index .cloth-picture a{
    display: block;
    width:46%;
    height: 40vh;
    /* border:1px solid #aaa; */
    box-shadow: 1px 2px 3px 1px #ccc;
    border-radius: 5px;
    margin-bottom:10px;
}
.index .cloth-picture a img{
    width: 100%;
    height: 70%;
}
.index .cloth-picture a p{
    background-color:#fff; 
    margin-left:13px;
}
.index .cloth-picture a p:nth-child(2){
    font-size: 14px;
    color:#333;
    margin-bottom: 10px;
}
.index .cloth-picture a p:nth-child(3){
    margin-bottom:30px; 
}
.index .cloth-picture a p:nth-child(3) span:first-child{
    color:#f00;  
}
.index .cloth-picture a p:nth-child(3) span:nth-child(2){
    color:#aaa;
    margin-left:10%;
}
.index .cloth-picture a:last-child{
    margin-bottom:30px;
}
</style>
