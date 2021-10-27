import Counter from "./send";
import {GUID} from "../constants/constants";


const metric_counter = new Counter();
const pageName = "random_images";
const requestId = String(Math.random()).substr(2, 12);

metric_counter.init(GUID, requestId, pageName);

const getBrowser = () => {
    if (/MSIE/.test(navigator.userAgent)) {
        return "Internet Explorer";
    } else if (/Edg/.test(navigator.userAgent)) {
        return "Edge";
    } else if (/Firefox/.test(navigator.userAgent)) {
        return "Firefox";
    } else if (/Opera/.test(navigator.userAgent)) {
        return "Opera";
    } else if (/YaBrowser/.test(navigator.userAgent)) {
        return "Yandex Browser";
    } else if (/Chrome/.test(navigator.userAgent)) {
        return "Google Chrome";
    } else if (/Safari/.test(navigator.userAgent)) {
        return "Safari";
    } else {
        return "other";
    }
};
const getPlatform = () => {
    if (
        /iPhone/.test(navigator.userAgent) ||
        /iPad/.test(navigator.userAgent) ||
        /Android/.test(navigator.userAgent) ||
        /Windows Phone/.test(navigator.userAgent) ||
        /BB10/.test(navigator.userAgent)
    ) {
        return "touch";
    } else {
        return "desktop";
    }
};

const getConnectionType = () => {
    return navigator.connection.effectiveType
    // return string? for example "4g"
}

const getLanguage = () => {
    return navigator.language
}

const getOs = () => {
    return navigator.platform
}

const getDeviceMemory = () => {
    return navigator.deviceMemory
}

metric_counter.setAdditionalParams({
    browser: getBrowser(),
    platform: getPlatform(),
    connectionType: getConnectionType(),
    os: getOs(),
    language: getLanguage(),
    deviceMemory: getDeviceMemory()
});

if (window.performance) {
    const [navigation] = window.performance.getEntriesByType("navigation");

    const connect = Math.round(navigation.connectEnd - navigation.connectStart);
    metric_counter.send("connect", connect);

    const reqRes = Math.round(navigation.responseEnd - navigation.requestStart);
    metric_counter.send("ttfb", reqRes);

    setTimeout(function () {
        let performance = window.performance;
        let entries = performance.getEntriesByType("paint");
        entries.forEach((entry) => {
            const { name, startTime } = entry;
            if (name === "first-contentful-paint") metric_counter.send("fcp", Math.round(startTime));
            else metric_counter.send("fp", Math.round(startTime));
        });
    }, 3000);
}

window.addEventListener("onLoadDogsImage", (event) => {
    const {timeStart} = event.detail
    const duration = performance.now() - timeStart
    metric_counter.send("loadDogsImages", Math.round(duration))
}, false)

window.addEventListener("onLoadCatsImage", (event) => {
    const {timeStart} = event.detail
    const duration = performance.now() - timeStart
    metric_counter.send("loadCatsImages", Math.round(duration))
}, false)

window.addEventListener("onLoadRandomImages", (event) => {
    const {timeStart} = event.detail
    const duration = performance.now() - timeStart
    metric_counter.send("loadRandomImages", Math.round(duration))
}, false)
