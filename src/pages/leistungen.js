import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import TabsDachanlagen from "../components/tabs-dachanlagen"
import TabsLandanlagen from "../components/tabs-landanlagen"
import Kontakt from "../components/kontakt"

import { ArrowTrendingUpIcon, WrenchScrewdriverIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const imageQuery = graphql`
query Image {
    allImageSharp(filter: {fluid: {originalName: {eq: "26429.jpg"}}}) {
        nodes {
            fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
            }
        }
    }
}`

const imageQuery1 = graphql`
query Image {
    allImageSharp(filter: {fluid: {originalName: {eq: "2830.jpg"}}}) {
        nodes {
            fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
            }
        }
    }
}`

export default function Home({ data }) {
    const sourceData = useStaticQuery(imageQuery)
    const imageBg = sourceData.allImageSharp.nodes
  return (
    <Layout>
        <div id="banner" class="-mt-24 relative w-full py-12 px-12">
            <StaticImage
                src="../images/turnkey-solar-banner-photovoltaik-analge.webp"
                alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                placeholder="blurred"
                layout="constrained"
                width={1980}
                imgStyle={{ 'object-position': 'right center' }}
                objectFit="cover"
                class="w-full h-24 absolute inset-0 object-cover"
            />
            <div class="w-full h-full absolute inset-0 img-overlay dark"></div>
        </div>

        <div className="bg bg-white pb-40" data-aos="fade-up">
            <div id="about">
                <div className="container xl:max-w-[60%] py-40 text-center">
                    <h1 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Leistungen</h1>
                    <div className="text-lg xl:text-2xl text-center font-light leading-normal">
                        Turn Key Solar ist Ihr Spezialist für Photovoltaik für die Projektentwicklung, die Anlagenerrichtung und den Anlagenbetrieb. Wir bieten einen ganzheitlichen Service Ihres Photovoltaikprojektes.
                    </div>
                </div>
            </div>

            <div id="service-global" className="container xl:max-w-[60%] mb-14">
                <div class="flex flex-col xl:flex-row gap-20">
                    <div class="basis-full xl:basis-1/2 relative">
                    <StaticImage
                        src="../images/1888.jpg"
                        alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                        placeholder="blurred"
                        layout="constrained"
                        width={800}
                        objectFit="cover"
                        class="w-full h-full xl:absolute inset-0 object-cover"
                    />
                    </div>
                    <div class="basis-full xl:basis-1/2">
                        <h2 className="text-3xl font-bold mb-4">Von der Planung bis zum Betrieb</h2>
                        <p className="mb-10">Turn Key Solar ist Ihr Spezialist für Photovoltaik für die Projektentwicklung, die Anlagenerrichtung und den Anlagenbetrieb. Wir bieten einen ganzheitlichen Service Ihres Photovoltaikprojektes.</p>

                        <Link to="/projektentwicklung" className="item flex flex-row gap-5 mb-10 cursor-pointer">
                            <div className="flex-none">
                                <div className="icon shadow-xl p-4">
                                    <ArrowTrendingUpIcon className="inline h-5 w-5 text-orange" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">Projektentwicklung</h3>
                                <p>Wir sind Experten auf dem Gebiet der Planung und Umsetzung von Photovoltaikprojekten.</p>
                            </div>
                        </Link>

                        <Link to="/anlagenerrichtung" className="item flex flex-row gap-5 mb-10 cursor-pointer">
                            <div className="flex-none">
                                <div className="icon shadow-xl p-4">
                                    <WrenchScrewdriverIcon className="inline h-5 w-5 text-orange" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">Anlagenerrichtung</h3>
                                <p>Wir bauen Ihre Anlage unter Einhaltung von höchsten Qualitätsstandards.</p>
                            </div>
                        </Link>

                        <Link to="/anlagenbetrieb" className="item flex flex-row gap-5 mb-10 cursor-pointer">
                            <div className="flex-none">
                                <div className="icon shadow-xl p-4">
                                    <RocketLaunchIcon className="inline h-5 w-5 text-orange" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">Anlagenbetrieb</h3>
                                <p>Mit unserer langjährige Erfahrung garantieren wir Ihnen eine erklassige kaufmännische und technische Betreuung Ihrer Anlage.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg bg-white pb-40" data-aos="fade-up">
            <div className="container xl:max-w-[80%] mb-14">
                <h2 className="text-4xl xl:text-9xl font-bold mb-20">Leistungen für <span className="text-orange text-6xl xl:text-14xl">Dachanlagen</span></h2>
                <TabsDachanlagen />
            </div>
        </div>

        <div className="bg bg-white pb-40" data-aos="fade-up">
            <div className="container xl:max-w-[80%] mb-14">
                <h2 className="text-4xl xl:text-9xl font-bold mb-20">Leistungen für <span className="text-orange text-5xl xl:text-14xl">Freilandanlagen</span></h2>
                <TabsLandanlagen />
            </div>
        </div>

        <div className="bg">
            <div className="bg parallax h-screen relative" style={{ "background-image": "url('"+ imageBg[0].fluid.srcWebp +"')" }}>
                <div class="w-full h-full absolute inset-0 img-overlay"></div>
                <div className="px-20 text-center h-full flex flex-col justify-center relative">
                    <div className="text-6xl xl:text-14xl font-bold text-animation">Von der Planung bis zum Betrieb</div>
                    <p className="text-lg xl:text-2xl mt-10 text-white">Profitieren Sie von unserer langjährigen Branchenexpertise. Wir bieten effiziente Solaranlagen für Unternehmen und Privathaushalte.</p>
                </div>
            </div>
        </div>

        <div className="bg bg-gray-100">
            <div id="about" data-aos="fade-up">
                <div className="container xl:max-w-[60%] py-40 text-center">
                    <h3 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Unsere Partner</h3>
                    <div className="text-lg xl:text-2xl text-center font-light leading-normal">
                        Unsere Partner sind führende Unternehmen in der Branche, die uns mit ihrer Expertise und innovativen Technologien unterstützen. Durch diese starken Partnerschaften können wir Ihnen erstklassige Lösungen und Dienstleistungen für Ihre Projekte bieten. Vertrauen Sie auf die Stärke unseres Netzwerks und profitieren Sie von unseren gemeinsamen Synergien.
                    </div>
                    <div className="flex gap-10 items-center justify-center pt-20">
                        <div>
                            <StaticImage
                                src="../images/partner/SSR-Elektrotechnik-Logo.png"
                                alt="Anlagen"
                                placeholder="blurred"
                                layout="constrained"
                                width={200}
                                quality={90}
                                imgStyle={{ 'object-position': 'right center' }}
                                objectFit="cover"
                            />
                        </div>
                        <div>
                            <StaticImage
                                src="../images/partner/SUAG-Logo.png"
                                alt="Anlagen"
                                placeholder="blurred"
                                layout="constrained"
                                width={200}
                                quality={90}
                                imgStyle={{ 'object-position': 'right center' }}
                                objectFit="cover"
                            />
                        </div>
                        <div>
                            <StaticImage
                                src="../images/partner/Longi-Logo.svg"
                                alt="Anlagen"
                                placeholder="blurred"
                                layout="constrained"
                                width={200}
                                quality={90}
                                imgStyle={{ 'object-position': 'right center' }}
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Kontakt />

        <div className="hidden">
            <div className="w-1/4 w-2/4"></div>
        </div>
    </Layout>
  )
}
