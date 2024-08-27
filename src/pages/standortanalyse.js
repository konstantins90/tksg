import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../components/seo"
import Kontakt from "../components/kontakt"
import Banner from "../components/banner"

import { CheckCircleIcon, ArrowTrendingUpIcon, WrenchScrewdriverIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

export default function Projektentwicklung({ data }) {
  return (
    <Layout>
        <Banner />

        <div className="bg bg-white overflow-hidden" data-aos="fade-up">
            <div id="about">
                <div className="container lg:max-w-[60%] py-40 text-center">
                    <h1 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Standortanalyse</h1>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        Profitieren Sie von unserer Expertise in der Standortanalyse und sichern Sie sich die besten Standorte für Ihre Photovoltaik-Anlagen. Kontaktieren Sie uns für eine detaillierte Analyse und ein maßgeschneidertes Angebot.
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex flex-col lg:flex-row flex-nowrap">
                    <div className="basis-full lg:basis-5/12" data-aos="fade-right">
                        <h3 className="text-3xl lg:text-5xl font-bold mb-5 lg:mb-20 pr-10 text-gray-600">Standortanalyse</h3>
                        <div className="block bg-gray-100 p-10 lg:pr-[40%] lg:-mr-[35%]">
                            <p className="mb-10">
                                Unser interdisziplinäres Team von GIS-Experten hat langjährige Erfahrung in der Arbeit mit Geoinformationssystemen und liefert fundierte Analysen zur Identifizierung optimaler Standorte für Photovoltaik-Anlagen. Wir nutzen staatlich geprüfte Informationsparameter, um geografische Daten, topografische Informationen sowie Gelände- und Bodenbeschaffenheit zu analysieren und zu bewerten. So gewinnen wir umfassende Einsichten in die Eignung von Standorten für Photovoltaik-Anlagen.
                            </p>

                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Langjährige Erfahrung mit Geoinformationssystemen</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Fundierte Analysen zur Standortbewertung</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Nutzung staatlich geprüfter Informationsparameter</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Analyse geografischer und topografischer Daten</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Bewertung von Gelände- und Bodenbeschaffenheit</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Umfassende Einsichten in die Eignung von Standorten</li>
                            </ul>

                            <p className="mt-8">Vertrauen Sie auf unsere Expertise für eine sichere und effiziente Dachsanierung. Kontaktieren Sie uns noch heute für ein unverbindliches Angebot.</p>
                        </div>
                    </div>
                    <div className="basis-full lg:basis-8/12" data-aos="fade-left">
                        <StaticImage
                            src="../images/649.jpg"
                            alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={780}
                            height={520}
                            quality={90}
                            imgStyle={{ 'object-position': 'left bottom' }}
                            objectFit="cover"
                            class="w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div id="service-global" className="container mt-24" data-aos="fade-up">
                <h2 className="text-3xl lg:text-6xl font-bold mb-14">Von der Planung bis zum Betrieb</h2>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1">
                        <Link to="/projektentwicklung" className="item flex flex-row items-center gap-5 mb-10 cursor-pointer">
                            <div className="flex-none">
                                <div className="icon shadow-xl p-4">
                                    <ArrowTrendingUpIcon className="inline h-5 w-5 text-orange" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">Projektentwicklung</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="flex-1">
                        <Link to="/anlagenerrichtung" className="item flex flex-row items-center gap-5 mb-10 cursor-pointer">
                            <div className="flex-none">
                                <div className="icon shadow-xl p-4">
                                    <WrenchScrewdriverIcon className="inline h-5 w-5 text-orange" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">Anlagenerrichtung</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="flex-1">
                        <Link to="/anlagenbetrieb" className="item flex flex-row items-center gap-5 mb-10 cursor-pointer">
                            <div className="flex-none">
                                <div className="icon shadow-xl p-4">
                                    <RocketLaunchIcon className="inline h-5 w-5 text-orange" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">Anlagenbetrieb</h3>
                            </div>
                        </Link>
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

<SEO
    title = "Standortanalyse für Photovoltaikanlagen | Turn Key Solar GmbH"
    description = "Nutzen Sie unsere Expertise in der Standortanalyse für Ihre Photovoltaikanlagen. Wir bieten detaillierte Analysen, um die besten Standorte für Ihre Solaranlage zu sichern. Kontaktieren Sie uns für ein maßgeschneidertes Angebot und profitieren Sie von optimalen Ergebnissen."
/>
