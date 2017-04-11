## 基本概念和 API
#### store
* store是用来保存数据（state）的地方，整个应用只能有一个store
* redux用createStore生成store，`import {createStore} from 'redux';const store = creatStore(fn)`

####state
* store里面包含的数据。如果想得到某个时点的数据，就在store生成对应的快照。这个快照对应的数据集合，就是state
* Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然。

####action
* view不能直接修改state，也不知道通过什么渠道修改state。action就是这个中间人，view通过发送action修改state
* Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。

####action creator
* view发送消息，需要生成action。这时就会用到一个函数来生成。
```
const ADD_TODO = '添加 TODO';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

const action = addTodo('Learn Redux');
```
#### store.dispatch
* store.dispatch是view发送action的唯一方法。
* `store.dispatch(addTodo('Learn Redux'));` 生成一个addTodoaction，被发送出去

#### reducer
* store收到action后，需要生产一个新的state来导致view发生变化。这个过程就是reducer
* Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
```
  const reducer = function (state, action) {
    // ...
    return new_state;
  };
``` 
#### 纯函数
* Reducer 是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。
* Reducer 不能改变state，只能生成新的state

#### store.subscribe()
* Store 允许使用store.subscribe方法设置监听函数，一旦state改变，就会执行该函数；
* 只有把view的更新函数（在react是指view的render方法或者setState方法）放入listener中，就会实现view的渲染

## store

```
store.getState()
store.dispatch()
store.subscribe()
```
## Reducer 的拆分

Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。
你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。

## 工作流程
![redux工作流程]('http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg')

1. 用户发出action
`store.dispatch(action)`
2. store调用reducer，并且传入两个参数，当前state和action，reducer返回新的state
`let nextState = todoApp(previousState, action);`
3. state一旦发生变化，store调用监听函数
`store.subscribe(listener)`
4. listener可以通过store.getState()得到当前状态。如果使用的是 React，这时可以触发重新渲染 View。
`function listerner() {
   let newState = store.getState();
   component.setState(newState);   
 }`
  
## react-redux用法

#### UI组件
1. 只负责UI的呈现，不带有任何业务逻辑
2. 没有状态（即没有this.state变量）
3. 所有数据都通过this.props获取
4. 不使用Redux的API
UI组件也叫‘纯组件’，如：
`const Title =  value => <h1>{value}</h1>;`
#### 容器组件
1. 负责管理数据和业务逻辑，不负责 UI 的呈现
2. 带有内部状态
3. 使用 Redux 的 API
总之，只要记住一句话就可以了：UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。React-redux规定，UI组件由用户提供，容器则由React-redux
自动生成。
#### connect()
给用户的UI组件生成容器，如
```angular2html
import {connect} from 'react-redux'
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
```
（1）输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数

（2）输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去

connect方法接受两个参数：mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑。
前者负责输入逻辑，即将state映射到 UI 组件的参数（props），后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
#### mapStateToProps
返回键值对组成的对象
```
const mapStateToPorps = (state) => {
    return {
        todos:getVisibleTodos(state.todos, state.visibilityFilter)
    }
}
const getVisibileTodos = （todos, filter）=> {
    switch(filter.){
    case 'SHOW_ALL':
        return todos;
    case 'SHOW_COMPLETED':
        return todo.filter(t=>t.completed);
    case 'SHOW_ACTIVE':
        return todo.filter(t=>！t.completed); 
    default:
        throw new Error('Unknown filter: ' + filter)
    }
}
```
mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，
重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
#### mapDispatcherToProps
定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。

它可以是一个函数，也可以是一个对象。

* 作为函数，将会有两个参数，dispatch和ownProps
```apple js
const mapDispatcherToProps = (dispatch, ownProps)=>{
    return {
        onClick: () =>{
            dispatch({
                type:'SET_VISIBILITYT_FILTER',
                filter: ownProps.filter
            });
        }
    };
}
```
* mapDispatchToProps是一个对象, 他的每个键名对应它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，
被当做是Action　creator，返回的action会被redux自动发送
```apple js
const mapDispatcherToProps = {
    onClick:(filter)=>{
        type:'SET_VISIBILITYT_FILTER',
        filter: ownProps.filter
    }
}
```
#### <Provider>组件
connect生成容器组件后，需要拿到state组件生成UI组件的参数

React-redux提供了Provider组件
```apple js
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './redux'
import App from './Componets/App'
let store = createStore('todoApp');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
```

## 异步操作
Action 发出以后，Reducer 立即算出 State，这叫做同步；Action 发出以后，过一段时间再执行 Reducer，
这就是异步。怎么才能 Reducer 在异步操作结束后自动执行呢？这就要用到新的工具：中间件（middleware）。

```apple js
let next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action);
  next(action);
  console.log('next state', store.getState());
}
```
中间件就是一个函数，对store.dispatch方法进行了改造，在发出 Action 和执行 Reducer 这两步之间，
添加了其他功能。
 
#### 中间件的用法
```apple js
import {applyMiddleware, createStore} from 'redux'
import createLogger from 'redux-logger'

const logger = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(logger)
);
```

#### 异步操作基本思路

1. 操作开始时，送出一个 Action，触发 State 更新为"正在操作"状态，View 重新渲染
2. 操作结束后，再送出一个 Action，触发 State 更新为"操作结束"状态，View 再一次重新渲染


