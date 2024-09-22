const postResources = async (url, data) => {

	const res = await fetch(`${url}`, {
		method: "POST",
		body: data
	});
        
	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}
        
	return await res.text();
};

export { postResources };