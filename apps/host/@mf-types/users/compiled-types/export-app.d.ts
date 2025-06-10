declare const RemoteApp: () => {
    render(info: import("@module-federation/bridge-react/v19").RenderParams): Promise<void>;
    destroy(info: import("@module-federation/bridge-react/v19").DestroyParams): void;
};
export declare const appName = "users";
export default RemoteApp;
