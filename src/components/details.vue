<template>
   <div class="details">
        <!-- 顶部 -->
        <div class="top">
            <a href="./index">返回</a>
            <span>商品详情</span>   
        </div>
        <!-- 中间部分 -->
        <div class="middle">
            <div class="big-picture">
                <img :src="'http://127.0.0.1:4000/src/index_clothes/'+rows.imgurl">      
            </div>
            <p>&yen;{{rows.price}}</p>
            <p>{{rows.title}}</p>
            <p><span>快递:免邮费</span>  <span>月销:{{rows.count}}</span> <span>{{rows.city}}</span></p>
        </div>
        <!--底部部分  -->
        <div class="bottom">  
            <div>
                <a href="">
                    <img src="../assets/index/home.png"><br>
                    客服 <br>
                </a>
                <a href="">
                    <img src="../assets/index/cart.png"><br>
                    购物车
                </a>
            </div>
            <div>
                <a>
                    <button @click="addcart">
                        加入购物车
                    </button>
                </a>
                <a>
                    <button>
                        立即购买
                    </button>
                </a>
            </div> 
        </div>
        <!-- 弹出部分 -->
        <div class="bottomalert">   
            <div class="alertinfo">
                <!-- 弹出框 -->
                <div class="info">
                    <div class="picture">
                        <img :src="'http://127.0.0.1:4000/src/index_clothes/'+rows.imgurl">
                    </div>
                    <div class="price">
                        <p>{{rows.title}}</p>
                        <p>&yen;60.00</p>
                    </div>
                </div>
                <!-- 尺码部分 -->
                <div class="size">
                    <p>尺码</p>
                    <button @click="chose">S</button>
                    <button @click="chose">M</button>
                    <button @click="chose">L</button>
                </div>
                <!--购买数量部分 -->
                <div class="count">
                    <p>购买数量</p>
                    <div>
                        <button @click="subnum">-</button>
                        <input type="text" v-model="num">
                        <button @click="addnum">+</button>
                    </div>
                </div>
                <!-- 留言部分 -->
                <div class="mark">
                    <span>备注:</span>
                    <input type="text" placeholder="输入您的留言">
                </div>
                <!-- 按钮 -->
                <div class="button">
                    <button @click="insert">加入购物车</button>
                    <button>立即购买</button>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    data(){
       return{
         rows:{},
         num:"1"
       }
    },
    mounted(){
        this.details();
    },
    methods:{
        details(){
            var href=location.href;
            var id=href.split("=")[1]
            var url="details"
            var obj={pid:id}
            this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code==1){
                  this.rows=res.data.data[0];
                  console.log(this.rows)
                }
            })
        },
        addcart(){
            var bottomalert=document.getElementsByClassName("bottomalert")[0];
            bottomalert.classList.add("show")
            console.log(bottomalert)
            var alertinfo=document.getElementsByClassName("alertinfo")[0];
            alertinfo.classList.add("slip")
        },
        subnum(){
            if(this.num>0){
                this.num--;
            }else{
                this.num=0;
            }
        },
        addnum(){
            this.num++;
        },
        chose(){
          var size=document.getElementsByClassName("size")[0];
          var chosebutton=size.getElementsByTagName("button");
          for(var i=0;i<chosebutton.length;i++){
              chosebutton[i].classList.add="chose";
          }
        },
        insert(){
            
        }
    }
}
</script>
<style>
.details{
    position: relative;
    overflow: hidden;
}
/* 头部的样式 */
.details .top{
    width:100%;
    height:60px;
    background-color:rgb(98, 187, 238); 
    line-height: 60px;
    /* position: fixed;
    top:0px;
    z-index: 10; */
}
.details .top>a{
    text-decoration: none;
    color:#fff;
    font-size:13px;
    margin-left:10px;
}
.details .top>span{
    color:#fff;
    font-size:19px;
    text-align: center;
    margin-left:28%;
}
/* 中间部分的样式 */
.details .middle>.big-picture{
    width:95%;
    margin:0 auto;
}
.details .middle>.big-picture>img{
    width:100%;
}
.details .middle p:nth-child(2){
    color:#f00;
    font-size:22px;
    margin-left:13px;
}
.details .middle p:nth-child(3){
    color:#666;
    font-size: 22px;
    margin-left:10px;
}
.details .middle p:nth-child(4){
    color:#999;
    font-size: 14px;
}
.details .middle p:nth-child(4) span:nth-child(1){
    margin-left:10px;
}
.details .middle p:nth-child(4) span:nth-child(2){
    margin-left:100px;
}
.details .middle p:nth-child(4) span:nth-child(3){
    margin-left:77px;
}
/*底部按钮的样式 */
.details .bottom{
    display:flex;
    justify-content: space-between;
    position:fixed;
    bottom:0px;
}
.details .bottom a{
    color:#999;
    font-size:14px;
    text-decoration: none;
}
.details .bottom a>img{
    width:30px;
}
.details .bottom >div:nth-child(1){
    display: flex;
}
.details .bottom>div:nth-child(1)>a{
    margin-left:8px;
}
.details .bottom>div:nth-child(2)>a>button{
    width:140px;
    height:55px;
    font-size:18px;
    border:none;
    color:#fff;
}
.details .bottom>div:nth-child(2)>a:nth-child(1)>button:nth-child(1){
    background-color:#ff976a; 
}
.details .bottom>div:nth-child(2)>a:nth-child(2)>button:nth-child(1){
    background-color:#f44; 
}
/* 弹出框的样式 */
.details .bottomalert{
    width:100%;
    height:667px;
    position: absolute;
    top:0;
    transition: all 0.5s linear;
    z-index: -1;
}
.details .bottomalert.show{
    top:0;
    z-index: 1;
    background-color:rgba(0,0,0,0.5);
}
.details .bottomalert .alertinfo{
    background-color:#fff ; 
    font-size: 18px;
    position: fixed;
    top:100%;
    transition:all 0.2s linear;
}
.details .bottomalert .slip{
    top:56%;
    z-index: 10
}
.details  .bottomalert .alertinfo .info{
    display: flex;
    margin-left: 20px;
}
.details .bottomalert .alertinfo .info .picture{
    width:30%;
}
.details .bottomalert .alertinfo .info .picture>img{
    width:70%;
}
.details .bottomalert .alertinfo .info .price{
    margin-left:30px; 
}
.details .bottomalert .alertinfo .info .price p{
    margin-top:10px;
}
.details .bottomalert .alertinfo .info .price p:nth-child(1){
    font-size:20px;
    color:#aaa;
}
.details .bottomalert .alertinfo .info .price p:nth-child(2){
    font-size:18px;
    color:#f44;
}
.details .bottomalert .alertinfo .size{
    margin: 15px 0;
    margin-left: 20px;
}
.details .bottomalert .alertinfo .size p{
    margin-bottom: 5px;
}
.details .bottomalert .alertinfo .size button{
    width:40px;
    height: 20px;
    border:1px solid #aaa;
    margin-right:5px;
    background-color:#f9f9f9;
}
.details .bottomalert .alertinfo .size .chose{
    background-color: #f44;
}
.details .bottomalert .alertinfo .count{
    display:flex;
    justify-content: space-between;
    margin-bottom: 15px;
    margin-left: 20px;
}
.details .bottomalert .alertinfo .count div{
    margin-right:20px;
}
.details .bottomalert .alertinfo .count div button{
    width:25px;
    height:25px;
}
.details .bottomalert .alertinfo .count div input{
    width:28px;
    height:25px;
    border: none;
    text-align: center;
}
.details .bottomalert .alertinfo .mark{
    margin:0  0 10px 20px;
}
.details .bottomalert .alertinfo .mark input{
    border:none;
    margin-left:30px;
    height:30px;
    width:70%;
}
.details .bottomalert .alertinfo .button button{
    width:50%;
    height:55px;
    color:#fff;
    font-size: 18px;
    border:0;
}
.details .bottomalert .alertinfo .button button:nth-child(1){
    background-color:#ff976a;
}
.details .bottomalert .alertinfo .button button:nth-child(2){
    background-color: #f44;
}
</style>


