module.exports = { title: 'Alex does the #100DaysOfCode 💥',
	description: '',
	theme: 'default-prefers-color-scheme',
	themeConfig: {
		nav: [
			{ text: 'Home 🏡', link: '/'},
			{ text: 'About 🕺', link: '/about/'},
			{ text: 'Blog ✍️', link: '/blog/'},
			{ text: 'Wiki 📚', link: '/wiki/'},
			{ text: 'GitHub', link: 'https://github.com/protsaq'},
			{ text: 'bzzzzzzz', link: 'https://bzzzzzzz.buzz'}
		],
	},
	plugins: [
		"@kawarimidoll/tailwind",
		"axios",
	],
	dest: 'public',
};
