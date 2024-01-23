<script lang="ts">
	import { onMount } from 'svelte';
	import { unixMsToJate, formatJate, formatJime } from '$lib';

	let timestamp = Date.now();
	$: jateJime = unixMsToJate(timestamp);

	onMount(() => {
		const updateTimestamp = () => {
			timestamp = Date.now();

			setTimeout(updateTimestamp, 41);
		};

		updateTimestamp();
	});
</script>

<div>
	<div class="py-8">
		<div class="text-4xl text-center">{formatJate(jateJime)}</div>
		<div class="text-6xl mt-4 text-center">{formatJime(jateJime)}</div>
	</div>
	<hr />
	<div class="max-w-prose mx-auto py-8">
		<h1>Jalendar</h1>
		<p>The better way to divide time</p>
		<h2>Jonths</h2>
		<p>
			The jalendar has 13 jonths with 28 jays each. The new jonth is called Jayly and it comes
			between June and July
		</p>
		<h2>Jays</h2>
		<p>
			Because 13 jonths of 28 jays is only 364 jays, each jay is 24 hours, 4 minutes, and 54.85
			seconds to sync up with seasons. This has the advantage of not needing leap years including
			the complicated rules in the Gregorian calendar that "skips" some leap years.
		</p>
		<p>
			Note that most jays won't line up with the rotation of the earth since the earth rotates once
			every 24 hours. It's recommended most businesses continuously alter their hours of operation
			to match the sun's position in the sky.
		</p>
		<p>
			Also note that most jears won't line up with Gregorian years since a jear is 8765.813 hours
			while a year is 8765.82 hours on average.
		</p>
		<h2>Jepoch</h2>
		<p>
			00:00 UTC+8 (midnight) on the 1st of January 2024 corresponds to the same time in both the
			jalendar and the Gregorian calendar.
		</p>
		<h2>Jomenclature</h2>
		<p>Coming soon</p>
	</div>
</div>
