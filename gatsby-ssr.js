import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script type="module" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js"></script>,
    <script type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          window.hsConversationsSettings = {
            loadImmediately: false
          }
          if (window.HubSpotConversations) {
            onConversationsAPIReady();
          } else {
            window.hsConversationsOnReady = [onConversationsAPIReady];
          }
        `,
        }}
      />,
  ])
}
