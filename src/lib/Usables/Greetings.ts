const portuguese = ['bom dia_', 'boa tarde_', 'boa noite_'];
const english = ['good morning_', 'good afternoon_', 'good night_'];
const japaneseRomagi = ['ohayo_', "kon'nichiwa_", 'oyasuminasai_'];
const japaneseHiragana = ['おはよう_', 'こんにちは_', 'おやすみなさい_'];
const languages = [portuguese, japaneseRomagi, english, japaneseHiragana];
const specials = [
	"hi, it's late, get some sleep. 🛌",
	'😴 do you sleep at all?',
	'👻 hello zombie.'
];
const generic = [
	'oi_',
	'bem vindo_',
	'hi_',
	'welcome_',
	'ya_',
	'yo_',
	'irasshaimase_',
	'やあ_',
	'いらっしゃいませ_'
];
const getTime = (now) =>
	`<br /><span style="font-size: 1rem">It's ${now.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit'
	})}</span>`;

export default (): string => {
	let final = '';
	const now = new Date();
	const hours = now.getHours();
	const notZeroTime = hours !== 0;
	const halfChance = Math.random() < 0.5;
	const languageIndex = Math.round(Math.random() * (languages.length - 1));
	const genericIndex = Math.round(Math.random() * (generic.length - 1));

	if (hours <= 1 && notZeroTime) final = languages[languageIndex][2];
	else if (hours <= 2 && notZeroTime) return `${specials[0]}${getTime(now)}`;
	else if (hours <= 4 && notZeroTime) return `${specials[1]}${getTime(now)}`;
	else if (hours <= 6 && notZeroTime) return `${specials[2]}${getTime(now)}`;
	else if (hours <= 11 && notZeroTime) final = languages[languageIndex][0];
	else if (hours <= 18 && notZeroTime) final = languages[languageIndex][1];
	else if (hours <= 23 || !notZeroTime) final = languages[languageIndex][2];

	return halfChance ? final : generic[genericIndex];
};
