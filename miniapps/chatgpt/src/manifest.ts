import { Manifest } from "@packages/core";
import action from "./action";
import success from "./success";
import error from "./error";
import loading from "./loading";

const manifest: Manifest = {
  slug: "gpt-mini-text",
  name: "Shorten using ChatGPT",
  custodyAddress: "furlong.eth",
  logo: "https://i.imgur.com/hlMzGht.png",
  custodyGithubUsername: "davidfurlong",
  version: "0.0.1",
  creationEntrypoints: action,
  elements: {
    "#success": success,
    "#error": error,
    "#loading": loading,
  },
};

export default manifest;
