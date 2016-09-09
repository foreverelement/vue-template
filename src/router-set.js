/**
 * 设置路由
 * @param  {[router]}vue-router路由器实例
 * @param  {[app]}app.vue根组件
 */
export default function routerSet(router, app) {
    /**
     * 定义路由规则
     *每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
     *创建的组件构造函数，也可以是一个组件选项对象。
     */
    router.map({
        //异步路由
        '/index': {
            component: function(resolve) {
                require.ensure([],
                    function() {
                        resolve(require('./components/index'));
                    });
            },
            name: 'index'
        },
        '/ok': {
            component: function(resolve) {
                require.ensure([],
                    function() {
                        resolve(require('./components/ok'));
                    });
            },
            name: 'ok'
        }


    })

}
