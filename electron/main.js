const {join} = require('path');
const {app, BrowserWindow, ipcMain} = require('electron');
const Store = require('electron-store');

const store = new Store();
const dev = !app.isPackaged;

const createWindow = () => {
	const window = new BrowserWindow({
		width: 1920,
		height: 1080,
		minWidth: 800,
		minHeight: 600,
		webPreferences: {
			preload: join(__dirname, 'preload.js'),
			nodeIntegration: true,
		},
		title: 'Apricity',
		frame: false,
		fullscreen: true,
		icon: join(__dirname, '../assets/icons/icon512x512.png'),
	});

	window.removeMenu();

	if (dev) {
		void window.loadURL('http://localhost:3000');
	} else void window.loadFile('./dist/index.html');

	ipcMain.handle('browser:is-maximized', () => {
		return window.isMaximized();
	});
	ipcMain.handle('browser:toggle-maximize', () => {
		if (window.isMaximized()) void window.unmaximize();
		else void window.maximize();
	});
	ipcMain.handle('browser:minimize', () => {
		void window.minimize();
	});
	ipcMain.handle('browser:fullscreen', () => {
		void window.setFullScreen(true);
	});
	ipcMain.handle('browser:unfullscreen', () => {
		void window.setFullScreen(false);
	});
	ipcMain.handle('browser:close', () => {
		void window.close();
	});

	ipcMain.handle('store:get', (event, key) => {
		return store.get(key);
	});
	ipcMain.handle('store:set', (event, key, value) => {
		return store.set(key, value);
	});
	ipcMain.handle('store:delete', (event, key) => {
		return store.delete(key);
	});

	window.on('maximize', () => {
		window.webContents.send('browser:maximized');
	});
	window.on('unmaximize', () => {
		window.webContents.send('browser:unmaximized');
	});
};

void app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
