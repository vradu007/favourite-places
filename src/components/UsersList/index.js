import React from 'react';

import SCUsersList from './styles';
import UserItem from './UsersItem/index';

const UsersList = (props) => {
	if (props.items.length === 0) {
		return (
			<div className="center">
				<h2>No users found</h2>
			</div>
		);
	}

	return (
		<ul>
			{props.items.map((user) => (
				<UserItem
					key={user.id}
					id={user.id}
					image={user.image}
					name={user.name}
					placeCount={user.places}
				/>
			))}
		</ul>
	);
};

export default UsersList;
