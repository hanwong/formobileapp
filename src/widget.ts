import { createHTTPClient } from "@initia/utils"

declare global {
  interface Window {
    createWalletWidget?: any
  }
}

const layer = await createHTTPClient("https://omni-api.initiation-1.initia.xyz").get("/v1/registry/chains/layer1")
const widget = window?.createWalletWidget({ layer })

export default widget
