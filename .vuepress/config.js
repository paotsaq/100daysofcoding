module.exports = {
	title: 'Alex does the #100DaysOfCode 💥',
	description: '',
	theme: 'default-prefers-color-scheme',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/'},
			{ text: 'About', link: '/about/'},
			{ text: 'Blog', link: '/blog/'},
			{ text: 'GitHub', link: 'https://github.com/protsaq'},
			{ text: 'bzzzzzzz', link: 'https://bzzzzzzz.buzz'},
			{
				text: 'Toggle Dark Mode🌓',
				ariaLabel: 'Dark Mode Toggler',
				items: [
				  { text: 'Light', link: '#' },
				  { text: 'Dark', link: '#' }
				],
			}
		],
	},
	dest: 'public',
};
