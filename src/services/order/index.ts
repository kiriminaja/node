import {
    cancelExpressOrder,
    requestPickupV5,
    requestPickupV61,
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
        requestPickupV5,
        requestPickupV61,
    },
    instant: {
        create: createInstantPickup,
        findNewDriver: findNewInstantDriver,
        cancel: cancelInstantOrder,
        track: trackInstantOrder,
    },
};
