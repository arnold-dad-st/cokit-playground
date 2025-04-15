import '@servicetitan/testing-library';
import '@testing-library/jest-dom';

Object.defineProperties(window, {
    location: { value: window.location, writable: true, configurable: true },
    matchMedia: {
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onChange: null,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
        writable: true,
        configurable: true,
    },
    ResizeObserver: {
        value: jest.fn().mockImplementation(() => ({
            disconnect: jest.fn(),
            observe: jest.fn(),
            unobserve: jest.fn(),
        })),
        writable: true,
        configurable: true,
    },
});

/**
 * Polyfills required by Anvil2.
 */

import { TextDecoder, TextEncoder } from 'node:util';

Object.defineProperties(globalThis, {
    TextDecoder: { value: TextDecoder },
    TextEncoder: { value: TextEncoder },
});
