import React, { useState } from 'react';
import WorkPanel from './work-panel';
import Notification from './notification';
import Images from './images';

const App = () => {
    const [images, setState] = useState([]);
    const [group, setGroup] = useState(false);
    const [notification, setNotification] = useState(null);
    const [tag, setTag] = useState('');
    
    return (
        <div>
            <WorkPanel
                    images={images}
                    setState={setState}
                    group={group}
                    setGroup={setGroup}
                    setNotification={setNotification}
                    tag={tag}
                    setTag={setTag}/>
            <Notification
                    notification={notification}
                    setNotification={setNotification}/>
            <Images
                    images={images}
                    group={group}
                    setTag={setTag}/>
        </div>
    )
};

export default App;