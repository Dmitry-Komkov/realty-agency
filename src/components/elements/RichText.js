import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import tw, { styled, css }from 'twin.macro'

const StyledMarkdown = styled(ReactMarkdown)(() => [
  css`
    p:not(:last-child) {
      ${tw`mb-4`}
    }

    h1 {
      ${tw`text-3xl mb-4 font-medium`}
    }

    h2 {
      ${tw`text-2xl mb-4 font-medium`}
    }

    h3 {
      ${tw`text-2xl mb-4 font-medium`}
    }

    h4 {
      ${tw`text-xl mb-4 font-medium`}
    }

    h5 {
      ${tw`text-sm mb-4 font-medium`}
    }
  `
])

const RichText = ({ content }) => {
  return (
    <StyledMarkdown children={content} remarkPlugins={[remarkGfm]} />
  )
}

export default RichText
