import React from 'react';
import { allUsers } from '../data/allusers';

function UserPage() {
	return (
		<div>
            <p>{new Date().toLocaleTimeString()}</p>
			<ul>
				{allUsers.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default UserPage;
