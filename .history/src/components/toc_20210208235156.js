import styled from "@emotion/styled"
import React from "react"
import tw from "twin.macro"

const ToC = ({ headings }) => (
  <div style={contentBlockStyle}>
    <h2 style={contentTitleStyle}>Contents</h2>
    <div style={contentInnerBlockStyle}>
      {headings.map(heading => {
        if (heading.depth > 4) {
          return <div />
        }

        return (
          <ToCElement key={heading.value}>
            <ToCLink
              href={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {heading.value}
            </ToCLink>
          </ToCElement>
        )
      })}
    </div>
  </div>
)

const contentBlockStyle = {
  'width': '18vw',
  'left': '0',
  'top': '80px',
  'maxHeight': '45vh',
  'left': '10px',
  'top': '0',
  'position': 'fixed'
}

const contentInnerBlockStyle = {
  'scrollbar-width': 'thin',
  'scrollbar-color': '#367ee9',
  'overflow': 'hidden',
}


const contentTitleStyle = {
  
}

const Title = tw.h2`text-2xl mb-2`

const ToCElement = tw.li`p-1 leading-5 ml-4 mb-4 mr-4 leading-3 list-none`

const ToCLink = tw.a`hover:text-black transition duration-300 no-underline`

const InnerScroll = styled.div`
  scrollbar-width: thin;
  scrollbar-color: #367ee9 rgba(48, 113, 209, 0.3);
  overflow: hidden auto;
`

export default ToC
