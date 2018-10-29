import Vue from 'vue'

/**
 * [setStore 存储localStorage]
 * @param {[String]} name    [key值]
 * @param {[String]} content [value值]
 */
export const setStore = function (name, content) {
	if (!name) return;

	if (typeof content !== 'string') {
		content = JSON.stringify(content)
	} 

	window.localStorage.setItem(name, content)
}


/**
 * [getStore 获取localStorage]
 * @param  {[String]} name [key值]
 * @return {[String]}      [返回存储的localStorage]
 */
export const getStore = function (name) {
	if (!name) return;

	return window.localStorage.getItem(name)
}

Vue.use({
	install(vm) {
		vm.prototype.$setStore = setStore;
		vm.prototype.$getStore = getStore
	}
})


