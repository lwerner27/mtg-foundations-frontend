/** @type {import('./$types').PageServerLoad} */
export async function load() {
	let commanders = [];

	// Get 3 random commanders from Scryfall
	for (let i = 0; i < 3; i++) {
		// Fetch a commander
		let response = await fetch('https://api.scryfall.com/cards/random?q=t%3Alegend%20t%3Acreature');
		response = await response.json();

		// Add the commanders to the page data
		commanders.push(response);
		setTimeout(() => null, 100);
	}

	return { commanders };
}
