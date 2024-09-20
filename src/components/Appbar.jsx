import { useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from '../atoms';

//Asynchronous data queries

export const Appbar = () => {
    const networkNotificationCount = useRecoilValue(networkAtom)
    const jobAtomNotificationCount = useRecoilValue(jobsAtom);
    const messagingNotificationCount = useRecoilValue(messagingAtom);
    const notificationCount = useRecoilValue(notificationAtom);
    const totalNotificationsCount = useRecoilValue(totalNotificationSelector);

    // const totalNotificationsCount = useMemo(()=>{
    //  return networkNotificationCount + jobAtomNotificationCount + messagingNotificationCount + notificationCount;
    // },[networkNotificationCount , jobAtomNotificationCount , messagingNotificationCount , notificationCount]) 
  
    return (
      <>
        <button>Home</button>
        <button>My Network ({networkNotificationCount>=100 ? '99+': networkNotificationCount})</button>
        <button>Jobs ({jobAtomNotificationCount})</button>
        <button>Messaging ({messagingNotificationCount})</button>
        <button>Notifications ({notificationCount})</button>
        <button>Me ({totalNotificationsCount})</button>
      </>
    )
} 