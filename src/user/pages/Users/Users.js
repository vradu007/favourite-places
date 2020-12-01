import React from 'react';

import UsersList from '../../components/UsersList/UsersList'

const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'user 1',
        image: 'https://i2-prod.liverpool.com/incoming/article18453566.ece/ALTERNATES/s615/0_GettyImages-1210976964.jpg',
        places: 3
    },{
        id: 'u2',
        name: 'user 2',
        image: 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2020/02/15/2775728-57336575-2560-1440.jpg',
        places: 4
    }];

    return <UsersList items={USERS}/>;
}
 
export default Users;