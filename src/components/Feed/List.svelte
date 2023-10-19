<script lang="ts">
  import FeedbackItem from "./Item.svelte";
  import {fade, scale} from "svelte/transition"
  import {feedbackStore} from "../../lib/stores"
  // import {onMount, onDestroy} from "svelte"

  // let feedbacks = [];
  // console.log("feedbacks", feedbacks)

  // const unsuscribe = feedbackStore.subscribe(data => feedbacks = data)

  // onMount(() => {
  //   console.log("mounted")
  // })

  // onDestroy(() => {
  //   unsuscribe()
  // })

  </script>

  {#each $feedbackStore as fb} <!-- feedbacks -->
  
  <div transition:fade> <!-- in:scale out:fade="{{duration: 500}}" -->
    <FeedbackItem item={fb} />
  </div>
  {/each}

<style></style>