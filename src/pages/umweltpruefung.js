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

        <div className="bg bg-white" data-aos="fade-up">
            <div id="about">
                <div className="container xl:max-w-[60%] py-40 text-center">
                    <h1 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Umweltprüfung </h1>
                    <div className="text-lg xl:text-2xl text-center font-light leading-normal">
                        Setzen Sie auf umweltverträgliche PV-Anlagen von Turn Key Solar. Wir arbeiten mit regionalen Partnern zusammen, um sicherzustellen, dass Ihre Anlagen nicht nur erneuerbare Energie liefern, sondern auch die Umwelt schützen. Kontaktieren Sie uns für eine nachhaltige Lösung.
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex flex-col xl:flex-row flex-nowrap">
                    <div className="basis-full xl:basis-5/12" data-aos="fade-right">
                        <h3 className="text-3xl xl:text-5xl font-bold mb-5 xl:mb-20 pr-10 text-gray-600">Umweltverträgliche PV-Anlagen</h3>
                        <div className="block bg-gray-100 p-10 xl:pr-[40%] xl:-mr-[35%]">
                            <p className="mb-10">
                                Wir legen großen Wert darauf, dass unsere PV-Anlagen im Einklang mit der Natur errichtet und betrieben werden. Deshalb arbeiten wir mit regionalen Partnerunternehmen zusammen, die umfassende Umweltgutachten erstellen. Diese Gutachten bewerten, ob der Bau einer PV-Anlage Auswirkungen auf Fauna, Flora und andere ökologische Aspekte hat.
                            </p>

                            <p className="font-bold text-lg">Unsere Leistungen</p>

                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Umweltverträgliche Planung und Betrieb von PV-Anlagen</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Umfassende Umweltgutachten durch regionale Partnerunternehmen</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Bewertung der Auswirkungen auf Fauna, Flora und andere ökologische Aspekte</li>
                            </ul>
                        </div>
                    </div>
                    <div className="basis-full xl:basis-8/12" data-aos="fade-left">
                        <StaticImage
                            src="../images/Umwelt-Turn-Key-Solar.jpg"
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
                <h2 className="text-3xl xl:text-6xl font-bold mb-14">Von der Planung bis zum Betrieb</h2>
                <div className="flex flex-col xl:flex-row">
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
