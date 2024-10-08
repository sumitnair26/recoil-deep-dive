import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

import { TODOS } from "./todo";

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

export const notification = atom({
    key:"notification",
    default:selector({
        key:"networkSelector",
        get: async() => {
            const res = await axios.get("http://localhost:3000/notifications")
            console.log(res.data);
            return res.data
        }
    })
})

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get: ({get})=>{
        // const network = get(networkAtom);
        // const jobs = get(jobsAtom);
        // const messaging = get(messagingAtom);
        // const notification = get(notificationAtom);
        // return network + jobs + messaging + notification;
        const allNotifications = get(notification);
        return allNotifications.jobs+ allNotifications.messaging + allNotifications.notifications + allNotifications.network
    }
})

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: id=>{
        return TODOS.find(x=>x.id ===id)
    }
})

export const todosSecAtomFamily = atomFamily({
    key: "todosSecAtomFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id)=>async({get})=>{
            await new Promise(r => setTimeout(r, 5000))
            throw new Error("Backend call failded")
            const res = await axios.get(`http://localhost:3000/getTodo?${id}`);
            return res.data;
        }
    })
})