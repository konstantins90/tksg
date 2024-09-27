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
                    <h1 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Umweltprüfung </h1>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        Setzen Sie auf umweltverträgliche PV-Anlagen von Turn Key Solar GmbH. Unser Unternehmen arbeitet mit regionalen Partnern zusammen, um sicherzustellen, dass Ihre Anlagen nicht nur erneuerbare Energie liefern, sondern auch die Umwelt schützen. Kontaktieren Sie uns für eine nachhaltige Lösung.
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex flex-col lg:flex-row flex-nowrap">
                    <div className="basis-full lg:basis-5/12" data-aos="fade-right">
                        <h3 className="text-3xl lg:text-5xl font-bold mb-5 lg:mb-20 pr-10 text-gray-600">Umweltverträgliche PV-Anlagen</h3>
                        <div className="block bg-gray-100 p-10 lg:pr-[40%] lg:-mr-[35%]">
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
                    <div className="basis-full lg:basis-8/12" data-aos="fade-left">
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

export const Head = () => (
    <SEO
        title = "Umweltprüfung für Photovoltaikanlagen | Turn Key Solar GmbH"
        description = "Setzen Sie auf umweltverträgliche Photovoltaikanlagen von Turn Key Solar GmbH. Durch unsere Zusammenarbeit mit regionalen Partnern garantieren wir, dass Ihre Anlage erneuerbare Energie liefert und die Umwelt schützt. Kontaktieren Sie uns für nachhaltige Lösungen."
    />
)
