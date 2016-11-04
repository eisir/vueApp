export default {
  mode: 'history',
  routes: [    
    {
      path: '/',
        component(resolve){
        require(['../views/home'],resolve);
      },
      name:'Home'
    },
    {
      path: '/home',
        component(resolve){
        require(['../views/home'],resolve);
      },
      name:'Home'
    },
    {
      path: '/list',
        component(resolve){
        require(['../views/list'],resolve);
      },
      name:'List'
    },
    {
      path: '/user',
        component(resolve){
        require(['../views/user'],resolve);
      },
      name:'User'
    },
    {
      path: '/user/:id',
        component(resolve){
        require(['../views/user/profile'],resolve);
      }
    },
    {
      path: '/reg',
        component(resolve){
        require(['../views/register'],resolve);
      }
    },
    {
      path: '/login',
        component(resolve){
        require(['../views/login'],resolve);
      }
    },    
    {
      path: '*',
        component(resolve){
        require(['../views/notfound'],resolve);
      }
    }
  ]
};