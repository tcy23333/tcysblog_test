<template>
    <div class="skill container main-content">
        <h2 class="main-h2">专业技能</h2>
        <Row class="container">
            <Col class="li" :xs="24" :sm="12" :md="8" v-for="(item,index) in ulList" :key="index">
                <div class="title">{{item.title}}：</div>
                <div class="li-box">
                    <div class="li-bg" :style="{width:item.percentage + '%'}"></div>
                </div>
                <div class="li-num">{{item.percentage}}%</div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name:'Skill',
        data() {
            return {
                ulList:[
                    {
                        title:'HTML5',
                        percentage:90
                    },
                    {
                        title:'CSS3',
                        percentage:90
                    },
                    {
                        title:'ajax',
                        percentage:85
                    },
                    {
                        title:'JS/JQ',
                        percentage:90
                    },
                    {
                        title:'nodejs',
                        percentage:85
                    },
                    {
                        title:'MongoDB',
                        percentage:75
                    },
                    {
                        title:'Vue',
                        percentage:85
                    },
                    {
                        title:'git',
                        percentage:70
                    },
                    {
                        title:'webpack',
                        percentage:70
                    }
                ]
            }
        },
    }
</script>

<style lang="less" scoped>
@media screen and (min-width: 992px){
    .skill{
        padding-top: 0.8rem;
    }
}
.skill{
    .li{
        font-size: 1.5em;
        display: flex;
        padding:10px 0px 10px 20px;
        .title{
            width: 120px;
        }
        .li-box{
            width: 150px;
            height: 10px;
            margin: 10px;
            background: #ccc;
            .li-bg{
                background: #2d8cf0;
                height: 100%;
            }
        }
    }
}
</style>