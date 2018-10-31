export default{
	/**
	 * [delayHidePopup 延迟隐藏弹窗]
	 */
	delayHidePopup({ commit }, status) {
		setTimeout(() => {
			commit('CHANGE_POPUP', status)
		}, 200)
	}
}