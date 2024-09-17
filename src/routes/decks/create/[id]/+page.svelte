<script>
	export let data;

	let { commander } = data;
	let lands = 0;
	let white = 0;
	let blue = 0;
	let black = 0;
	let red = 0;
	let green = 0;
	let zerocmc;
	let onecmc;
	let twocmc;
	let threecmc;
	let fourcmc;
	let fivecmc;
	let sixcmc;
	let sevencmc;
	let eightpluscmc;
</script>

<div class="container mx-auto">
	<section>
		<div class="grid md:grid-cols-3 gap-7">
			<div class="col mt-4">
				<img
					src={`${commander.image_uris.png ? commander.image_uris.png : commander.image_uris.normal}`}
					alt={`${commander.name}`}
				/>
			</div>
			<div class="form-control mt-4">
				<h4 class="h4">Mana Curve</h4>
				<input class="input mt-5" type="number" bind:value={zerocmc} placeholder="0 CMC Spells" />
				<input class="input mt-5" type="number" bind:value={onecmc} placeholder="1 CMC Spells" />
				<input class="input mt-5" type="number" bind:value={twocmc} placeholder="2 CMC Spells" />
				<input class="input mt-5" type="number" bind:value={threecmc} placeholder="3 CMC Spells" />
				<input class="input mt-5" type="number" bind:value={fourcmc} placeholder="4 CMC Spells" />
				<input class="input mt-5" type="number" bind:value={fivecmc} placeholder="5 CMC Spells" />
				<input class="input mt-5" type="number" bind:value={sixcmc} placeholder="6 CMC Spells" />
				<input class="input mt-5" type="number" bind:value={sevencmc} placeholder="7 CMC Spells" />
				<input
					class="input mt-5"
					type="number"
					bind:value={eightpluscmc}
					placeholder="8+ CMC Spells"
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
				<button
					type="button"
					class="btn bg-gradient-to-br variant-gradient-primary-tertiary w-full mt-4">SAVE</button
				>
			</div>
		</div>
	</section>
</div>
