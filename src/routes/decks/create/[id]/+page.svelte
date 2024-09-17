<script>
	export let data;

	let { commander } = data;
</script>

<div class="container mx-auto">
	<section>
		<div class="grid grid-cols-3 gap-7">
			<img
				class="w-3/5"
				src={`${commander.image_uris.png ? commander.image_uris.png : commander.image_uris.normal}`}
				alt={`${commander.name}`}
			/>
		</div>
	</section>
</div>
