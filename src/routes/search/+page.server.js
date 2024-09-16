/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	let response = await fetch(
		`https://api.scryfall.com/cards/search?q=${encodeURI(url.searchParams.get('term'))}`
	);

	response = await response.json();

	return { cards: response };
}
