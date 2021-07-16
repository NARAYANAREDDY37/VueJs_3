// creating vue app
const app = Vue.createApp({
	data() {
		return {
			count: 0,
			name: 'Chinnapu Reddy'
		};
	},
	methods: {
		onIncrement() {
			this.count++;
		},
		onDecrement() {
			this.count--;
		},
		setName(event, lastName) {
			this.name = event.target.value + lastName;
		},
		onSubmit(event) {
			// event.preventDefault();
			alert('form submitted');
		}
	}
});

app.mount('#app');
