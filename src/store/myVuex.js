let _Vue;
class Store {
    constructor(options) {
        // this.state = options.state;
        this.vm = new _Vue({
            data: {
                state: options.state
            }
        })
    }
    get state() {
        return this.vm.state;
    }
}

const install = function(Vue) {
    // 涉及vue生命周期的执行顺序（父子组件关系）
    _Vue = Vue;
    Vue.mixin({
        beforeCreate(){
            if (this.$options && this.$options.store){ // 如果是根组件
                this.$store = this.$options.store
            }else { //如果是子组件
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}

const Vuex = {
    Store,
    install,
}

export default Vuex;