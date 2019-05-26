import defaultIndex from '../components/defaultIndex.vue';
import userIndex from '../components/userIndex.vue';
// import infoAlterView from '../components/InfoAlterView.vue'
// import MessageBoxList from '../components/BOXList/MessageBoxList.vue'
// import MyPaperBoxList from '../components/BOXList/MyPaperBoxList.vue'
// import MyPatentBoxList from '../components/BOXList/MyPatentBoxList.vue'
import PaperBoxList from '../components/BOXList/PaperBoxList.vue';
import PatentBoxList from '../components/BOXList/PatentBoxList.vue';
import SearchResultView from '../components/SearchResultView.vue';
import PaperView from '../components/PaperView.vue';
import PatentView from '../components/PatentView.vue';
import SearchPaperList from '../components/SearchBox/SearchPaperList.vue';
import SearchPatentList from '../components/SearchBox/SearchPatentList.vue';
import SearchProfList from '../components/SearchBox/SearchProfList.vue';
// import ProfBoxList from '../components/BOXList/ProfBoxList.vue'
import register from '../components/SignupView.vue';
import login from '../components/LoginView.vue';
import registerfinish from '../components/SignedView.vue';
import UserCollectionPaperView from '../components/UserSpace/UserCollectionPaperView.vue'
import UserCollectionPatentView from '../components/UserSpace/UserCollectionPatentView.vue'
import UserSpaceView from '../components/UserSpace/UserSpaceView.vue'
import UserApplyView from '../components/UserSpace/UserApplyView.vue'

export default [
  {
    path: 'login',
    component: login,
  },
  {
    path: 'paperview',
    component: PaperView,
  },
  {
    path: 'patentview',
    component: PatentView,
  },
  {
    path: 'searchresult',
    component: SearchResultView,
    children: [
      {
        path: 'searchpaper',
        component: SearchPaperList,
      },
      {
        path: 'searchpatent',
        component: SearchPatentList,
      },
      {
        path: 'searchprof',
        component: SearchProfList,
      },
    ],
  },
  {
    path: '/user',
    component: userIndex,
    children: [
      {
        path: 'registerfinish',
        component: registerfinish,
      },
    ],
  },
  {
    path: '/userspace',
    component: userIndex,
    children:
      [
        {
          path: '/userspace/UserCollectionPaperView',
          component: UserCollectionPaperView
        },
        {
          path: '/userspace/UserCollectionPatentView',
          component: UserCollectionPatentView
        },
        {
          path: '/userspace/UserSpaceView',
          component: UserSpaceView
        },
        {
          path: '/userspace/UserApplyView',
          component: UserApplyView
        },
      ]
  },
  {
    path: '/',
    component: defaultIndex,
    children: [{
      path: 'papers',
      component: PaperBoxList,
    },
    {
      path: 'patents',
      component: PatentBoxList,
    },
    {
      path: 'register',
      component: register,
    },
    {
      path: 'login',
      component: login,
    }, {
      path: '/user',
      component: userIndex,
    },
    {
      path: '/paperview',
      component: PaperView,
    },
    {
      path: '/patentview',
      component: PatentView,
    },
    ],
  }
]
