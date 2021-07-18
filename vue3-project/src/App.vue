<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<a href="#" @click.prevent="changeTitlefromParent()">Change Title</a>
				<h1>Posts</h1>
				<hr />
				<div v-for="post in posts" :key="post.title">
					<SinglePost :data="post" :isactive="1"></SinglePost>
					<br />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: [
				{
					title: 'Post 1',
					description: 'Post 1 Description'
				},
				{
					title: 'Post 2',
					description: 'Post 2 Description'
				}
			]
		};
	},
	methods: {
		changeTitlefromParent() {
			this.posts[0].title = 'changed the title from parent';
		}
	},
	name: 'App',
	components: {}
};
</script>

<style></style>
