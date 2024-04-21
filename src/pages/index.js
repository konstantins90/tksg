import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Counter from "../components/counter"
import Service from "../components/service"
import Projects from "../components/projects"

export default function Home({ data }) {
  return (
    <Layout>
        <div id="banner" class="-mt-24 relative w-full min-h-screen py-12 px-12">
            <div class="relative z-10 text-center py-24 xl:py-48">
                <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-display font-bold mb-12">Turn Key Solar GmbH</h1>
                <h2 class="inline-block text-white font-light text-xl md:text-xl lg:text-2xl lg:text-3xl">Ihr Experte für Photovoltaik-Anlagen<br/>in Paderborn</h2>
            </div>
            <div class="container">
                <Counter/>
            </div>
            <StaticImage
                src="../images/home-3.jpg"
                alt="SSR"
                placeholder="blurred"
                layout="constrained"
                width={1980}
                imgStyle={{ 'object-position': 'right center' }}
                objectFit="cover"
                class="w-full h-full absolute inset-0 object-cover"
            />
            <div class="w-full h-full absolute inset-0 img-overlay dark"></div>
        </div>

        <div className="bg bg-gray-100 pb-40">
            <div id="about" data-aos="fade-up">
                <div className="container lg:max-w-[60%] py-40 text-center">
                    <h3 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-display font-bold text-black pb-4 border-b-2 border-orange">Über Turn Key Solar</h3>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        Wir sind ein führendes Unternehmen im Bereich erneuerbare Energien und spezialisiert auf die Planung, Installation und Wartung von Photovoltaik-Anlagen. Mit unserer langjährigen Erfahrung und unserem Know-how bieten wir maßgeschneiderte Lösungen für private und gewerbliche Kunden in Paderborn und Umgebung.
                    </div>
                </div>
            </div>

            <div className="container lg:max-w-[60%] text-center mb-14" data-aos="fade-up">
                <div className="text-center inline-block text-xl md:text-2xl lg:text-3xl lg:text-4xl font-display text-black pb-2 mb-6">
                    <div className="wrap relative headline">
                        <div className="line border-b-2 border-orange w-full absolute top-2/4"></div>
                        <div className="text inline bg-gray-100 p-4 relative">Leistungen</div>
                    </div>
                </div>
                <div className="text-lg text-center font-light leading-normal">
                Erneuerbare Energie, maßgeschneidert für Sie: Entdecken Sie unsere vielfältigen Services für Photovoltaik-Anlagen.
                </div>
            </div>
            <Service />
        </div>

        <div className="bg">
            <div className="bg parallax h-screen relative" style={{ "background-image": "url('https://ik.imagekit.io/smetana/2812.jpg?updatedAt=1713563473046')" }}>
                <div class="w-full h-full absolute inset-0 img-overlay"></div>
                <div className="container text-center h-full flex flex-col justify-center relative">
                    <div className="text-6xl lg:text-14xl font-bold text-animation">Nachhaltig in die Zukunft</div>
                    <p className="text-lg lg:text-2xl mt-10 text-white">Profitieren Sie von unserer langjährigen Branchenexpertise. Wir bieten effiziente Solaranlagen für Unternehmen und Privathaushalte.</p>
                </div>
            </div>
        </div>

        <div className="bg bh-white pb-20">
            <div id="about" data-aos="fade-up">
                <div className="container lg:max-w-[60%] py-40 text-center">
                    <h3 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-display font-bold text-black pb-4 border-b-2 border-orange">Unsere Projekte</h3>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
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
            <div className="w-1/4 w-2/4 w-1/3 w-2/3 lg:w-1/4 lg:w-2/4 lg:w-1/3 lg:w-2/3 lg:w-1/4 xl:w-2/4 xl:w-1/3 xl:w-2/3"></div>
        </div>
    </Layout>
  )
}
