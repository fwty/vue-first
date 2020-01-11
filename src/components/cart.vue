<template>
    <div class="cart">
       <!-- 头部 -->
       <top title="购物车" admi="管理"></top>
       <!-- 中间身体部分 -->
       <div class="middle">
           <div class="checkbox">
                <input type="checkbox" >
                <span>{{rows.companyName}}</span>
           </div>
           <div class="bigMiddle">
                <div class="middleDiv">
                    <div class="leftPicture">
                        <img :src="'/src/index_clothes/'+rows.imgurl" > 
                    </div>
                    <div class="info">
                        <p>商品标题</p>
                        <p>{{rows.title}}</p>
                        <p>&yen;{{rows.price}} <span>×{{rows.count}}</span> </p>  
                    </div>  
                </div>
                <div class="button">
                    <button @click="sub">-</button>
                    <input type="text" v-model="count">    
                    <button @click="add">+</button>
                </div> 
            </div>
       </div>
        <!-- 底部按钮部分 -->
        <div class="bottom">
            <p>合计 : <span>&yen;{{this.count*rows.price}}</span></p>
            <button>提交订单</button>
        </div>
    </div>
</template>
<script>
// 引入top组件
import top from "./cartTop.vue";
export default {
      components:{
          "top":top
      },
      created(){
          this.load();
      },
      data(){
          return{
              rows:{},
              count:1,
          }
      },
      methods:{
          load(){
              //发送axios请求
              this.axios.get("cart").then(res=>{
                  this.rows=res.data.data[0];
                  console.log(this.rows)
              })
          },
          add(){
                this.count++;
          },
          sub(){
                if(this.count>0){
                   this.count--; 
                }else{
                    this.count=0;
                }
          }
      }
}
</script>
 <style scoped>
 .cart .middle{
    width:90%;
    margin-bottom:50px;
    position: relative;
    margin:0 auto; 
 }
.cart .middle .checkbox{
    width:90%;
    height: 40px;
    margin:20px auto 0;
    line-height: 40px;
    display: flex;
 }
.cart .middle .checkbox>input{
    width:25px;
    height:25px;
}
.cart .middle .checkbox>span{
    display: block;
    font-size:18px;
    margin:-6px 0 0 10px; 
}
.cart .middle .bigMiddle{
    background-color:#fafafa; 
    height:132px;
}
.cart .middle .middleDiv {
  display: flex;
}
.cart .middle .middleDiv .leftPicture{
    width:30%;
    margin-left: 30px;
}
.cart .middle .middleDiv .leftPicture>img{
    width: 100%;
}
.cart .middle .middleDiv .info{
   margin-left:30px;
}
.cart .middle .middleDiv .info p{
    color:#aaa;
    margin-bottom: 3px;
}
.cart .middle .middleDiv .info p:nth-child(1){
    font-size: 18px;
}
.cart .middle .middleDiv .info p:nth-child(3){
    color:#f00;
    display: flex;
}
.cart .middle .middleDiv .info p span{
    display:block;
    color:#666;
    margin-left:80px;
}
.cart .middle .button{
    position: absolute;
    top:140px;
    left:233px;
}
.cart .middle .button button{
    width:25px;
    height: 25px;
    border: none;
}
.cart .middle .button input{
    width:25px;
    height:25px;
    border: none;
    background-color:#ddd;
    margin:0 5px;
    text-align: center;
}
.cart .bottom{
    display: flex;
    position: fixed;
    bottom:55px;
    right:0;
}
.cart .bottom p{
    height: 50px;
    line-height: 50px;
    font-size:18px;
    margin-right:10px;
}
.cart .bottom span{
     color:#ff4444;

}
.cart .bottom button{
    width: 120px;
    height: 50px;
    border:none;
    background-color:#ff4444;;
    color:#fff;
    font-size:18px;
}
</style>




