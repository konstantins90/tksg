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
                    <h1 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Projektentwicklung</h1>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        Turn Key Solar GmbH unterstützt Sie bei der Projektentwicklung Ihrer Photovoltaikanlage. Von der Standortanalyse über die Planung bis zur Umsetzung – wir begleiten Sie in jeder Phase Ihres Projekts.
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex flex-col lg:flex-row flex-nowrap">
                    <div className="basis-full lg:basis-5/12" data-aos="fade-right">
                        <h3 className="text-3xl lg:text-5xl font-bold mb-5 lg:mb-20 pr-10 text-gray-600">Machbarkeitsstudie</h3>
                        <div className="block bg-gray-100 p-10 lg:pr-[40%] lg:-mr-[35%]">
                            <p className="mb-10">Für die Gewährleistung einer reibungslosen Projektdurchführung müssen im Vorfeld Risiken durch eine umfassende Machbarkeitsstudie evaluiert werden. Diese Studie ist entscheidend, um alle relevanten Aspekte Ihres Projekts zu analysieren und potenzielle Herausforderungen frühzeitig zu identifizieren.</p>

                            <p className="font-bold text-lg">Unsere Leistungen</p>

                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Standortanalysen</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Wirtschaftlichkeitsanalyse</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Ertragsgutachten</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Ermittlung der technischen Umsetzbarkeit</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Ermittlung des Netzverknüpfungspunkt</li>
                            </ul>
                        </div>
                    </div>
                    <div className="basis-full lg:basis-8/12" data-aos="fade-left">
                        <StaticImage
                            src="../images/projektentwicklung.jpg"
                            alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={780}
                            height={520}
                            quality={90}
                            imgStyle={{ 'object-position': 'right center' }}
                            objectFit="cover"
                            class="w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="container mt-20">
                <div className="flex flex-col lg:flex-row flex-nowrap">
                    <div className="basis-full lg:basis-8/12 order-1 lg:order-none" data-aos="fade-right">
                        <StaticImage
                            src="../images/genehmigungsverfahren.jpg"
                            alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={780}
                            height={520}
                            quality={90}
                            imgStyle={{ 'object-position': 'right center' }}
                            objectFit="cover"
                            class="w-full object-cover"
                        />
                    </div>
                    <div className="basis-full lg:basis-5/12" data-aos="fade-left">
                        <h3 className="text-3xl lg:text-5xl font-bold mb-5 lg:mb-20 lg:pl-10 text-gray-600"><div>Genehmigungs</div><div>verfahren</div></h3>
                        <div className="block bg-gray-100 p-10 lg:pl-[45%] lg:-ml-[35%]">
                            <p className="mb-10">Wer den Bau einer PV-Freiflächenanlage plant, der wird schnell mit einer Reihe genehmigungsrelevanter Aufgaben konfrontiert. Doch keine Sorge: Wir übernehmen für Sie die reibungslose Abwicklung sämtlicher Formalitäten.</p>

                            <p className="font-bold text-lg">Unsere Leistungen</p>
                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Wir nehmen Kontakt zu den zuständigen Ämtern auf und kümmern uns um die Kommunikation.</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Wir erstellen einen umfassenden Umweltbericht und übernehmen die Bearbeitung öffentlicher Belange.</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Wir unterstützen Sie bei der Änderung des Flächennutzungsplans.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-20">
                <div className="flex flex-col lg:flex-row flex-nowrap">
                    <div className="basis-full lg:basis-5/12" data-aos="fade-right">
                        <h3 className="text-3xl lg:text-5xl font-bold mb-5 lg:mb-20 pr-10 text-gray-600">Anlagenplanung</h3>
                        <div className="block bg-gray-100 p-10 lg:pr-[40%] lg:-mr-[35%]">
                            <p className="mb-10">Um eine effektive Bauphase sicherzustellen, ist es essenziell, im Vorfeld eine detaillierte Planung zu erstellen.</p>

                            <p className="font-bold text-lg">Unser umfassendes Know-how umfasst:</p>
                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Vermessung von Gebäuden und Flächen mittels Drohnen und Photometrie in 3D</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> 3D-Simulation von Photovoltaikanlagen</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Planung von Strings und Wechselrichtern</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Trassenführung und Netzanschlussplanung</li>
                            </ul>

                            <p className="mb-10">Mit unserer detaillierten Anlagenplanung legen wir den Grundstein für eine reibungslose und effiziente Bauphase. Vertrauen Sie auf unsere Expertise, um Ihr Projekt optimal vorzubereiten und erfolgreich umzusetzen.</p>
                        </div>
                    </div>
                    <div className="basis-full lg:basis-8/12" data-aos="fade-left">
                        <StaticImage
                            src="../images/anlagenplanung.jpg"
                            alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={780}
                            height={520}
                            quality={90}
                            imgStyle={{ 'object-position': 'right center' }}
                            objectFit="cover"
                            class="w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div id="service-global" className="container mt-24" data-aos="fade-up">
                <h2 className="text-3xl lg:text-6xl font-bold mb-14">Von der Planung bis zum Betrieb</h2>
                <div className="flex flex-col lg:flex-row ">
                    <div className="flex-1">
                        <Link to="/projektentwicklung" className="item flex flex-row items-center gap-5 mb-10 cursor-pointer active">
                            <div className="flex-none">
                                <div className="icon shadow-xl p-4">
                                    <CheckCircleIcon className="inline h-5 w-5 text-orange" />
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
        title = "Projektentwicklung für Photovoltaikanlagen | Turn Key Solar GmbH"
        description = "Turn Key Solar GmbH bietet umfassende Unterstützung bei der Projektentwicklung Ihrer Photovoltaikanlage. Wir begleiten Sie von der Standortanalyse über die Planung bis zur Umsetzung. Vertrauen Sie auf unsere Expertise für eine erfolgreiche Realisierung Ihres Projekts."
    />
)
