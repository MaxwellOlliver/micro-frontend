import { createBridgeComponent } from "@module-federation/bridge-react/v19";
import { App } from "./app";

const RemoteApp = createBridgeComponent({
  rootComponent: App,
});

export const appName = "dashboard";

export default RemoteApp;
