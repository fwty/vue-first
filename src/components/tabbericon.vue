<template>
    <div>
        <!-- 显示的图片 -->
        <img :src="focused?selectedimg:normalimg" class="img">
        <p></p>
    </div>
</template>
<script>
export default {
    props:{
        focused:"", //未选中的状态
        selectedimg:"", //选中时的图片链接
        normalimg:"",  //未选中是的图片的链接
    }
}
</script>
<style scoped>
 .img{
     width:25px;
     height:25px;
 }
</style>
