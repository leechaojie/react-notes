// 引入 count 组件
import CountUI from '../../components/Count'

// 引入 comment 组件， 用于连接 ui 组件与 redux
import { connect } from 'react-redux'

// 引入 action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'

// 返回值作为状态传递给了 ui 组件
function mapStateToProps(state) {
	return {
		count: state
	}
}

// 返回值作为操作组件传递给了 ui 组件
function mapDispatchToProps(dispatch) {
	return {
		// 通知 redux 执行加法操作
		add: payload => dispatch(createIncrementAction(payload)),
		// 通知 redux 执行减法操作
		sub: payload => dispatch(createDecrementAction(payload)),
		// 通知 redux 执行异步加法操作
		addAsync: (payload, delay) => dispatch(createIncrementAsyncAction(payload, delay))
	}
}

// 创建并暴露 count 的容器组件
export default connect(
  // 将 state 中的 count 数据传递给 count 组件
  mapStateToProps,
  // 将 dispatch 中的方法传递给 count 组件
  mapDispatchToProps

)(CountUI)