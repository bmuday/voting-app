<script lang="ts">
    import { feedbackStore } from "../../lib/stores";
    $: count = $feedbackStore.length
    $: average = Math.round(($feedbackStore.reduce((a, {rating}) => a + rating, 0)/ count)*100)/100
</script>

<div class="stats">
    <h4>{count} Reviews</h4>
    {#if count}
    <h4>Ratings Average: {average}</h4>
  {/if}
</div>

<style>
    .stats{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>