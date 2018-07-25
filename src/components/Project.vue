<template>
    <div class="project container main-content">
        <h2 class="main-h2">项目经历</h2>
        <ExpItem v-for="item in proList" :key="item.id" :isLeft='item.isLeft' :timeFrom='item.timeFrom' :timeTo='item.timeTo' :title='item.title' :subTitle='item.subTitle' :pTitle='item.pTitle' :content='item.content' />
    </div>
</template>

<script>
import ExpItem from '@/components/ExpItem'
    export default {
        name:'Project',
        components:{
            ExpItem
        },
        data() {
            return {
                proList: [
                    {
                        id:'01',
                        isLeft:true,
                        timeFrom:'2018/03',
                        timeTo:'2018/06',
                        title:'成都驰云科技有限公司承接的项目开发',
                        subTitle:'项目简介：车友汇app开发',
                        pTitle:'主要工作内容：',
                        content:[
                            '1.使用vue框架完成各项目页面开发',
                            '2.完成页面交互，沟通客户需求，更改页面',
                            '3.App的页面开发，数据交互',
                            '4.App开发的bug发现及解决',
                            '参与的模块：首页详情，轮播图，企业文化等详细介绍，车友汇项目的“我的”开发',
                            '开发人数：8人',
                            '开发技术：html css JavaScript vue node.js',
                            '开发工具：vscode，车友汇测试手机'
                        ]
                    },
                    {
                        id:'02',
                        isLeft:false,
                        timeFrom:'2017/05',
                        timeTo:'2017/10',
                        title:'开心购商城',
                        subTitle:'项目简介：PC端商城，后台管理系统',
                        pTitle:'主要工作内容：',
                        content:[
                            '1.切图后构建页面框架',
                            '2.依据设计图实现页面效果',
                            '3.对接后台数据交互，完善接口文档',
                            '4.维护后台管理系统，优化系统功能',
                            '参与的模块：商品列表，商品详情，购物车页面',
                            '开发人数：7人',
                            '开发技术：html css JavaScript ajax',
                            '开发工具：Hbuilder Photoshop'
                        ]
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>