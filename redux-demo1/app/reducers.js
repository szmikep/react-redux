export default (state={number:0},action)=>{//每次调用都会传入state和当前通知的action
    switch(action.type){
        case "NUMBER_ADD": //发过来的action如果是NUMBER_ADD 就返回number++
            state.number++;
        break;
        case "NUMBER_LESS":
            state.number--;
        break;
    }
    return Object.assign({},state); //必须返回一个新的state ，可以使用assign合并 
}