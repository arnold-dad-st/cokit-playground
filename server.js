import { createServer } from 'node:http';

import {
    CopilotRuntime,
    GoogleGenerativeAIAdapter,
    copilotRuntimeNodeHttpEndpoint,
} from '@copilotkit/runtime';

import dotenv from 'dotenv';
dotenv.config();

if (!process.env.GOOGLE_API_KEY) {
    throw new Error('GOOGLE_API_KEY is not set');
}

const serviceAdapter = new GoogleGenerativeAIAdapter({
    model: 'gemini-2.0-flash',
});

const server = createServer((req, res) => {
    const runtime = new CopilotRuntime();
    const handler = copilotRuntimeNodeHttpEndpoint({
        endpoint: '/copilotkit',
        runtime,
        serviceAdapter,
    });

    return handler(req, res);
});

server.listen(4000, () => {
    console.log('Listening at http://localhost:4000/copilotkit');
});
