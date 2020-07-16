import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import Home from '@/components/Home'

import DemandManager from '@/components/DemandManager'
import DevOpsManager from '@/components/DevOpsManager'
import PatchManager from '@/components/PatchManager'
import VersionManager from '@/components/VersionManager'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Home,
      name: '版本管理',
      iconCls: 'el-icon-upload',
      children: [
        {
          path: '/versionmanager',
          name: '工单管理',
          component: VersionManager,
          meta: {
            keepAlive: true
          }
        },{
          path: '/patchmanager',
          name: '补丁管理',
          component: PatchManager
        }
      ]
    },{
      path: '/',
      component: Home,
      name: '运维管理',
      children: [
        {
          path: '/devopsmanager',
          iconCls: 'el-icon-first-aid-kit',
          name: '运维管理',
          component: DevOpsManager
        }
      ]
    }, {
      path: '/',
      component: Home,
      name: '需求管理',
      children: [
        {
          path: '/demandmanager',
          iconCls: 'el-icon-chat-dot-square',
          name: '需求管理',
          component: DemandManager
        }
      ]
    }
  ]
})
