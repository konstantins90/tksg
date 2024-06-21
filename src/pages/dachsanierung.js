import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
                    <h1 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Dachsanierung</h1>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        Profitieren Sie von unserer professionellen Dachsanierung mit regionalen Partnerunternehmen. Qualität, Sicherheit und Effizienz sind unsere obersten Prioritäten. Jetzt Kontakt aufnehmen und Angebot sichern!
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex flex-col lg:flex-row flex-nowrap">
                    <div className="basis-full lg:basis-5/12" data-aos="fade-right">
                        <h3 className="text-3xl lg:text-5xl font-bold mb-5 lg:mb-20 pr-10 text-gray-600">Professionell und Sicher</h3>
                        <div className="block bg-gray-100 p-10 lg:pr-[40%] lg:-mr-[35%]">
                            <p className="mb-10">Durch unsere Zusammenarbeit mit regionalen Partnerunternehmen garantieren wir Ihnen eine professionelle Dachsanierung gemäß sämtlicher Vorschriften. Wenn Sie Ihr Dach pachten, werden die Sanierungskosten direkt verrechnet und ein etwaiger Überschuss wird Ihnen ausgezahlt. Unsere umfangreiche Erfahrung erstreckt sich auf die folgenden Gebiete</p>

                            <p className="font-bold text-lg">Unsere Leistungen</p>

                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Bauüberwachung und Sicherung der Qualität</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Beschaffung von Materialien und Organisation der Logistik</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Sanierung von Dächern</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Ermittlung der technischen Umsetzbarkeit</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Fachgerechte Entsorgung von Asbest</li>
                            </ul>

                            <p className="mt-8">Vertrauen Sie auf unsere Expertise für eine sichere und effiziente Dachsanierung. Kontaktieren Sie uns noch heute für ein unverbindliches Angebot.</p>
                        </div>
                    </div>
                    <div className="basis-full lg:basis-8/12" data-aos="fade-left">
                        <StaticImage
                            src="../images/dachsanierung2.jpg"
                            alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={550}
                            height={700}
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
