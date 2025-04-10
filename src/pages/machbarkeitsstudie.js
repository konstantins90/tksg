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
                    <h1 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Machbarkeitsstudie</h1>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        Wir bieten Ihnen eine individuelle Machbarkeitsstudie für Ihren Wunschstandort. Dabei werden alle Aspekte wie technische Machbarkeit, rechtlicher Rahmen und Wirtschaftlichkeit transparent für Sie dargestellt. Die Studie enthält eine detaillierte technische Planung sowie eine ausführliche Wirtschaftlichkeitsanalyse. Wenn Sie sich anschließend für eine Photovoltaikanlage der Turn Key Solar GmbH entscheiden, fallen keine Planungskosten bei der Projektumsetzung an. Mit der Turn Key Solar GmbH setzen Sie auf einen zuverlässigen und erfahrenen Partner, um in eine nachhaltige Zukunft zu investieren.
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
                                Technische Machbarkeit
                            </div>
                        </div>
                        <div className="flex">
                            <div className="step-line flex-none w-16 py-4">
                                <div className="line"></div>
                            </div>
                            <div className="step-description text-xl pb-10">
                                Wir bewerten die technische Machbarkeit Ihres Photovoltaikprojekts umfassend. Unsere Experten prüfen alle relevanten technischen Aspekte, um eine erfolgreiche Umsetzung zu gewährleisten.
                            </div>
                        </div>
                    </div>
                    <div className="step w-full lg:w-1/2 px-8 py-4">
                        <div className="flex items-center">
                            <div className="flex-none w-16 step-number text-6xl font-light text-gray-400">
                                2
                            </div>
                            <div className="step-title text-xl font-bold">
                                Analyse des Standortes
                            </div>
                        </div>
                        <div className="flex">
                            <div className="step-line flex-none w-16 py-4">
                                <div className="line"></div>
                            </div>
                            <div className="step-description text-xl pb-10">
                                Eine gründliche Standortanalyse ist entscheidend für den Erfolg Ihrer Photovoltaikanlage. Wir analysieren die Sonneneinstrahlung, geografische Gegebenheiten und andere Standortfaktoren, um optimale Ergebnisse zu erzielen.
                            </div>
                        </div>
                    </div>
                    <div className="step w-full lg:w-1/2 px-8 py-4">
                        <div className="flex items-center">
                            <div className="flex-none w-16 step-number text-6xl font-light text-gray-400">
                                3
                            </div>
                            <div className="step-title text-xl font-bold">
                                Statische Prüfung der Dächer
                            </div>
                        </div>
                        <div className="flex">
                            <div className="step-line flex-none w-16 py-4">
                                <div className="line"></div>
                            </div>
                            <div className="step-description text-xl pb-10">
                                Unsere statische Prüfung stellt sicher, dass Ihr Dach die Last der Photovoltaikanlage tragen kann. Wir führen detaillierte Berechnungen durch und erstellen Statikgutachten, um die Sicherheit und Langlebigkeit Ihrer Installation zu garantieren.
                            </div>
                        </div>
                    </div>
                    <div className="step w-full lg:w-1/2 px-8 py-4">
                        <div className="flex items-center">
                            <div className="flex-none w-16 step-number text-6xl font-light text-gray-400">
                                4
                            </div>
                            <div className="step-title text-xl font-bold">
                                Ertragsberechnung unter Einbezug der Verschattung
                            </div>
                        </div>
                        <div className="flex">
                            <div className="step-line flex-none w-16 py-4">
                                <div className="line"></div>
                            </div>
                            <div className="step-description text-xl pb-10">
                                Wir berechnen den voraussichtlichen Ertrag Ihrer Photovoltaikanlage unter Berücksichtigung möglicher Verschattungen. Mit präzisen Simulationen und Analysen optimieren wir den Ertrag und die Effizienz Ihrer Anlage.
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
        title = "Machbarkeitsstudie für Photovoltaikanlagen | Turn Key Solar GmbH"
        description = "Turn Key Solar GmbH bietet individuelle Machbarkeitsstudien für Ihren Wunschstandort. Wir analysieren technische Machbarkeit, rechtlichen Rahmen und Wirtschaftlichkeit detailliert. Bei Projektumsetzung entfallen die Planungskosten. Vertrauen Sie auf unsere Expertise für eine nachhaltige Zukunft."
    />
)
