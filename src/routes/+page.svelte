<script>
	export let data;
	let { commanders } = data;
</script>

<section id="commander-search">
	<form class="w-6/12 mx-auto py-10">
		<input class="input" type="text" placeholder="Commander Name" />
	</form>
</section>

<section id="random-commander">
	<div class="container mx-auto flex flex-row justify-around">
		{#each commanders as commander}
			<a href={`/decks/create/${commander.id}`} class="w-3/12">
				<img
					src={`${commander.image_uris.png ? commander.image_uris.png : commander.image_uris.normal}`}
					alt={`${commander.name}`}
				/>
			</a>
		{/each}
	</div>
</section>
