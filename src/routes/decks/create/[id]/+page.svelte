<script>
	export let data;

	let { commander } = data;
</script>

<h1>{commander.name}</h1>
<img
	src={`${commander.image_uris.png ? commander.image_uris.png : commander.image_uris.normal}`}
	alt={`${commander.name}`}
/>
