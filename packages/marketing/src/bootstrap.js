import { createRoot } from 'react-dom/client';

import App from "./App";


const mount = (el) => {
    const root = createRoot(el);
    root.render(<App />)
}

if (process.env.NODE_ENV === 'development') {
    const rootDiv = document.getElementById("marketing-app-root");
    if (rootDiv) mount(rootDiv)
}

export { mount }