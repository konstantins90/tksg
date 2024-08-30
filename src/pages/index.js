import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../components/seo"
import Counter from "../components/counter"
import Service from "../components/service"
import Projects from "../components/projects"
import Steps from "../components/steps"
import Map from "../components/map"
import Kontakt from "../components/kontakt"

import { PhoneIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'

export default function Home({ data }) {
  return (
    <Layout>
        <div id="banner" class="-mt-24 relative w-full min-h-screen py-12 px-12">
            <div class="relative z-10 text-center py-24 xl:py-48">
                <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-display font-bold mb-12">Turn Key Solar GmbH</h1>
                <h2 class="inline-block text-white font-light text-xl md:text-xl lg:text-2xl lg:text-3xl">Ihr Experte für Photovoltaik-Anlagen<br/>im Kreis Paderborn</h2>
            </div>
            <div class="container">
                <Counter/>
            </div>
            <StaticImage
                src="../images/turnkey-solar-banner-photovoltaik-analge.webp"
                alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
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
                    <h3 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Über Turn Key Solar</h3>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        Wir sind ein führendes Unternehmen im Bereich erneuerbare Energien und spezialisiert auf die Planung, Installation und Wartung von Photovoltaik-Anlagen. Mit unserer langjährigen Erfahrung und unserem Know-how bieten wir maßgeschneiderte Lösungen für private und gewerbliche Kunden in Paderborn und Umgebung.
                    </div>
                </div>
            </div>

            <div className="container lg:max-w-[60%] text-center mb-14" data-aos="fade-up">
                <div className="text-center inline-block text-xl md:text-2xl lg:text-3xl lg:text-4xl font-display pb-2 mb-6">
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
            <div className="container py-5">
                <Link to="/leistungen" className="text-2xl">Alle Leistungen <ArrowRightCircleIcon className="inline h-8 w-8 ml-2" /></Link> 
            </div>
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

        <div className="bg bg-white pb-20">
            <div id="about" data-aos="fade-up">
                <div className="container lg:max-w-[60%] py-40 text-center">
                    <h3 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Unsere Projekte</h3>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        Tauchen Sie ein in unsere Welt der grünen Innovationen und lassen Sie sich von unseren Erfolgsgeschichten inspirieren. Unsere Projekte sind Ausdruck unserer Expertise und Leidenschaft für eine nachhaltige Zukunft.
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-8 pb-2 lg:pb-4" data-aos="fade-up">
                <Map />
            </div>
            <Projects />
        </div>

        <div className="bg bg-gray-100">
            <div id="about" data-aos="fade-up">
                <div className="container lg:max-w-[60%] pt-40 pb-20 overflow-hidden">
                    <div className="text-center inline-block text-xl md:text-2xl lg:text-3xl lg:text-4xl font-display pb-2 mb-6">
                        <div className="wrap relative headline">
                            <div className="text inline bg-gray-100 relative">Schritt für Schritt zur Solaranlage</div>
                        </div>
                    </div>
                    <div className="text-lg lg:text-2xl font-light leading-normal">
                        Von individueller Beratung bis zur erfolgreichen Inbetriebnahme – wir begleiten Sie auf jedem Schritt. Vertrauen Sie auf unsere Expertise für eine nachhaltige Energiezukunft.
                    </div>

                    <Steps />
                </div>
            </div>
        </div>

        {/* <div className="bg bg-white">
            <div id="contact" data-aos="fade-up">
                <div className="container lg:max-w-[60%] py-40 text-center">
                    <h3 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-display font-bold pb-4 border-b-2 border-orange">
                        Experten für Photovoltaik-Anlagen
                    </h3>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        Erfahren Sie, wie Sie durch unsere Photovoltaik-Angebote Ihre Energiekosten senken können. Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? Unser Team steht Ihnen gerne zur Verfügung.
                    </div>
                    <div className="mt-10">
                            <p className="text-lg font-light leading-normal">Besuchen Sie uns vor Ort</p>
                            <p className="text-xl">Turn Key Solar GmbH</p>
                            <p className="text-xl">Zum Strothebach 22 • 33175 Bad Lippspringe</p>
                    </div>
                    <a href="tel:+4952549386539" className="call-to-action bg-animation mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 group-hover:text-white">
                            <p className="text-lg font-light leading-normal">Rufen Sie uns an</p>
                            <div className="flex items-center justify-center">
                                <PhoneIcon className="inline h-5 w-5 mr-2" />
                                <span className="text-xl">+49 5254 938 65 39</span>
                            </div>
                        </span>
                    </a>
                </div>
            </div>
        </div> */}

        <Kontakt />

        <div className="hidden">
            <div className="w-1/4 w-2/4 w-1/3 w-2/3 lg:w-1/4 lg:w-2/4 lg:w-1/3 lg:w-2/3 lg:w-1/4 xl:w-2/4 xl:w-1/3 xl:w-2/3"></div>
        </div>
    </Layout>
  )
}

export const Head = () => (
    <SEO />
  )