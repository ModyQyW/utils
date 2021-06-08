import { UAParser } from 'ua-parser-js';

const uaParser = new UAParser();

export const uaBrowser = () => uaParser.getBrowser();

export const uaDevice = () => uaParser.getDevice();

export const uaEngine = () => uaParser.getEngine();

export const uaOS = () => uaParser.getOS();

export const uaCPU = () => uaParser.getCPU();

export const uaResult = () => uaParser.getResult();

export const ua = () => uaParser.getUA();
