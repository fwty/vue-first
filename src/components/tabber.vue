<template>
    <div>
        <!-- 切换面板 -->
        <mt-tab-container v-model="active">
            <!-- 首页 -->
            <mt-tab-container-item id="index">
                <index></index>
            </mt-tab-container-item>
            <!-- 购物车页面 -->
            <mt-tab-container-item id="cart">
                <cart></cart>
            </mt-tab-container-item>
            <!-- 我的页面 -->
            <mt-tab-container-item id="mine">
                <mine></mine>
            </mt-tab-container-item>  
        </mt-tab-container>
        <!-- 底部的导航栏 -->
        <mt-tabbar v-model="active" fixed>
            <mt-tab-item @click.native=" changState(0)" id="index">
            <tabbericon :focused="state[0].isSelect" :selectedimg="require('../assets/index/home1.png')"
             :normalimg="require('../assets/index/home.png')"></tabbericon>
            首页
            </mt-tab-item>
            <mt-tab-item @click.native=" changState(1)" id="smallpay">
            <tabbericon :focused="state[1].isSelect" :selectedimg="require('../assets/index/smallpay1.png')"
             :normalimg="require('../assets/index/smallpay.png')"></tabbericon>
            微淘
            </mt-tab-item>
            <mt-tab-item @click.native=" changState(2)" id="message">
            <tabbericon :focused="state[2].isSelect" :selectedimg="require('../assets/index/msg1.png')"
             :normalimg="require('../assets/index/msg.png')"></tabbericon>
            消息
            </mt-tab-item>
            <mt-tab-item @click.native="changState(3)" id="cart">
            <tabbericon :focused="state[3].isSelect" :selectedimg="require('../assets/index/cart1.png')"
             :normalimg="require('../assets/index/cart.png')"></tabbericon>
            购物车
            </mt-tab-item>
            <mt-tab-item @click.native="changState(4)" id="mine">
            <tabbericon :focused="state[4].isSelect" :selectedimg="require('../assets/index/mine1.png')"
             :normalimg="require('../assets/index/mine.png')"></tabbericon>
            我的
            </mt-tab-item>
        </mt-tabbar>

    </div>
</template>
<script>
//引入首页
import index from "./index.vue";
//引入购物车页面
import cart from "./cart.vue";
//引入我的页面
import mine from "./mine.vue"
//引入底部导航栏一部分
import tabbericon from "./tabbericon.vue";
export default {
    components:{
       "tabbericon":tabbericon,
       "index":index,
       "cart":cart,
       "mine":mine
    },
    data(){
        return{
            active:"index",
            state:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false}
            ]
        }
    },
    methods:{
       changState(id){
            var size=this.state.length;
            for(var i=0;i<size;i++){
                if(i==id){
                    this.state[i].isSelect=true;
                }else{
                    this.state[i].isSelect=false;  
                }
            }
       }
    }
}
</script>

