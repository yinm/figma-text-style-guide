import { pluginMessagesFromUi } from "../../shared/types/pluginMessagesFromUi";

/**
 * ref: https://www.figma.com/plugin-docs/creating-ui/#sending-a-message-from-the-plugin-code-to-the-ui
 */
export function postMessageFromUi(pluginMessage: pluginMessagesFromUi) {
  parent.postMessage(
    {
      pluginMessage, // values must be sent on a `pluginMessage` property
    },
    "*", // must be '*'
  );
}
