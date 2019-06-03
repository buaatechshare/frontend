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
import ProfView from '../components/ProfView.vue';
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
import infoAlterView from '../components/UserSpace/InfoAlterView.vue'
import UserFollowView from '../components/UserSpace/UserFollowView.vue'
import UserMessageView from '../components/UserSpace/UserMessageView.vue'
import UserSendMessage from '../components/UserSpace/UserSendMessage.vue'
import ProfSpaceView from '../components/ProfSpace/ProfSpaceView.vue'
import ProfManageView from '../components/ProfSpace/ProfResourceAdmin.vue'
import ProfUploadView from '../components/ProfSpace/ProfUploadView.vue'
import AdminSpaceView from '../components/AdminView.vue';
import AdminApplyListView from '../components/AdminSpace/ApplyList.vue';
import AdminSourceListView from '../components/AdminSpace/SourceList.vue';
import AdminApplyView from '../components/AdminSpace/ApplyView.vue';
import AdminSourceView from '../components/AdminSpace/SourceView.vue';

export default [{
    path: '/user/:userID',
    redirect: {
      name: 'Upapers'
    },
    name: "user",
    props: true,
    component: userIndex,
    children: [{
        name: 'registerfinish',
        path: 'registerfinish',
        component: registerfinish,
      },
      {
        name:'adminspace',
        path:'adminspace',
        component:AdminSpaceView,
        children:[{
          name:'adminapplylistview',
          path:'adminapplylist',
          component:AdminApplyListView
        },
        {
          name:'adminsourcelistview',
          path:'adminsourcelist',
          component:AdminSourceListView
        },
        {
          name:'adminapplyview',
          path:'adminapply',
          component:AdminSourceView
        },
        {
          name:'adminsourceview',
          path:'adminsource',
          component:AdminSourceView
        }]
      },
      {
        name: 'userspace',
        path: 'userspace',
        component: UserSpaceView,
        props: true,
        children: [{
            name: 'UserCollectionPaperView',
            path: 'UserCollectionPaper',
            component: UserCollectionPaperView
          },
          {
            name: 'UserCollectionPatentView',
            path: 'UserCollectionPatent',
            component: UserCollectionPatentView
          },
          {
            name: 'UserApplyView',
            path: 'UserApply',
            component: UserApplyView
          },
          {
            name: 'infoAlterView',
            path: 'infoAlter',
            component: infoAlterView
          },
          {
            name: 'UserFollowView',
            path: 'UserFollow',
            component: UserFollowView
          },
          {
            name: 'UserMessageView',
            path: 'UserMessage',
            component: UserMessageView
          },
          {
            name: 'UserSendMessage',
            path: 'SendMessage',
            component: UserSendMessage
          }
        ]
      },
      {
        name: 'profspace',
        path: 'profspace',
        component: ProfSpaceView,
        props: true,
        children: [{
            name: 'PUserCollectionPaperView',
            path: 'UserCollectionPaper',
            component: UserCollectionPaperView
          },
          {
            name: 'PUserCollectionPatentView',
            path: 'UserCollectionPatent',
            component: UserCollectionPatentView
          },
          {
            name: 'PUserApplyView',
            path: 'UserApply',
            component: UserApplyView
          },
          {
            name: 'PinfoAlterView',
            path: 'infoAlter',
            component: infoAlterView
          },
          {
            name: 'PUserFollowView',
            path: 'UserFollow',
            component: UserFollowView
          },
          {
            name: 'PUserMessageView',
            path: 'UserMessage',
            component: UserMessageView
          },
          {
            name: 'PUserSendMessage',
            path: 'SendMessage',
            component: UserSendMessage
          },
          {
            name: 'PManageView',
            path: 'ProfManageView',
            component: ProfManageView
          },
          {
            name: 'ProfUploadView',
            path: 'ProfUploadView',
            component: ProfUploadView
          }
        ]
      },
      {
        path: 'searchresult',
        redirect: {
          name: 'Usearchpaper'
        },
        component: SearchResultView,
        children: [{
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
      {
        name: 'Uprofview',
        path: 'profview',
        component: ProfView,
      },
    ],
  },
  {
    path: '/',
    redirect: '/papers',
    component: defaultIndex,
    children: [{
        name: 'login',
        path: 'login',
        component: login,
      },
      {
        path: 'register',
        name: 'register',
        component: register,
      },
      {
        path: 'papers',
        name: 'papers',
        component: PaperBoxList,
      },
      {
        path: 'patents',
        path: 'patents',
        component: PatentBoxList,
      },
      {
        name: 'paperview',
        path: 'paperview',
        component: PaperView,
      },
      {
        name: 'patentview',
        path: 'patentview',
        component: PatentView,
      },
      {
        name: 'profview',
        path: 'profview',
        component: ProfView,
      },
      {
        path: 'searchresult',
        name: 'searchresult',
        redirect: {
          name: 'searchpaper'
        },
        component: SearchResultView,
        children: [{
            name: 'searchpaper',
            path: 'searchpaper',
            component: SearchPaperList,
          },
          {
            name: 'searchptent',
            path: 'searchpatent',
            component: SearchPatentList,
          },
          {
            name: 'searchprof',
            path: 'searchprof',
            component: SearchProfList,
          },
        ],
      },
    ],
  }
]