import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      src="//cdn.callibri.ru/callibri.js"
      type="text/javascript"
      charset="utf-8"
      defer
    ></script>,
  ])
}
