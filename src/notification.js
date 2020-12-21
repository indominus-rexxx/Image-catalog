import React, { useEffect } from 'react';
import './notification.css';

const Notification = ({ notification, setNotification }) => {
    const removeNotice = useEffect(() => {
        if (notification) {
            setTimeout(() => setNotification(null), 3000)
        }
        return () => clearTimeout(removeNotice)
    }, [notification, setNotification])
    return (
        <div className='notification'>{notification}</div>
    )
}

export default Notification;