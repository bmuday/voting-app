<script lang="ts">
  import { feedbackStore } from "../../lib/stores";
  import Card from "./Card.svelte";

  export let item;

  const handleDelete = (itemId) => {
    feedbackStore.update((currentFeedbacks) => {
      return currentFeedbacks.filter(f => f.id !== itemId)
    })
  }

      </script>
    
      <Card>
        <div class="rating">{item.rating}</div>
        <button class="delete" on:click={() => handleDelete(item.id)}>X</button>
        <p class="text">{item.text}</p>
      </Card>
    
    <style>
      .rating{
        position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
      }

      .delete{
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
      }
    </style>