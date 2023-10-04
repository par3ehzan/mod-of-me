import { Manifest } from "@packages/core";
import action from "./action";
import success from "./success";
import error from "./error";
import loading from "./loading";

const manifest: Manifest = {
  slug: "giphy-picker",
  name: "Search and pick GIFs from Giphy",
  custodyAddress: "furlong.eth",
  custodyGithubUsername: "davidfurlong",
  logo: "https://i.imgur.com/wBKGHbT.png",
  version: "0.0.1",
  creationEntrypoints: action,
  elements: {
    "#success": success,
    "#error": error,
    "#loading": loading,
  },
};

export default manifest;
