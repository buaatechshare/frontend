import index from '../components/Index.vue'
import infoAlterView from '../components/InfoAlterView.vue'
import MessageBoxList from '../components/BOXList/MessageBoxList.vue'
import MyPaperBoxList from '../components/BOXList/MyPaperBoxList.vue'
import MyPatentBoxList from '../components/BOXList/MyPatentBoxList.vue'
import PaperBoxList from '../components/BOXList/PaperBoxList.vue'
import PatentBoxList from '../components/BOXList/PatentBoxList.vue'
import ProfBoxList from '../components/BOXList/ProfBoxList.vue'

export default [{
        path: "/",
        component: index,
        children: [{
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'papers',
                component: PaperBoxList
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'patents',
                component: PatentBoxList
            }
        ]
    },
    {
        path: "/infoAlterView",
        component: infoAlterView
    },
]