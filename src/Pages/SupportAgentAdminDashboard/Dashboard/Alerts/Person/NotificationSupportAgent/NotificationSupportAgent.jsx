
import React from 'react';

import Notifications from './Notificatons/Notifications';
import NotificationsSetting from './NotificationsSetting/NotificationsSetting';

const NotificationSupportAgent = () => {

 return (
        <div className='lg2:grid grid-cols-2 gap-7 my-6'>
            <Notifications></Notifications>
           <NotificationsSetting></NotificationsSetting>

        </div>
    );
};

export default NotificationSupportAgent;