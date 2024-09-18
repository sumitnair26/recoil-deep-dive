import { useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from '../atoms'
export const Appbar = () => {
    const networkNotificationCount = useRecoilValue(networkAtom)
    const jobAtomNotificationCount = useRecoilValue(jobsAtom);
    const messagingNotificationCount = useRecoilValue(messagingAtom);
    const notificationCount = useRecoilValue(notificationAtom);
  
    return (
      <>
        <button>Home</button>
        <button>My Network ({networkNotificationCount>=100 ? '99+': networkNotificationCount})</button>
        <button>Jobs ({jobAtomNotificationCount})</button>
        <button>Messaging ({messagingNotificationCount})</button>
        <button>Notifications ({notificationCount})</button>
        <button>Me</button>
      </>
    )
} 