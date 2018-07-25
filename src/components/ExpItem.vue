<template>
    <div class="exp-item">
        <div class="left-box"></div>
        <div class="content-box">
            <div class="time">
                <p>{{timeFrom}}</p>
                <p>-</p>
                <p>{{timeTo}}</p>
            </div>
            <div :class="['content',{left:isLeft}]">
                <div class="item title">{{title}}</div>
                <div class="item sub-title">{{subTitle}}</div>
                <div class="item">
                    <p>{{pTitle}}</p>
                    <p v-for="(item,index) in content" :key="index">{{item}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ExpItem',
        props:{
            isLeft:{
                type:Boolean,
                default:false
            },
            timeFrom:String,
            timeTo:String,
            title:String,
            subTitle:String,
            pTitle:String,
            content:Array
        },
        mounted(){
            if(this.$el.clientWidth < 582){
                this.isLeft = false
                this.$el.style.marginLeft="20px"
                this.$el.children[0].style.display="none"
                this.$el.children[1].style.width="100%"
            }
        }
    }
</script>

<style lang="less" scoped>
.exp-item{
    display: flex;
    font-size: 1.2em;
    .left-box{
        width:50%;
    }
    .content-box{
        width: 50%;
        .time{
            border: 1px solid #fff;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-left: -50px;
            text-align: center;
            padding-top: 18px;
        }
        .content{
            padding: 10px;
            border-left: 2px solid #fff;
            width: 100%;
            &.left{
                margin-left:-100%;
                border-left: none;
                border-right: 2px solid #fff;
                text-align: right;
            }
            .title{
                font-size: 1.4em;
            }
            .sub-title{
                color: #ccc;
            }
        }
    }
}
</style>