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
                    <h1 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Anlagenbau</h1>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        Turn Key Solar ist Ihr Partner für den Bau und die Errichtung von Photovoltaikanlagen. Von der Planung über die Materialbeschaffung bis zur Montage – wir realisieren Ihr Projekt effizient und zuverlässig.
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex flex-col lg:flex-row flex-nowrap">
                    <div className="basis-full lg:basis-5/12" data-aos="fade-right">
                        <h3 className="text-3xl lg:text-5xl font-bold mb-5 lg:mb-20 pr-10 text-gray-600">Dachsanierung</h3>
                        <div className="block bg-gray-100 p-10 lg:pr-[40%] lg:-mr-[35%]">
                            <p className="mb-10">Gemeinsam mit unseren regionalen Partnerunternehmen bieten wir eine fachmännische Dachsanierung gemäß den gültigen Vorschriften an. Wenn Sie Ihr Dach pachten, werden die Sanierungskosten verrechnet und der Überschuss wird Ihnen als Barzahlung ausgezahlt. Unsere Expertise umfasst dabei:</p>

                            <p className="font-bold text-lg">Unsere Leistungen:</p>
                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Koordinierung des Bauablaufs und Qualitätssicherung</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Erstellung von Statikgutachten</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Entsorgung von asbesthaltigen Materialien</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Stärkung der Dachkonstruktion</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Beschaffung von Materialien und Logistik</li>
                            </ul>
                        </div>
                    </div>
                    <div className="basis-full lg:basis-8/12" data-aos="fade-left">
                        <StaticImage
                            src="../images/dachsanierung.jpg"
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
                            src="../images/einrichten.jpg"
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
                        <h3 className="text-3xl lg:text-5xl font-bold mb-5 lg:mb-20 lg:pl-10 text-gray-600">Anlagenerrichtung</h3>
                        <div className="block bg-gray-100 p-10 pl-[45%] -ml-[35%]">
                            <p className="mb-10">Mit unserer herausragenden Bauleitung gewährleisten wir eine mühelose Anlagenerrichtung durch zuverlässige Vertragspartner und unsere eigenen erfahrenen Montageteams. Auf Wunsch bieten wir auch eine Speicherlösung an.</p>

                            <p className="font-bold text-lg">Wir sind Experten in folgenden Bereichen:</p>
                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Materialbeschaffung und Logistik</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Montagearbeiten</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Batteriespeicher</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Kabeltrassenführung</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> EEG-Inbetriebnahme</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Netzanschluss</li>
                            </ul>

                            <p className="mb-10">Verlassen Sie sich auf unser Know-how und unsere Zuverlässigkeit. Wir bringen Ihre Anlage zum Laufen!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="service-global" className="container mt-24" data-aos="fade-up">
                <h2 className="text-3xl lg:text-6xl font-bold mb-14">Von der Planung bis zum Betrieb</h2>
                <div className="flex flex-col lg:flex-row">
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
        title = "Anlagenbau für Photovoltaikanlagen in Paderborn | Turn Key Solar GmbH"
        description = "Turn Key Solar ist Ihr Experte für den Bau und die Errichtung von Photovoltaikanlagen in Paderborn. Von der Planung bis zur Montage bieten wir maßgeschneiderte Lösungen für private und gewerbliche Projekte. Effizient und zuverlässig."
    />
)