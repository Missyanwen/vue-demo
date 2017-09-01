export default [
    {
        path: '/',
        name: 'create',
        meta: {
            title: '主页',
        },
        component: (resolve) => require(['../views/create'], resolve)
    },
    {
        path: '*',
        component: {
            functional: true,
            render (createElement, context) {
                alert('404 - Page not found', '系统提示');
                setTimeout(()=>{
                    context.parent.$router.replace('/404');
                },1000)
            }
        }
    }
];