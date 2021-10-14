export const searchByInput = (expert, name) => {
	if (expert.first_name.includes(name)) return expert;
	else if (expert.last_name.includes(name)) return expert;
	else if (expert.service.toLowerCase() === name.toLowerCase()) return expert;
	else return;
};

export const restructureServiceName = (name) => {
	if (name === 'salesman') return 'Salesman';
	if (name === 'pr-support') return 'PR Support';
	const splitArray = name
		.split('-')
		.map((el) => el.charAt(0).toUpperCase() + el.substring(1, el.length));

	return splitArray.join(' ');
};

export const filterPendingUsers = (pendingUsers, id) => {
	return pendingUsers.filter((el) => el._id !== id);
};
