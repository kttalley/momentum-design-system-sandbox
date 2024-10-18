// global-polyfill.js
import { window } from 'browser-globals';

const global = typeof window !== 'undefined' ? window : this;

export default global;
