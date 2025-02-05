import { UrlMetadata } from "@mod-protocol/core";
import { UrlHandler } from "../../types/url-handler";
import { fetchNFTMetadata, toUrlMetadata } from "../util";

async function handleZoraCollectUrl(url: string): Promise<UrlMetadata | null> {
  const [, , , , chainAndContractAddress] = url.split("/");

  let [chain, contractAddress] = chainAndContractAddress.split(":");

  const chainMapping = {
    eth: "ethereum",
    oeth: "optimism",
  };

  if (chainMapping[chain]) {
    chain = chainMapping[chain];
  }

  const nftMetadata = await fetchNFTMetadata({
    contractAddress,
    chain,
    mintUrl: url,
  });

  const urlMetadata: UrlMetadata = toUrlMetadata(nftMetadata);

  return urlMetadata;
}

const handler: UrlHandler = {
  matchers: ["https://zora.co/collect/.*"],
  handler: handleZoraCollectUrl,
};

export default handler;
