import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const jobsAtom = atom({
    key:"jobAtom",
    default: 10
})

export const messagingAtom = atom({
    key:"messagingAtom",
    default: 0
})

export const notificationAtom = atom({
    key:"notificationAtom",
    default: 102
})

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get: ({get})=>{
        const network = get(networkAtom);
        const jobs = get(jobsAtom);
        const messaging = get(messagingAtom);
        const notification = get(notificationAtom);
        return network + jobs + messaging + notification;
    }
})

