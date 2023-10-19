

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<script lang="ts">
  import FeedbackList from "./components/Feed/List.svelte";
  import FeedbackStats from "./components/Feed/Stats.svelte";
  import Form from "./components/AddFeed/Form.svelte";

</script>

<main class="container">
  <Form />
  <FeedbackStats />
  <FeedbackList/>
</main>

<style>
</style>

