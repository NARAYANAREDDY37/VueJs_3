// creating vue app
const app = Vue.createApp({
	data() {
		return {
			count: 0,
			name: 'Chinnapu Reddy',
			confirmedName: ''
		};
	},
	watch: {
		count(value){
			if(value > 5){
				this.count = 0;
			}
		}
	},
	computed: {
		fullName() {
			console.log('executed computed');
			return this.name;
		}
	},
	methods: {
		outputFullName() {
			console.log('outputfull name is executed');
			return this.name;
		},
		setConfirmedName() {
			this.confirmedName = this.name;
		},
		onSubmit(event) {
			// event.preventDefault();
			alert('form submitted');
		},
		/* setName(event) {
			this.name = event.target.value;
		}, */
		onIncrement() {
			this.count++;
		},
		onDecrement() {
			this.count--;
		}
	}
});

app.mount('#app');
