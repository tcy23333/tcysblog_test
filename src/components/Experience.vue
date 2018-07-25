<template>
    <div class="experience container main-content">
        <h2 class="main-h2">我的经历</h2>
        <ExpItem v-for="item in expItemList" :key="item.id" :isLeft='item.isLeft' :timeFrom='item.timeFrom' :timeTo='item.timeTo' :title='item.title' :subTitle='item.subTitle' :pTitle='item.pTitle' :content='item.content' />
    </div>
</template>

<script>
import ExpItem from '@/components/ExpItem'
    export default {
        name:'Experience',
        components:{
            ExpItem
        },
        data() {
            return {
                expItemList: [
                    {
                        id:'01',
                        isLeft:true,
                        timeFrom:'2017/10',
                        timeTo:'2018/06',
                        title:'成都驰云科技有限公司',
                        subTitle:'web前端工程师',
                        pTitle:'工作内容：',
                        content:[
                            '页面实现，熟练使用Vue，封装常用组件，进行页面开发及功能的实现',
                            '后台数据交互沟通，接口需求发布',
                            '检查优化代码，调试页面间的交互效果',
                            '根据分配的工作流程完成工作进度'
                        ]
                    },
                    {
                        id:'02',
                        isLeft:false,
                        timeFrom:'2017/01',
                        timeTo:'2017/10',
                        title:'四川易小保网络科技有限公司',
                        subTitle:'web前端工程师',
                        pTitle:'工作内容：',
                        content:[
                            '学习了解web前端开发，历史，工具，技术栈',
                            '完成项目页面开发',
                            '使用原生js完成已运行项目活动页面的开发添加'
                        ]
                    },
                    {
                        id:'03',
                        isLeft:true,
                        timeFrom:'2009/09',
                        timeTo:'2011/04',
                        title:'电子科技大学',
                        subTitle:'电子商务 专科',
                        pTitle:'主修课程：',
                        content:[
                            '客户关系管理、市场营销学、服务外包质量管理、ERP应用、营销心理学、大学英语'
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>

</style>