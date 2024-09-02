import { lazy } from 'react';
import { BaseLayout } from '@/components/layouts/BaseLayout';
import { FilePdfOutlined, ForkOutlined } from '@ant-design/icons';
import { IRouterConfig } from '@/types';


export const routersConfig: IRouterConfig[] = [{
  path: '/',
  layout: BaseLayout,
  element: lazy(() => import('@/views/home')),
  icon: '',
  title: ''
},
{
  path: '/basicData',
  layout: BaseLayout,
  element: lazy(() => import('@/views/basicData/index')),
  icon: <FilePdfOutlined />,
  title: '基础资料',
  children: [
    {
      path: '',
      layout: null,
      element: lazy(() => import('@/views/basicData/user/list/index')),
      title: '用户管理',
    },
    {
      path: 'role',
      layout: null,
      element: lazy(() => import('@/views/basicData/role/list/index')),
      title: '角色管理',
    },
  ],
},
{
  path: '/animation',
  layout: BaseLayout,
  element: lazy(() => import('@/views/animation/index')),
  icon: <ForkOutlined />,
  title: 'Animation',
  children: [
    {
      path: '',
      layout: null,
      element: lazy(() => import('@/views/animation/animationTemplate/index')),
      title: 'AnimationTemplate',
    },
    {
      path: 'loading',
      layout: null,
      element: lazy(() => import('@/views/animation/animationLoading/index')),
      title: 'Loading',
    },
    {
      path: 'answerCard',
      layout: null,
      element: lazy(() => import('@/views/animation/answerCard/index')),
      title: 'AnswerCard',
    },
  ],
},
{
  path: '/login',
  layout: null,
  element: lazy(() => import('@/views/login/index')),
  icon: '',
  title: '登陆',
},
];
