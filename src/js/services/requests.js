async function getRequest(url) {
	const res = await fetch(url);
        
	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}
        
	return await res.json();
}

export { getRequest };