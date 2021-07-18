const app = Vue.createApp({
	data() {
		return {
			hobbies: ['reading', 'writing', 'playing']
		};
	}
});

app.component('hobbies-component', {
	template: `<ul class="list-group">
                  <li class="list-group-item" 
                  v-for="hobby in hobbies">
                  {{hobby}}
                  </li> 
              </ul>`,
	data() {
		return {
			hobbies: ['reading', 'writing', 'playing']
		};
	}
});
app.mount('#app');
