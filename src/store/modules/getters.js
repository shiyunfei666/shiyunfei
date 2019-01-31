const getters = {   //实时监听state值的变化(最新状态)
    isShow(state) {  //方法名随意,主要是来承载变化的showFooter的值
       return state.showFooter
    },
    getChangedNum(state){  //方法名随意,主要是用来承载变化的changableNum的值
       return state.changableNum
    }
};

export default getters;