import React from "react"


export default TOC (contentElement) => {
    const headings = [...contentElement.querySelectorAll('h1, h2')]
    const parsedHeadings = headings.map(heading => {
      return {
        title: heading.innerText,
        depth: heading.nodeName.replace(/\D/g,''),
        id: heading.getAttribute('id')
      }
    })
    const htmlMarkup = parsedHeadings.map(h => `
    <li class="${h.depth > 1 ? 'pl-4' : ''}">
      <a href="#${h.id}">${h.title}</a>
    </li>
    `)
    const finalMarkup = `
      <ul>${htmlMarkup.join('')}</ul>
    `
    return finalMarkup
};
