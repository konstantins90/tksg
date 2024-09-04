import React, { useState, useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AOS from "aos"

import Logo from "../images/turn-key-sola-paderborn.svg"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [hideTimeout, setHideTimeout] = useState(null);
    const activatorRef = useRef();
    const listRef = useRef();
    const dropdownRef = useRef();

    const currentUrl = typeof window !== 'undefined' ? window.location.pathname : '';

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (listRef.current.contains(event.target) || activatorRef.current.contains(event.target)) {
            return;
        }
        setIsOpen(false);
        setDropdownVisible(false); // Close dropdown when clicking outside
    };

    const handleMouseEnter = () => {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            setHideTimeout(null);
        }
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setDropdownVisible(false);
        }, 1500); // 5 seconds delay
        setHideTimeout(timeout);
    };

    const data = useStaticQuery(graphql`
    {
        allLinksJson {
          edges {
            node {
              id
              slug
              title
              subLinks {
                slug
                title
                subLinks {
                    slug
                    title
                }
              }
            }
          }
        }
      }
    `)

    useEffect(() => {
        AOS.init();

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
            <nav id="main-nav" className="w-full flex items-center justify-start flex-wrap py-4 pin-t">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <a className="no-underline flex" href="/">
                        <span id="logo" className="text-2xl lg:text-3xl font-bold text-white">
                        {currentUrl == '/' ? (
                            <>Turn Key Solar GmbH</>
                        ) : (
                            <Logo id="svg-logo" />
                        )}
                        </span>
                    </a>
                </div>

                <div className="block md:hidden">
                    <button id="nav-toggle" ref={activatorRef} onClick={handleClick} className={"flex items-center px-3 py-2 border rounded text-grey border-grey-dark " + (isOpen ? 'active' : '')}>
                        <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
                            <path
                                    class="line top"
                                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                            <path
                                    class="line middle"
                                    d="m 30,50 h 40" />
                            <path
                                    class="line bottom"
                                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                        </svg>
                    </button>
                </div>

                <nav id="desktop" ref={listRef} className={'w-full flex-grow hidden md:flex md:items-center md:w-auto md:block pt-6 md:pt-0'}>
                    <ul className="list-reset md:flex justify-end flex-1 items-center">
                        {data.allLinksJson.edges.map(({ node }, index) => (
                            <>
                                {node.subLinks ? (
                                    <li
                                        className="mr-3 relative"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <a
                                            className="inline-block text-white no-underline hover:text-grey-lighter hover:text-underline py-2 px-4 uppercase font-bold"
                                            href={node.slug}
                                        >
                                            {node.title}
                                        </a>
                                        <ul
                                            ref={dropdownRef}
                                            className={`dropdown absolute left-0 mt-2 p-2 ${dropdownVisible ? 'block' : 'hidden'}`}
                                        >
                                            <div className="wrap">
                                                {node.subLinks.map((subLink, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        className={`py-2 px-4 ${subLink.subLinks ? '' : ''}`}
                                                    >
                                                        {subLink.subLinks ? (
                                                            <>
                                                                <span className="whitespace-nowrap font-bold">{subLink.title}</span>
                                                                <ul>
                                                                    {subLink.subLinks.map((sub2Link, sub2Index) => (
                                                                        <li key={sub2Index} className="py-1">
                                                                            <a href={sub2Link.slug}>{sub2Link.title}</a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <a href={subLink.slug}>{subLink.title}</a>
                                                            </>
                                                        )}
                                                    </li>
                                                ))}
                                            </div>
                                        </ul>
                                    </li>
                                ) : (
                                    <li
                                        className="mr-3 relative"
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <a
                                            className="inline-block text-white no-underline hover:text-grey-lighter hover:text-underline py-2 px-4 uppercase font-bold"
                                            href={node.slug}
                                        >
                                            {node.title}
                                        </a>
                                    </li>
                                )}
                            </>
                        ))}
                    </ul>
                </nav>

                <nav ref={listRef} className={'w-full flex-grow md:flex md:items-center md:w-auto md:block md:pt-0 block overflow-hidden opacity-1 ' + 
                (isOpen ? 'show' : '')} id="nav-content">
                    <div className="wrap px-5 pt-10 pb-20 text-center text-2xl font-light flex flex-col h-full">
                        <div className="logo">
                            <Logo id="svg-logo" className="h-[40px] mx-auto" />
                        </div>
                        <ul className="list-reset md:flex justify-end flex-1 items-center mt-10 pb-8 mb-8">
                            {data.allLinksJson.edges.map(({ node }, index) => (
                                <li className="">
                                    <a className="inline-block text-white no-underline hover:text-grey-lighter hover:text-underline py-4" href={node.slug}>{node.title}</a> 
                                </li>
                            ))}
                        </ul>
                        <div className="text-white mt-auto">
                            <div className="py-4">
                                E-Mail: <a href="mailto:info@turnkeysolar.de">info@turnkeysolar.de</a>
                            </div>
                            <div className="py-4">
                                Fon: <a href="tel: +4952549386539">+49 5254 9386539</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </nav>
        </header>
        </>
    )
}

export default Header