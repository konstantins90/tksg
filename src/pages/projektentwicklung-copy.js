import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../components/seo"
import Projects from "../components/projects"

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
                    <h1 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Projektentwicklung</h1>
                    <div className="text-lg xl:text-2xl text-center font-light leading-normal">
                        Turn Key Solar ist Ihr Spezialist für Photovoltaik für die Projektentwicklung, die Anlagenerrichtung und den Anlagenbetrieb. Wir bieten einen ganzheitlichen Service Ihres Photovoltaikprojektes.
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex flex-nowrap">
                    <div className="basis-5/12">
                        <h3 className="text-5xl font-bold mb-20 pr-10 text-gray-600">Machbarkeitsstudie</h3>
                        <div className="block bg-gray-100 p-10 pr-[40%] -mr-[35%]">
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
                    <div className="basis-8/12">
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
                <div className="flex flex-nowrap">
                    <div className="basis-8/12">
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
                    <div className="basis-5/12">
                        <h3 className="text-5xl font-bold mb-20 pl-10 text-gray-600"><div>Genehmigungs</div><div>verfahren</div></h3>
                        <div className="block bg-gray-100 p-10 pl-[45%] -ml-[35%]">
                            <p className="mb-10">Wer den Bau einer PV-Freiflächenanlage plant, der wird schnell mit einer Reihe genehmigungsrelevanter Aufgaben konfrontiert. Doch keine Sorge: Wir übernehmen für Sie die reibungslose Abwicklung sämtlicher Formalitäten.</p>

                            <p className="font-bold text-lg">Unsere Leistungen</p>
                            <ul>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Wir nehmen Kontakt zu den zuständigen Ämtern auf und kümmern uns um die Kommunikation.</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Wir erstellen einen umfassenden Umweltbericht und übernehmen die Bearbeitung öffentlicher Belange.</li>
                                <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Wir unterstützen Sie bei der Änderung des Flächennutzungsplans.</li>
                            </ul>

                            <p className="mb-10">Mit unserer Expertise und Erfahrung sorgen wir dafür, dass Ihr Genehmigungsverfahren effizient und stressfrei verläuft. Vertrauen Sie auf uns, um alle notwendigen Schritte professionell und termingerecht abzuwickeln.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-20">
                <div className="flex flex-nowrap">
                    <div className="basis-5/12">
                        <h3 className="text-5xl font-bold mb-20 pr-10 text-gray-600">Anlagenplanung</h3>
                        <div className="block bg-gray-100 p-10 pr-[40%] -mr-[35%]">
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
                    <div className="basis-8/12">
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

            <div id="service-global" className="container mb-14">
                <h2 className="text-2xl font-bold mb-4">Von der Planung bis zum Betrieb</h2>
                <div className="flex flex-row ">
                    <div className="flex-1">
                        <Link to="/projektentwicklung" className="item flex flex-row items-center gap-5 mb-10 cursor-pointer active">
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

        <div className="bg">
            <div className="bg parallax h-screen relative" style={{ "background-image": "url('https://ik.imagekit.io/smetana/2812.jpg?updatedAt=1713563473046')" }}>
                <div class="w-full h-full absolute inset-0 img-overlay"></div>
                <div className="container text-center h-full flex flex-col justify-center relative">
                    <div className="text-6xl xl:text-14xl font-bold text-animation">Nachhaltig in die Zukunft</div>
                    <p className="text-lg xl:text-2xl mt-10 text-white">Profitieren Sie von unserer langjährigen Branchenexpertise. Wir bieten effiziente Solaranlagen für Unternehmen und Privathaushalte.</p>
                </div>
            </div>
        </div>

        <div className="bg bh-white pb-20">
            <div id="about" data-aos="fade-up">
                <div className="container xl:max-w-[60%] py-40 text-center">
                    <h3 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-black pb-4 border-b-2 border-orange">Unsere Projekte</h3>
                    <div className="text-lg xl:text-2xl text-center font-light leading-normal">
                        Tauchen Sie ein in unsere Welt der grünen Innovationen und lassen Sie sich von unseren Erfolgsgeschichten inspirieren. Unsere Projekte sind Ausdruck unserer Expertise und Leidenschaft für eine nachhaltige Zukunft.
                    </div>
                </div>
            </div>
            
            <Projects />
        </div>

        <div className="bg">
            <div className="container h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
                    <div className="-mx-4 pb-6 lg:mx-0 lg:py-24">
                        <StaticImage
                            src="../images/anlagen.jpg"
                            alt="Anlagen"
                            placeholder="blurred"
                            layout="constrained"
                            width={700}
                            imgStyle={{ 'object-position': 'right center' }}
                            objectFit="cover"
                        />
                    </div>
                    <div className="py-6 lg:py-24">
                        <h3 className="text-2xl md:text-4xl uppercase font-medium text-gray-600 animate__animated animate__slideInLeft">Elektroanlagen</h3>
                        <div className="divider"></div>
                        <div>
                            <p className="text-xl text-gray-800">Fachkundige Elektroinstallationsdienstleistungen</p>
                            <p className="mt-4 text-gray-500">
                                Unser erfahrenes Team von SSR Elektrotechnik ist auf die reibungslose Installation modernster elektrischer Anlagen spezialisiert.<br/><br/>
                                Mit einem Fokus auf Sicherheit und Präzision setzen wir Baupläne in voll funktionsfähige Realitäten um. Ob für Wohn-, Gewerbe- oder Industrieprojekte – wir garantieren effiziente und normgerechte Lösungen für all Ihre elektrischen Anforderungen.</p>
                            <button className="btn bg-white mt-4 hover:bg-gray-50">Anlage planen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white">
            <div className="container h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
                    <div className="-mx-4 pb-6 lg:mx-0 lg:py-24 lg:order-2">
                        <StaticImage
                            src="../images/anlagen.jpg"
                            alt="Anlagen"
                            placeholder="blurred"
                            layout="constrained"
                            width={700}
                            imgStyle={{ 'object-position': 'right center' }}
                            objectFit="cover"
                        />
                    </div>
                    <div className="py-6 lg:py-24 lg:order-1">
                        <h3 className="text-2xl md:text-4xl uppercase font-medium text-gray-600">Photovoltaikanlagen</h3>
                        <div className="divider"></div>
                        <div>
                            <p className="text-xl text-gray-800">Entdecken Sie die Zukunft der Energieerzeugung mit unseren Photovaltalk-Anlagen</p>
                            <p className="mt-4 text-gray-500">
                                Bei SSR Elektrotechnik bieten wir Ihnen innovative Photovoltaik-Lösungen, die die Sonnenenergie einfangen und in sauberen, nachhaltigen Strom umwandeln. Unsere maßgeschneiderten Photovaltalk-Anlagen sind darauf ausgelegt, Ihre Energiekosten zu senken und gleichzeitig einen positiven Beitrag zur Umwelt zu leisten. Vertrauen Sie unserer Expertise, um die Kraft der Sonne optimal zu nutzen.
                            </p>
                            <button className="btn bg-white mt-4 hover:bg-gray-50">weitere Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="multibg">
            <div className="container h-full py-6">
                <div className="md:flex items-center">
                    <div className="flex-1">
                        <p className="text-2xl md:text-4xl uppercase text-white">Projekt-Referenzen</p>
                        <p className="text-white mt-3">Lassen Sie sich von unseren Referenzen inspirieren.</p>
                    </div>
                    <div>
                        <Link to="/referenzen" className="btn mt-4 text-white border border-white hover:bg-white hover:text-gray-500 md:mt-0">Zu den Referenzen</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden">
            <div className="w-1/4 w-2/4"></div>
        </div>
    </Layout>
  )
}
