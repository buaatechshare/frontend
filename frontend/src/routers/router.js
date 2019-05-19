import defaultIndex from '../components/defaultIndex.vue';
import userIndex from '../components/userIndex.vue';
// import infoAlterView from '../components/InfoAlterView.vue'
// import MessageBoxList from '../components/BOXList/MessageBoxList.vue'
// import MyPaperBoxList from '../components/BOXList/MyPaperBoxList.vue'
// import MyPatentBoxList from '../components/BOXList/MyPatentBoxList.vue'
import PaperBoxList from '../components/BOXList/PaperBoxList.vue';
import PatentBoxList from '../components/BOXList/PatentBoxList.vue';
import PaperView from '../components/PaperView.vue';
// import ProfBoxList from '../components/BOXList/ProfBoxList.vue'
import register from '../components/SignupView.vue';
import login from '../components/LoginView.vue';
import evaluate from '../components/EvaluateView.vue';

export default [{
  path: '/',
  component: defaultIndex,
  children: [{
    // 当 /user/:id/profile 匹配成功，
    // UserProfile 会被渲染在 User 的 <router-view> 中
    path: 'papers',
    component: PaperBoxList,
  },
  {
    // 当 /user/:id/posts 匹配成功
    // UserPosts 会被渲染在 User 的 <router-view> 中
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
  },
  ],
},
{
  path: '/user',
  component: userIndex,
},
{
  path: '/paperview',
  component: PaperView,
},
];
