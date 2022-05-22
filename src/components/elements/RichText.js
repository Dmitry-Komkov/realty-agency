import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'

const RichText = ({ content }) => {
  return (
    <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
  )
}

export default RichText
