const app = Vue.createApp({
	data() {
		return {
			count: 0
		};
	},
	methods: {
		updateCount() {
			this.count++;
		}
	},
	beforeCreate() {
		console.log('before create fired');
	},
	created() {
		console.log('created fired');
	},
	beforeMount() {
		console.log('before mount fired');
	},
	mounted() {
		console.log('mounted fired');
	},
	beforeUpdate() {
		console.log('before update fired');
	},
	updated() {
		console.log('updated fired');
	},
	beforeUnmount() {
		console.log('before unmount fired');
	},
	unmounted() {
		console.log('unmounted fired');
	}
});
app.mount('#app');

/* setTimeout(function () {
	app.unmount();
}, 3000);
 */