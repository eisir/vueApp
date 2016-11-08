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
      path: '/more',
        component(resolve){
        require(['../views/more'],resolve);
      },
      name:'More'
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
      path: '/register',
        component(resolve){
        require(['../views/register'],resolve);
      }
    },
    {
      path: '/webservice',
        component(resolve){
        require(['../views/webservice'],resolve);
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