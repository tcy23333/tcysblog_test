<template>
    <div class="contact-me container main-content">
        <h2 class="main-h2">联系我</h2>
        <div class="my-img">
            <img src="../assets/img/my-img.jpg" alt="我的头像">
        </div>
        <Row class="contact-box container">
            <Col :xs="24" :md="8" class="item" v-for="(item,index) in contactList" :key="index">
                {{item}}
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name:'ContactMe',
        data() {
            return {
                contactList: ['电话：130-8281-0126','邮箱：1472017469@qq.com','QQ：1472017469']
            }
        },
    }
</script>

<style lang="less" scoped>
.contact-me{
    .my-img{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        overflow: hidden;
        margin: 20px auto;
        img{
            width: 100%;
        }
    }
    .contact-box{
        padding: 10px 0;
        font-size: 1.5em;
        .item{
            text-align: center;
            line-height: 2em;
        }
    }
}
</style>