import { writable } from "svelte/store";
console.log(12345677);

export let text = writable("");
const { subscribe, set, update } = writable({
  id: null,
  referral: null,
  username: "",
  signedIn: false,
  battletag: "",
  discord: "",
  telegram: "",
  bottag: "",
});
export const account = {
  subscribe,
  set,
  update,
};
