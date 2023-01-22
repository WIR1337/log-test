import { writable } from "svelte/store";
// console.log(12345677);

// page 1
export let text = writable("");
export let objTest = writable({})
export let arrTest = writable([])
// page 2
export let objFirst = writable({})
export let objSecond = writable({})
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

// console.log("account", account);
