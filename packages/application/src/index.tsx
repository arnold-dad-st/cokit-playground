import { createRoot } from 'react-dom/client';

import { App } from './app';

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

const root = createRoot(appContainer);
root.render(<App />);
