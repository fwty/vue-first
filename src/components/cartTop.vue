<template>
    <div class="carTop">
        <span>{{title}}</span>   
        <button>{{admi}}</button>
    </div>
</template>
<script>
export default{
    props:{
        title:"",
        admi:""
    },
}
</script>
<style scoped>
.carTop{
    width:100%;
    height:50px;
    background-color:rgb(98, 187, 238); 
    line-height: 50px;
    text-align: center;
    position: relative;
}
.carTop>span{
    color:#fff;
    font-size:19px;
}
.carTop>button{
    background-color: transparent;
    border:none;
    color:#fff;
    font-size:16px;
    position: absolute;
    top:14px;
    right:10px;
}
</style>