<template>
    <div class="infoTop">
        <a :href="href">{{admi}}</a>
        <span>{{title}}</span>   
    </div>
</template>
<script>
export default{
    props:{
        title:"",
        admi:"",
        href:""
    },
}
</script>
<style scoped>
.infoTop{
    width:100%;
    height:50px;
    background-color:rgb(98, 187, 238); 
    line-height: 50px;
    text-align: center;
    position: relative;
}
.infoTop>span{
    color:#fff;
    font-size:19px;
}
.infoTop>a{
    background-color: transparent;
    border:none;
    color:#fff;
    font-size:16px;
    position: absolute;
    top:2px;
    left:10px;
    text-decoration: none;
}
</style>