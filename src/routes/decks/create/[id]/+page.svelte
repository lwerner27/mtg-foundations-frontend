<script>
	export let data;

	let { commander } = data;
	let lands = 0;
	let white = 0;
	let blue = 0;
	let black = 0;
	let red = 0;
	let green = 0;
	let zerocmc = 0;
	let onecmc = 0;
	let twocmc = 0;
	let threecmc = 0;
	let fourcmc = 0;
	let fivecmc = 0;
	let sixcmc = 0;
	let sevenpluscmc = 0;

	const handleSave = async () => {
		const deckData = {
			commander: commander.name,
			cardtext: commander.oracle_text,
			cmc: commander.cmc,
			lands,
			zerocmc,
			onecmc,
			twocmc,
			threecmc,
			fourcmc,
			fivecmc,
			sixcmc,
			sevenpluscmc,
			white,
			blue,
			black,
			red,
			green
		};
		console.log(deckData);
	};
</script>

<div class="container px-5 mx-auto">
	<section>
		<div class="grid md:grid-cols-4 gap-7">
			<div class="col mt-4">
				<img
					src={`${commander.image_uris.png ? commander.image_uris.png : commander.image_uris.normal}`}
					alt={`${commander.name}`}
				/>
			</div>
			<div class="form-control mt-4">
				<h4 class="h4">Mana Base</h4>
				<label class="label mt-2">
					<span>Lands</span>
					<input class="input" type="number" bind:value={lands} />
				</label>
				<label class="label mt-2">
					<span>White Sources</span>
					<input class="input" type="number" bind:value={white} />
				</label>
				<label class="label mt-2">
					<span>Blue Sources</span>
					<input class="input" type="number" bind:value={blue} />
				</label>
				<label class="label mt-2">
					<span>Black Sources</span>
					<input class="input" type="number" bind:value={black} />
				</label>
				<label class="label mt-2">
					<span>Red Sources</span>
					<input class="input" type="number" bind:value={red} />
				</label>
				<label class="label mt-2">
					<span>Green Sources</span>
					<input class="input" type="number" bind:value={green} />
				</label>
			</div>
			<div class="md:col-span-2 form-control mt-4">
				<h4 class="h4">Mana Curve</h4>
				<div class="md:grid md:grid-cols-2 gap-7">
					<div class="col">
						<label class="label mt-2">
							<span>0 CMC Spells</span>
							<input class="input mt-5" type="number" bind:value={zerocmc} />
						</label>
						<label class="label mt-2">
							<span>1 CMC Spells</span>
							<input class="input mt-5" type="number" bind:value={onecmc} />
						</label>
						<label class="label mt-2">
							<span>2 CMC Spells</span>
							<input class="input mt-5" type="number" bind:value={twocmc} />
						</label>
						<label class="label mt-2">
							<span>3 CMC Spells</span>
							<input class="input mt-5" type="number" bind:value={threecmc} />
						</label>
					</div>
					<div class="col">
						<label class="label mt-2">
							<span>4 CMC Spells</span>
							<input class="input mt-5" type="number" bind:value={fourcmc} />
						</label>
						<label class="label mt-2">
							<span>5 CMC Spells</span>
							<input class="input mt-5" type="number" bind:value={fivecmc} />
						</label>
						<label class="label mt-2">
							<span>6 CMC Spells</span>
							<input class="input mt-5" type="number" bind:value={sixcmc} />
						</label>
						<label class="label mt-2">
							<span>7+ CMC Spells</span>
							<input class="input mt-5" type="number" bind:value={sevenpluscmc} />
						</label>
					</div>
				</div>
				<button
					on:click={handleSave}
					type="button"
					class="btn bg-gradient-to-br variant-gradient-primary-tertiary w-full mt-9">SAVE</button
				>
			</div>
		</div>
	</section>
</div>
