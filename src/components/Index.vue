<template>
    <div class="index">
        <h1>
            Hello World!
        </h1>
        <p>一个前端工程师的简历</p>
    </div>
</template>

<script>
    export default {
        name:'Index'
    }
</script>

<style lang="less" scoped>
.index{
    text-align: center;
    color: #fff;
    animation:moveMedia 1s;
    h1{
        margin-top: 1rem;
        font-size: 0.925rem;
        font-size: 1.025rem;
        font-weight: normal;
    }
    p{
        font-size: 0.215rem;
        font-size: 0.315rem;
    }
}
</style>