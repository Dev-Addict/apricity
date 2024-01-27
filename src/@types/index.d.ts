declare interface Window {
	browser: {
		isMaximized(): Promise<boolean>;
		toggleMaximize(): Promise<void>;
		minimize(): Promise<void>;
		fullscreen(): Promise<void>;
		unfullscreen(): Promise<void>;
		close(): Promise<void>;
		onMaximized(callback: () => void): Promise<void>;
		onUnmaximized(callback: () => void): Promise<void>;
	};
	store: {
		get(key: string): Promise<string | null>;
		set(key: string, value: string): Promise<void>;
		delete(key: string): Promise<void>;
	};
}
