<template>
	<div :class="{ 'bgcolor-grey': isactive }" class="p-3">
		<div class="title">{{ parentData.title }}</div>
		<div>{{ parentData.description }}</div>
		<a href="#" @click="changeTitle()">click to change the title</a>
	</div>
</template>

<script>
export default {
	name: 'SinglePost',
	props: {
		data: {
			type: Object,
			required: true,
			default: function() {
				return { title: 'Default post', description: 'Default description' };
			}
		},
		isactive: {
			type: Number,
			required: false,
			default: 1,
      validator: function(value){
        return value === 1 || value === 0
      }
		}
	},
	data() {
		return {
			parentData: this.data
		};
	},
	methods: {
		changeTitle() {
			this.parentData.title = 'changed title from singlepost';
		}
	}
};
</script>

<style>
.title {
	color: red;
	font-weight: bold;
}
.bgcolor-grey {
	background-color: rgb(199, 195, 195);
}
</style>
