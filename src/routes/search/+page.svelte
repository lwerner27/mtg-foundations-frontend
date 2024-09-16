<script>
	export let data;
</script>

<section id="commander-search">
	<form class="w-6/12 mx-auto py-10" action="/search">
		<input method="GET" class="input" type="text" placeholder="Commander Name" name="term" />
	</form>
</section>

<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 mx-10 mt-5">
	{#each data.cards.data as card}
		<a href={`/decks/create/${card.id}`}>
			<img src={`${card.image_uris.png}`} alt={`${card.name}`} />
		</a>
	{/each}
</div>
