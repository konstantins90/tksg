import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../components/seo"
import Kontakt from "../components/kontakt2"
import Banner from "../components/banner"

import { CheckCircleIcon, ArrowTrendingUpIcon, WrenchScrewdriverIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

export default function Sicherheit({ data }) {
  return (
    <Layout>
        <Banner />

        <div className="bg bg-white overflow-hidden" data-aos="fade-up">
            <div id="about">
                <div className="container lg:max-w-[60%] py-40 text-center">
                    <h1 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">
                        VdS 3145 für PV-Anlagen
                    </h1>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        <h2 className="mb-4 font-bold">Normen & Versicherungsschutz erklärt</h2>
                        <div className="mb-4">
                            Bei der <strong>Turn Key Solar GmbH</strong> stehen Sicherheit, Qualität und Langlebigkeit an erster Stelle. Deshalb planen und installieren wir unsere Photovoltaikanlagen nicht nur nach den <strong>Vorgaben der VdS 3145</strong>, sondern sorgen auch dafür, dass sie <u>versicherungskonform</u> gebaut werden. Für Industriekunden – wie z. B. in der <u>Automobilbranche</u> – realisieren wir zudem Anlagen nach den strengen Anforderungen von <strong>FM Global</strong>.
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex flex-col lg:flex-row flex-nowrap">
                    <div className="basis-full lg:basis-5/12" data-aos="fade-right">
                        <h3 className="text-3xl lg:text-5xl font-bold mb-5 lg:mb-20 pr-10 text-gray-600">VdS 3145</h3>
                        <div className="block bg-gray-100 p-10 lg:pr-[40%] lg:-mr-[35%]">
                            <p className="mb-4 font-bold text-lg">Was ist die VdS&nbsp;3145?</p>
                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Die <strong>VdS 3145</strong> ist eine Richtlinie des Gesamtverbands der Deutschen Versicherungswirtschaft e.V. (<strong>GDV</strong>).</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Sie gibt konkrete Vorgaben für die <strong>sichere Planung, den Bau und den Betrieb</strong> von Photovoltaikanlagen.</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Ziel ist es, <strong>Brände und Schäden zu verhindern</strong> und eine maximale Betriebssicherheit zu gewährleisten.</li>
                            </ul>

                            <p className="mt-10 mb-4 font-bold text-lg">Warum ist die Einhaltung der VdS&nbsp;3145 wichtig?</p>
                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> <strong>Vermeidung von Brandgefahren:</strong> Durch geprüfte Komponenten und fachgerechte Installation wird das Brandrisiko minimiert.</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> <strong>Längere Lebensdauer:</strong> Hochwertige Materialien und normgerechte Montage sorgen für eine zuverlässige Leistung über Jahrzehnte.</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> <strong>Versicherungsschutz:</strong> Viele Versicherer setzen die Einhaltung dieser Norm voraus, um Schäden abzudecken.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="basis-full lg:basis-8/12" data-aos="fade-left">
                        <StaticImage
                            src="../images/sicherheit-vds.png"
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
                            src="../images/sichertheit-wind.jpg"
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
                        <h3 className="text-3xl lg:text-5xl font-bold mb-5 lg:mb-20 lg:pl-10 text-gray-600">Maßnahmen</h3>
                        <div className="block bg-gray-100 p-10 lg:-ml-[35%]">
                            <p className="mb-4 font-bold text-lg">Welche Maßnahmen setzen wir um?</p>

                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> <strong>Brandschutz:</strong> Wir verwenden ausschließlich geprüfte und sichere Komponenten, um Brandrisiken zu minimieren.</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> <strong>Elektrosicherheit:</strong> Unsere Anlagen entsprechen höchsten technischen Standards und werden von zertifizierten Fachkräften installiert.</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> <strong>Mechanische Sicherheit:</strong> Die Montage erfolgt nach stabilen und wetterfesten Vorgaben, um <u>Wind, Sturm und anderen Umwelteinflüssen</u> standzuhalten.</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> <strong>Regelmäßige Prüfungen:</strong> Unsere Wartungs- und Inspektionsservices sorgen für langfristige Sicherheit und optimale Leistung.</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> <strong>FM Global-konforme Lösungen:</strong> Für industrielle Anlagen setzen wir zusätzlich auf <u>FM Global zertifizierte</u> Materialien und Bauweisen, um höchste Sicherheitsanforderungen zu erfüllen.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-20">
                <div className="flex flex-col lg:flex-row flex-nowrap">
                    <div className="basis-full lg:basis-5/12" data-aos="fade-right">
                        <h3 className="text-3xl lg:text-5xl font-bold mb-5 lg:mb-20 pr-10 text-gray-600">Turn Key Solar GmbH</h3>
                        <div className="block bg-gray-100 p-10 lg:pr-[40%] lg:-mr-[35%]">
                            <p className="mb-4 font-bold text-lg">Ihr Vorteil mit der Turn Key Solar GmbH</p>

                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> <strong>Sicherheit & Versicherungskonformität:</strong> Alle Anlagen werden nach VdS 3145 oder – für die Industrie – nach FM Global errichtet, um Versicherungsvorgaben zu erfüllen.</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> <strong>Schlüsselfertige PV-Anlagen Planung und Realisierung:</strong> Von der Planung über die Installation bis hin zur Wartung – alles aus einer Hand.</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> <strong>Maximale Effizienz & Schutz:</strong> Unsere PV-Anlagen bieten nicht nur höchste Leistung, sondern auch höchste Sicherheit für Privat, Gewerbe und Industrie.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="basis-full lg:basis-8/12" data-aos="fade-left">
                        <StaticImage
                            src="../images/sicherheit-vortiele2.jpg"
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
        title = "VdS 3145 & FM Global | Turn Key Solar GmbH"
        description = "Bei der Turn Key Solar GmbH stehen Sicherheit, Qualität und Langlebigkeit an erster Stelle. Deshalb planen und installieren wir unsere Photovoltaikanlagen nicht nur nach den Vorgaben der VdS 3145, sondern sorgen auch dafür, dass sie versicherungskonform gebaut werden."
    />
)
