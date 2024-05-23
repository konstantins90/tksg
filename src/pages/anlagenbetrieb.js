import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Kontakt from "../components/kontakt"

import { CheckCircleIcon, ArrowTrendingUpIcon, WrenchScrewdriverIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

export default function Projektentwicklung({ data }) {
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
                    <h1 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Anlagenbetrieb</h1>
                    <div className="text-lg xl:text-2xl text-center font-light leading-normal">
                        Turn Key Solar bietet Ihnen einen umfassenden Service für den Betrieb Ihrer Photovoltaikanlage. Von der regelmäßigen Wartung bis zur effizienten Überwachung – wir sorgen für einen reibungslosen Anlagenbetrieb.
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex flex-col xl:flex-row flex-nowrap">
                    <div className="basis-full xl:basis-5/12" data-aos="fade-right">
                        <h3 className="text-3xl xl:text-5xl font-bold mb-5 xl:mb-20 pr-10 text-gray-600">Technische Betriebsführung</h3>
                        <div className="block bg-gray-100 p-10 xlpr-[40%] xl:-mr-[35%]">
                            <p className="mb-10">Unsere umfassende technische Betriebsführung sorgt für den optimalen Betrieb Ihrer Anlage. Wir integrieren Ihre Anlage in unser Monitoring-Programm, führen notwendige Schalthandlungen durch und reagieren schnell bei Störfällen.</p>

                            <p className="font-bold text-lg">Unsere Leistungen umfassen:</p>
                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Wartungsarbeiten</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Schalthandlungen</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Anlagenmonitoring</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Thermografische Inspektion per Drohne</li>
                            </ul>

                            <p className="mt-10">Vertrauen Sie auf unsere Expertise für eine effiziente und zuverlässige Betriebsführung.</p>
                        </div>
                    </div>
                    <div className="basis-full xl:basis-8/12" data-aos="fade-left">
                        <StaticImage
                            src="../images/technische-betriebsfuehrung.jpg"
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
                <div className="flex flex-col xl:flex-row flex-nowrap">
                    <div className="basis-full xl:basis-8/12 order-1 xl:order-0" data-aos="fade-right">
                        <StaticImage
                            src="../images/kaufmaenische-betriebsfuerung.jpg"
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
                    <div className="basis-full xl:basis-5/12" data-aos="fade-left">
                        <h3 className="text-3xl xl:text-5xl font-bold mb-5 xl:mb-20 xl:pl-10 text-gray-600">Kaufmännische Betriebsführung</h3>
                        <div className="block bg-gray-100 p-10 xl:pl-[45%] xl:-ml-[35%]">
                            <p className="mb-10">Unsere umfassende kaufmännische Betriebsführung sorgt für eine effiziente Verwaltung Ihrer Anlage. Wir übernehmen das Finanzmanagement, erstellen Berichte und kümmern uns um die Vertragsverwaltung.</p>

                            <p className="font-bold text-lg">Unsere Leistungen umfassen:</p>
                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Finanzmanagement</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Berichtswesen</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Vertragsverwaltung</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Steueroptimierung</li>
                            </ul>

                            <p className="mt-10">Vertrauen Sie auf unsere Expertise für eine reibungslose und effektive kaufmännische Betriebsführung.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="service-global" className="container mt-24" data-aos="fade-up">
                <h2 className="text-3xl xl:text-6xl font-bold mb-14">Von der Planung bis zum Betrieb</h2>
                <div className="flex flex-col xl:flex-row">
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
                        <Link to="/anlagenerrichtung" className="item flex flex-row items-center gap-5 mb-10 cursor-pointer active">
                            <div className="flex-none">
                                <div className="icon shadow-xl p-4">
                                    <CheckCircleIcon className="inline h-5 w-5 text-orange" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">Anlagenerrichtung</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="flex-1">
                        <Link to="/anlagenbetrieb" className="item flex flex-row items-center gap-5 mb-10 cursor-pointer active">
                            <div className="flex-none">
                                <div className="icon shadow-xl p-4">
                                    <CheckCircleIcon className="inline h-5 w-5 text-orange" />
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
