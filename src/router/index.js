import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Experience from '@/components/Experience'
import Project from '@/components/Project'
import ContactMe from '@/components/ContactMe'
import NoFind from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
      path:'/skill',
      name:'Skill',
      component:Skill
    },
    {
      path:'/experience',
      name:'Experience',
      component:Experience
    },
    {
      path:'/project',
      name:'Project',
      component:Project
    },
    {
      path:'/contactMe',
      name:'ContactMe',
      component:ContactMe
    },
    {
      path:'*',
      name:NoFind,
      component:NoFind
    }
  ]
})
