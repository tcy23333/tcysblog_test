<template>
    <div class="about-me container main-content">
        <h2 class="main-h2">关于我</h2>
        <div class="my-img">
            <img src="../assets/img/my-img.jpg" alt="我的头像">
        </div>
        <p v-for="(item,index) in pList" :key="index">{{item}}</p>
    </div>
</template>

<script>
    export default {
        name:'About',
        data() {
            return {
                pList: ['我叫唐春娅，是一个学习能力较强的人。在大学时间里学习踏实，充分掌握了所需技能。在生活上，性格乐观，做事积极，有责任心，待人友善。个性随和谦虚、自信、自律；积极创新，善于沟通，有一定的组织协调能力，具有较强的团队合作精神，能够快速适应新的环境。这些经历，使我具备了一定的组织协调能力、处理应对各种问题的能力，这些能力在工作中是不可或缺的。','优点是吃苦耐劳，以完成项目优先，工作认真，好学好问，容易相处，一般不会与同事有纠纷产生。对主流框架开发有一定经验，学习能力较强，如果需要学习新的框架或者技术，学习接收能力比较快。在众多应聘者中，我不一定是最优秀的，但我仍然很有自信。“怀赤诚以待明主，持经论以待明君”。我真诚地希望能成为贵公司的一员, 我将以高尚的品德、热情的服务，倾我所能，不断学习，为贵单位发展事业贡献一份力量。最后，祝贵单位纳得良才，业绩蒸蒸日上！'],
                show:true
            }
        }
    }
</script>

<style lang="less" scoped>
.about-me{
    .my-img{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        overflow: hidden;
        margin: 10px auto;
        img{
            width: 100%;
        }
    }
    p{
        padding: 10px 0;
        text-indent:2em;
        font-size: 1.5em;
    }
}
</style>