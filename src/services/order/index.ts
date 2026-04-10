import {
    cancelExpressOrder,
    requestPickup,
    trackExpressOrder,
} from "./express";
import {
    cancelInstantOrder,
    createInstantPickup,
    findNewInstantDriver,
    trackInstantOrder,
} from "./instant";

export const order = {
    express: {
        track: trackExpressOrder,
        cancel: cancelExpressOrder,
        requestPickup,
    },
    instant: {
        create: createInstantPickup,
        findNewDriver: findNewInstantDriver,
        cancel: cancelInstantOrder,
        track: trackInstantOrder,
    },
};
