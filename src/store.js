import { writable } from "svelte/store";

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
