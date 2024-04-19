import React, { useState, useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const activatorRef = useRef()
    const listRef = useRef()

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleClickOutside = (event) => {
        if (listRef.current.contains(event.target) || activatorRef.current.contains(event.target)) {
            return
        }
        setIsOpen(false)
    }

    const data = useStaticQuery(graphql`
    {
        allLinksJson {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `)

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        // clean up on unmount
        return function cleanup() {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

    return (
        <>
        <header className="h-24 z-50 relative container mx-auto px-6">
            <nav className="w-full flex items-center justify-start flex-wrap py-4 pin-t">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <a className="no-underline flex" href="/">
                        <span id="logo" className="text-2xl text-3xl font-bold text-black">
                        <StaticImage
                            src="../images/turn-key-solar-logo.png"
                            alt="SSR"
                            placeholder="blurred"
                            layout="constrained"
                            height={40}
                            imgStyle={{ 'object-position': 'right center' }}
                            objectFit="cover"
                        />
                        </span>
                    </a>
                </div>

                <div className="block md:hidden">
                    <button id="nav-toggle" ref={activatorRef} onClick={handleClick} className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

                <nav  ref={listRef} className={'w-full flex-grow md:flex md:items-center md:w-auto md:block pt-6 md:pt-0 ' + 
                (isOpen ? 'block' : 'hidden')} id="nav-content">
                    <ul className="list-reset md:flex justify-end flex-1 items-center">
                        {data.allLinksJson.edges.map(({ node }, index) => (
                            <li className="mr-3">
                                <a className="inline-block text-white no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href={node.slug}>{node.title}</a> 
                            </li>
                        ))}
                    </ul>
                </nav>
            </nav>
        </header>
        </>
    )
}

export default Header