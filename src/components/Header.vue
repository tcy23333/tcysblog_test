<template>
    <div class="header-box">
        <div class="header container">
            <div class="logo">tcy's blog</div>
            <div class="nav-list-show">
                <ul>
                    <li v-for="(item,index) in navs" :key="index">
                        <router-link :to="item.path">{{item.title}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="nav">
                <div class="nav-btn" @click="btnDrap">  
                    <Icon type="navicon" />
                </div>
                <div class="nav-list-hide" :style="{display:isDrap}">
                    <ul>
                        <li v-for="(item,index) in navs" :key="index" @click.stop="isDrap='none'">
                            <router-link :to="item.path">{{item.title}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Header',
        data() {
            return {
                navs: [
                    {
                        path:'/',
                        title:'首页'
                    },
                    {
                        path:'/about',
                        title:'关于我'
                    },
                    {
                        path:'/skill',
                        title:'专业技能'
                    },
                    {
                        path:'/experience',
                        title:'我的经历'
                    },
                    {
                        path:'/project',
                        title:'项目经历'
                    },
                    {
                        path:'/contactMe',
                        title:'联系我'
                    }
                ],
                isDrap:'none'
            }
        },
        methods: {
            btnDrap() {
                if(this.isDrap == 'block'){
                    this.isDrap = 'none'
                }else if(this.isDrap == 'none'){
                    this.isDrap = 'block'
                }
            }
        },
    }
</script>

<style lang='less' scoped>
@media screen and (max-width: 768px){
    .nav-btn{
        display: block;
        font-size: 2em;
    }
    .nav-list-show{
        display: none;
    }
} 
@media screen and (min-width: 768px){
    .nav-list-show{
        display: block;
    }
    .nav-btn{
        display: none;
    }
}
.header-box{
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(18, 14, 13,.5);
}
.header{
    font-size: 1.5em;
    display: flex;
    line-height: 3em;
    .logo{
        flex:1;
    }
    .nav-list-show{
        ul{
            display: flex;
            li{
                padding: 0 10px;
                a{
                    color:#999;
                    &:hover{
                        color:#fff;
                    }
                }
            }
        }
    }
    .nav{
        .nav-list-hide{
            border-top: 1px solid #fff;
            position: absolute;
            z-index: 100;
            left: 0;
            top: 3em;
            width: 100%;
            text-align: center;
            background: rgba(18, 14, 13,.8);
            color: #fff;
            ul{
                li{
                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        color:#fff;
                    }
                }
            }
        }
    }
}
</style>