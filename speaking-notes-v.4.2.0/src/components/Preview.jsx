import React, { useContext } from 'react'
import { NoteContext } from './NoteContext'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { StyledPreview } from '../styles/Preview.style';
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'


function Preview() {

  const [noteText] = useContext(NoteContext);

  return (
    <StyledPreview>
    <ReactMarkdown className="preview-markdown" 
    children={noteText}
    remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
          children={String(children).replace(/\n$/, '')}
          style={atomDark}
          language={match[1]}
          PreTag="div"
          {...props}
          />
          ) : (
            <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}
    />
    </StyledPreview>
  )
}

export default Preview