const {contextBridge, ipcRenderer} = require('electron');

window.addEventListener('DOMContentLoaded', () => {
	const replaceText = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerText = text;
	};

	for (const dependency of ['chrome', 'node', 'electron']) {
		replaceText(`${dependency}-version`, process.versions[dependency]);
	}
});

contextBridge.exposeInMainWorld('browser', {
	isMaximized: () => ipcRenderer.invoke('browser:is-maximized'),
	toggleMaximize: () => ipcRenderer.invoke('browser:toggle-maximize'),
	minimize: () => ipcRenderer.invoke('browser:minimize'),
	fullscreen: () => ipcRenderer.invoke('browser:fullscreen'),
	unfullscreen: () => ipcRenderer.invoke('browser:unfullscreen'),
	close: () => ipcRenderer.invoke('browser:close'),
	onMaximized: (callback) => {
		ipcRenderer.on('browser:maximized', callback);
	},
	onUnmaximized: (callback) => {
		ipcRenderer.on('browser:unmaximized', callback);
	},
});

contextBridge.exposeInMainWorld('store', {
	get: (key) => ipcRenderer.invoke('store:get', key),
	set: (key, value) => ipcRenderer.invoke('store:set', key, value),
	delete: (key) => ipcRenderer.invoke('store:delete', key),
});
