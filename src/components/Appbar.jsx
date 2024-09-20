import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notification, notificationAtom, totalNotificationSelector } from '../atoms';

//Asynchronous data queries

export const Appbar = () => {
    const networkNotificationCount = useRecoilValue(networkAtom)
    const jobAtomNotificationCount = useRecoilValue(jobsAtom);
    const messagingNotificationCount = useRecoilValue(messagingAtom);
    const notificationCount = useRecoilValue(notificationAtom);
    const totalNotificationsCount = useRecoilValue(totalNotificationSelector);

    const [networkCount, setNetworkCount] = useRecoilState(notification);

    useEffect(()=>{
        axios.get("http://localhost:3000/notifications")
        .then(res => {
            setNetworkCount(res.data)
        })
    })

    // const totalNotificationsCount = useMemo(()=>{
    //  return networkNotificationCount + jobAtomNotificationCount + messagingNotificationCount + notificationCount;
    // },[networkNotificationCount , jobAtomNotificationCount , messagingNotificationCount , notificationCount]) 
  
    return (
      <>
        <button>Home</button>
        <button>My Network ({networkCount.notifications>=100 ? '99+': networkCount.notifications})</button>
        <button>Jobs ({networkCount.jobs})</button>
        <button>Messaging ({networkCount.messaging})</button>
        <button>Notifications ({networkCount.notifications})</button>
        <button>Me ({totalNotificationsCount})</button>
      </>
    )
} 