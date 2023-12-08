type JateJime = {
	jear: number;
	jonth: number; // 0 = January, 12 = December
	jay: number; // 1 - 28
	hour: number;
	minute: number;
	second: number; // decimal number
	weekJay: string;
};

const JEPOCH_ISO = '2024-01-01T08:00:00.000Z';
const JEPOCH_MS = new Date(JEPOCH_ISO).valueOf();
const JAY_MS = ((24 * 60 + 4) * 60 + 54.85) * 1000;
const OOOO = {
	0: 'January',
	1: 'February',
	2: 'March',
	3: 'April',
	4: 'May',
	5: 'June',
	6: 'Jayly',
	7: 'July',
	8: 'August',
	9: 'September',
	10: 'October',
	11: 'November',
	12: 'December'
};
const JJJ = {
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday',
	0: 'Sunday'
};

export function unixMsToJalendarMs(unixTimestampMs: number): number {
	return unixTimestampMs - JEPOCH_MS;
}

export function unixMsToJate(unixTimestampMs: number): JateJime {
	const jimestampMs = unixMsToJalendarMs(unixTimestampMs);

	const jays = jimestampMs / JAY_MS;

	// @todo(nick-ng): 90% sure seconds are calculated incorrectly
	const temp = jays / 364 + 2024;
	const jear = Math.floor(temp);
	const temp1 = (temp - jear) * 364;
	const tempJonth = temp1 / 28;
	const jonth = Math.floor(tempJonth);
	const temp2 = tempJonth - jonth;
	const tempJay = temp2 * 28;
	const jay = Math.floor(tempJay);
	const temp3 = tempJay - jay;
	const tempHour = temp3 * (24 + 4 / 60 + 54.85 / 3600);
	const hour = Math.floor(tempHour);
	const temp4 = tempHour - hour;
	const tempMinute = temp4 * 60;
	const minute = Math.floor(tempMinute);
	const temp5 = tempMinute - minute;
	// It needs to go 24:04:54.83, 24:04:54.84, 00:00:00.00
	const second = temp5 * 60;

	return {
		jear,
		jonth,
		jay,
		hour,
		minute,
		second,
		weekJay: JJJ[(jay % 7) as 0 | 1 | 2 | 3 | 4 | 5 | 6]
	};
}

function getOrdinal(n: number) {
	let ord = 'th';

	if (n % 10 == 1 && n % 100 != 11) {
		ord = 'st';
	} else if (n % 10 == 2 && n % 100 != 12) {
		ord = 'nd';
	} else if (n % 10 == 3 && n % 100 != 13) {
		ord = 'rd';
	}

	return ord;
}

export function formatJate(jateJime: JateJime): string {
	return `${jateJime.weekJay} the ${jateJime.jay}${getOrdinal(jateJime.jay)} of ${
		OOOO[jateJime.jonth as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12]
	} ${jateJime.jear}`;
}

export function formatJime(jateJime: JateJime): string {
	return `${jateJime.hour}:${jateJime.minute.toString().padStart(2, '0')}:${Math.floor(
		jateJime.second
	)
		.toString()
		.padStart(2, '0')} JM`;
}
