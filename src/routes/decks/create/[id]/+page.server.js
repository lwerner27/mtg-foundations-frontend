/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	let commander = await fetch(`https://api.scryfall.com/cards/${params.id}`);
	commander = await commander.json();

	return { commander };
}
