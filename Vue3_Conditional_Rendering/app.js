const app = Vue.createApp({
	data() {
		return {
			hobbies: [],
      text: '',
			enteredHobbyValue: '',
			userDetails: {
				firstName: 'George',
				lastName: 'Reddy',
				age: 24
			}
		};
	},
	methods: {
		onHobbySubmit() {
			this.hobbies.push(this.enteredHobbyValue);
			this.enteredHobbyValue = '';
		},
		removeHobby(index) {
			this.hobbies.splice(index, 1);
		}
	}
});

app.mount('#app');
