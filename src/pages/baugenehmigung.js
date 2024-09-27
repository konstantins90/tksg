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
                <div className="container lg:max-w-[60%] pt-40 pb-20 text-center">
                    <h1 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Baugenehmigung</h1>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        Wir begleiten Sie Schritt für Schritt auf dem Weg zur erfolgreichen Baugenehmigung. Von der sorgfältigen Planung und Antragstellung bis hin zur Genehmigung durch die zuständige Behörde – wir sorgen für einen reibungslosen Ablauf und stehen Ihnen mit Fachkompetenz zur Seite.
                    </div>
                </div>
            </div>

            <div className="container">
                <div id="steps" className="flex flex-wrap mt-16 flex-row -mx-8">
                    <div className="step w-full lg:w-1/2 px-8 py-4">
                        <div className="flex items-center">
                            <div className="flex-none w-16 step-number text-6xl font-light text-gray-400">
                                1
                            </div>
                            <div className="step-title text-xl font-bold">
                                Planung und Vorbereitung
                            </div>
                        </div>
                        <div className="flex">
                            <div className="step-line flex-none w-16 py-4">
                                <div className="line"></div>
                            </div>
                            <div className="step-description text-xl pb-10">
                            Wir überprüfen sorgfältig die örtlichen Bauvorschriften, Verordnungen und Planungsbestimmungen, um sicherzustellen, dass Ihr Bauprojekt alle notwendigen Anforderungen erfüllt. Im Anschluss erstellen wir eine umfassende Bauplanung, welche alle relevanten Faktoren berücksichtigt. Dabei legen wir großen Wert auf eine detaillierte Dokumentation, die neben Gutachten und Nachweisen auch Datenblätter der technischen Einheiten wie Module und Wechselrichter beinhaltet.
                            </div>
                        </div>
                    </div>
                    <div className="step w-full lg:w-1/2 px-8 py-4">
                        <div className="flex items-center">
                            <div className="flex-none w-16 step-number text-6xl font-light text-gray-400">
                                2
                            </div>
                            <div className="step-title text-xl font-bold">
                                Antragstellung
                            </div>
                        </div>
                        <div className="flex">
                            <div className="step-line flex-none w-16 py-4">
                                <div className="line"></div>
                            </div>
                            <div className="step-description text-xl pb-10">
                                Wir stellen den Antrag auf Erteilung der Baugenehmigung bei der zuständigen Baubehörde und sorgen für eine problemlose sowie fachgerechte Abwicklung des Genehmigungsverfahrens. Wenn erforderlich, initiieren wir die Modifikation des Flächennutzungsplans.
                            </div>
                        </div>
                    </div>
                    <div className="step w-full lg:w-1/2 px-8 py-4">
                        <div className="flex items-center">
                            <div className="flex-none w-16 step-number text-6xl font-light text-gray-400">
                                3
                            </div>
                            <div className="step-title text-xl font-bold">
                                Kommunikation und Nachverfolgung
                            </div>
                        </div>
                        <div className="flex">
                            <div className="step-line flex-none w-16 py-4">
                                <div className="line"></div>
                            </div>
                            <div className="step-description text-xl pb-10">
                                Wir koordinieren die Kommunikation mit der Behörde, beantworten Rückfragen und halten Sie über den Fortschritt des Genehmigungsverfahrens informiert. So stellen wir sicher, dass der Prozess reibungslos verläuft und Sie stets auf dem neuesten Stand sind.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="service-global" className="container mt-24" data-aos="fade-up">
                <h2 className="text-3xl lg:text-6xl font-bold mb-14 text-center">Von der Planung bis zum Betrieb</h2>
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

export const Head = () => (
    <SEO
        title = "Baugenehmigung & Standortanalyse für Photovoltaikanlagen | Turn Key Solar GmbH"
        description = "Turn Key Solar GmbH unterstützt Sie bei der Baugenehmigung und Standortanalyse Ihrer Photovoltaikanlage in Paderborn. Optimieren Sie die Effizienz Ihrer Solaranlage mit unserer Expertise und profitieren Sie von maximaler Leistung."
    />
)
