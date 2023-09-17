import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
        <div class="pt-16 h-3/4 bg-yellow">
            <div class="relative h-full flex">
                <div class="container h-full flex items-center">
                    <div class="relative z-10 text-gray-700">
                        <h1 class="text-3xl md:text-6xl">Elektroinstallationen</h1>
                        <p class="text-xl md:text-2xl">Privat-, Gewerbe- und Industriekunden</p>
                        <Link to="/leistungen" class="inline-block btn btn-head-img border border-gray-700 uppercase mt-4 md:bg-transparent hover:bg-white">Alle unsere Leistungen</Link>
                    </div>
                </div>
                <StaticImage
                    src="../images/solar-home.jpg"
                    alt="SSR"
                    placeholder="blurred"
                    layout="constrained"
                    width={1920}
                    imgStyle={{ 'object-position': 'right center' }}
                    objectFit="cover"
                />
            </div>
        </div>
        <div class="bg-white">
            <div class="container py-6 md:py-24">
                <div class="flex items-center">
                    <div>
                        
                    </div>
                    <div>
                        <p class="text-gray-500 md:max-w-3/4 mx-auto">
                            Die SSR Elektrotechnik GmbH & Co. KG verkörpert Werte, die auf Qualität, Sicherheit und Kundenzufriedenheit fußen. Mit einer langjährigen Erfolgsgeschichte in der Elektrobranche stehen wir für erstklassige Handwerkskunst und technische Expertise.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-200">
            <div class="container h-full">
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
                    <div class="-mx-4 pb-6 lg:mx-0 lg:py-24">
                        
                    </div>
                    <div class="py-6 lg:py-24">
                        <h3 class="text-2xl md:text-4xl uppercase font-medium text-gray-600">Elektroanlagen</h3>
                        <div class="divider"></div>
                        <div>
                            <p class="text-xl text-gray-800">Fachkundige Elektroinstallationsdienstleistungen</p>
                            <p class="mt-4 text-gray-500">
                                Unser erfahrenes Team von SSR Elektrotechnik ist auf die reibungslose Installation modernster elektrischer Anlagen spezialisiert.<br/><br/>
                                Mit einem Fokus auf Sicherheit und Präzision setzen wir Baupläne in voll funktionsfähige Realitäten um. Ob für Wohn-, Gewerbe- oder Industrieprojekte – wir garantieren effiziente und normgerechte Lösungen für all Ihre elektrischen Anforderungen.</p>
                            <button class="btn bg-white mt-4 hover:bg-gray-50">Anlage planen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white">
            <div class="container h-full">
                <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
                    <div class="-mx-4 pb-6 lg:mx-0 lg:py-24 lg:order-2">
                    
                    </div>
                    <div class="py-6 lg:py-24 lg:order-1">
                        <h3 class="text-2xl md:text-4xl uppercase font-medium text-gray-600">Photovoltaikanlagen</h3>
                        <div class="divider"></div>
                        <div>
                            <p class="text-xl text-gray-800">Entdecken Sie die Zukunft der Energieerzeugung mit unseren Photovaltalk-Anlagen</p>
                            <p class="mt-4 text-gray-500">
                                Bei SSR Elektrotechnik bieten wir Ihnen innovative Photovoltaik-Lösungen, die die Sonnenenergie einfangen und in sauberen, nachhaltigen Strom umwandeln. Unsere maßgeschneiderten Photovaltalk-Anlagen sind darauf ausgelegt, Ihre Energiekosten zu senken und gleichzeitig einen positiven Beitrag zur Umwelt zu leisten. Vertrauen Sie unserer Expertise, um die Kraft der Sonne optimal zu nutzen.
                            </p>
                            <button class="btn bg-white border mt-4 hover:bg-gray-50">weitere Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="multibg">
            <div class="container h-full py-6">
                <div class="md:flex items-center">
                    <div class="flex-1">
                        <p class="text-2xl md:text-4xl uppercase text-white">Projekt-Referenzen</p>
                        <p class="text-white mt-3">Lassen Sie sich von unseren Referenzen inspirieren.</p>
                    </div>
                    <div>
                        <Link to="/referenzen" class="btn mt-4 text-white border border-white hover:bg-white hover:text-gray-500 md:mt-0">Zu den Referenzen</Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
