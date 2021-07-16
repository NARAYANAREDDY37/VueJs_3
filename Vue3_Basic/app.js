// creating a vue instance or object

const app = Vue.createApp({
	data() {
		return {
			title: 'create a post data',
			link: 'https://v3.vuejs.org/',
			text1: '<h1>Hey, how are you!</h1>',
			text2: 'Hello, how are you!',
		};
	},
	methods: {
		getCourses() {
			return this.text1;
		},
		getText() {
			return this.text2;
		}
	}
});

app.mount('#app');
