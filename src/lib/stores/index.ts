import { writable, type Writable } from "svelte/store";
import type {Feedback} from "../types";

export const feedbackStore: Writable<Feedback[]> = writable([
  {
    id: 1,
    rating: 8,
    text: "lorem ipsum",
  },
  {
    id: 2,
    rating: 5,
    text: "lorem ipsum",
  },
  {
    id: 3,
    rating: 7,
    text: "lorem ipsum",
  },
  {
    id: 4,
    rating: 9,
    text: "lorem ipsum",
  },
]);
