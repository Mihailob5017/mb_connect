export const searchByInput = (expert, name) => {
	if (expert.first_name.includes(name)) return expert;
	else if (expert.last_name.includes(name)) return expert;
	else if (expert.title.toLowerCase() === name.toLowerCase()) return expert;
	else return;
};
