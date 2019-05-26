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
    path: '/user/:userID',
    redirect: { name: 'Upapers' },
    name: "user",
    component: userIndex,
    children: [
      {
        name: 'registerfinish',
        path: 'registerfinish',
        component: registerfinish,
      },
      {
        name: 'userspace',
        path: 'userspace',
        component: UserSpaceView,
        children:
          [
            {
              path: 'UserCollectionPaperView',
              component: UserCollectionPaperView
            },
            {
              path: 'UserCollectionPatentView',
              component: UserCollectionPatentView
            },
            {
              path: 'UserApplyView',
              component: UserApplyView
            },
          ]
      },
      {
        path: 'searchresult',
        redirect: { name: 'Usearchpaper' },
        component: SearchResultView,
        children: [
          {
            name: 'Usearchpaper',
            path: 'searchpaper',
            component: SearchPaperList,
          },
          {
            name: 'Usearchpatent',
            path: 'searchpatent',
            component: SearchPatentList,
          },
          {
            name: 'Usearchprof',
            path: 'searchprof',
            component: SearchProfList,
          },
        ],
      },
      {
        name: 'Upapers',
        path: 'papers',
        component: PaperBoxList,
      },
      {
        name: 'Upatents',
        path: 'patents',
        component: PatentBoxList,
      },
      {
        name: 'Upaperview',
        path: 'paperview',
        component: PaperView,
      },
      {
        name: 'Upatentview',
        path: 'patentview',
        component: PatentView,
      },
    ],
  },
  {
    path: '/',
    redirect: '/papers',
    component: defaultIndex,
    children: [
      {
        path: 'login',
        component: login,
      },
      {
        path: 'register',
        component: register,
      },
      {
        path: 'papers',
        component: PaperBoxList,
      },
      {
        path: 'patents',
        component: PatentBoxList,
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
        redirect: { name: 'searchpaper' },
        component: SearchResultView,
        children: [
          {
            name: 'searchpaper',
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
    ],
  }
]
