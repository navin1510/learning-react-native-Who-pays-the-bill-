import { registerRootComponent } from "expo";
import React from "react";
import { MyProvider } from "./src/context";

import App from './App';

const Provider = () => (
    <MyProvider>
        <App />
    </MyProvider>
)

registerRootComponent(Provider);