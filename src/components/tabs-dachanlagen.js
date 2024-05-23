import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import { CheckCircleIcon, ArrowTrendingUpIcon, WrenchScrewdriverIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function ServiceTabs({ data }) {
    let tabClassName = "text-center flex-1 border-b-4 border-gray-200 p-4 text-xl font-bold text-gray-500 cursor-pointer";
    return (
        <Tabs>
            <TabList className="mb-10 flex flex-wrap gap-4 justify-between">
                <Tab className={tabClassName}>
                    Machbarkeitsstudie
                </Tab>
                <Tab className={tabClassName}>
                    Dachsanierung
                </Tab>
                <Tab className={tabClassName}>
                    Eigenverbrauch
                </Tab>
                <Tab className={tabClassName}>
                    Contracting
                </Tab>
            </TabList>
        
            <TabPanel>
                <div class="flex flex-col xl:flex-row gap-20 items-center">
                    <div class="basis-full xl:basis-1/2 py-10">
                        <h2 className="text-3xl font-bold mb-4">Ihr erster Schritt zum erfolgreichen Dachprojekt</h2>
                        <p className="mb-10"> Erfahren Sie die Realisierbarkeit Ihres Dachprojekts mit unserer präzisen Machbarkeitsstudie. Wir analysieren technische und wirtschaftliche Aspekte, um optimale Ergebnisse zu gewährleisten.</p>
                        <ul>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Detaillierte Analyse von Dachprojekten</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Bewertung technischer und wirtschaftlicher Faktoren</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Entscheidungshilfe für zukünftige Investitionen</li>
                        </ul>
                        <Link to="/machbarkeitsstudie" className="mt-10 py-2 px-5 inline-block border-2 border-orange rounded-full hover:bg-orange hover:text-white">mehr erfahren</Link>
                    </div>
                    <div class="basis-full xl:basis-1/2 relative">
                        <StaticImage
                            src="../images/13000103.jpg"
                            alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={705}
                            height={450}
                            objectFit="cover"
                            quality="90"
                            class="w-full h-full max-h-[450px] object-cover"
                        />
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div class="flex flex-col xl:flex-row gap-20 items-center">
                    <div class="basis-full xl:basis-1/2 py-10">
                        <h2 className="text-3xl font-bold mb-4">Für ein langlebiges und effizientes Dach</h2>
                        <p className="mb-10">Verlängern Sie die Lebensdauer Ihres Daches und steigern Sie die Energieeffizienz mit unserer professionellen Dachsanierung. Wir bieten maßgeschneiderte Lösungen zur Instandsetzung und Modernisierung.</p>
                        <ul>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Fachgerechte Erneuerung und Instandsetzung</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Verbesserung der Energieeffizienz</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Schutz und Werterhalt Ihrer Immobilie</li>
                        </ul>
                        <Link to="/dachsanierung" className="mt-10 py-2 px-5 inline-block border-2 border-orange rounded-full hover:bg-orange hover:text-white">mehr erfahren</Link>
                    </div>
                    <div class="basis-full xl:basis-1/2 relative">
                        <StaticImage
                            src="../images/992.jpg"
                            alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={705}
                            height={450}
                            objectFit="cover"
                            quality="90"
                            class="w-full h-full max-h-[450px] object-cover"
                        />
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div class="flex flex-col xl:flex-row gap-20 items-center">
                    <div class="basis-full xl:basis-1/2 py-10">
                        <h2 className="text-3xl font-bold mb-4">Eigenverbrauch optimieren: Sparen Sie mit Ihrer eigenen Energie</h2>
                        <p className="mb-10">Nutzen Sie Ihre eigene Energie effizienter und sparen Sie Kosten mit unseren Lösungen für den Eigenverbrauch. Wir bieten intelligente Energiemanagementsysteme, um Ihre Energiequellen optimal zu nutzen.</p>
                        <ul>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Maximierung der Nutzung eigener Energiequellen</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Kosteneinsparung durch Energiemanagement</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Nachhaltige und effiziente Energieversorgung</li>
                        </ul>
                        <Link to="/eigenverbrauch" className="mt-10 py-2 px-5 inline-block border-2 border-orange rounded-full hover:bg-orange hover:text-white">mehr erfahren</Link>
                    </div>
                    <div class="basis-full xl:basis-1/2 relative">
                        <StaticImage
                            src="../images/6656.jpg"
                            alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={705}
                            height={450}
                            objectFit="cover"
                            quality="90"
                            class="w-full h-full max-h-[450px] object-cover"
                        />
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div class="flex flex-col xl:flex-row gap-20 items-center">
                    <div class="basis-full xl:basis-1/2 py-10">
                        <h2 className="text-3xl font-bold mb-4">Realisieren Sie Ihr Dachprojekt ohne finanzielle Hürden</h2>
                        <p className="mb-10">Realisieren Sie Ihre Dachprojekte ohne finanzielle Belastung durch unser Contracting-Angebot. Wir bieten flexible Vertragsmodelle und übernehmen die Finanzierung und Umsetzung Ihrer Projekte.</p>
                        <ul>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Finanzierung und Umsetzung durch erfahrene Partner</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Flexible und maßgeschneiderte Vertragsmodelle</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Risikofreie Realisierung Ihrer Projekte</li>
                        </ul>
                        <Link to="/contracting" className="mt-10 py-2 px-5 inline-block border-2 border-orange rounded-full hover:bg-orange hover:text-white">mehr erfahren</Link>
                    </div>
                    <div class="basis-full xl:basis-1/2 relative">
                        <StaticImage
                            src="../images/447.jpg"
                            alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={705}
                            height={450}
                            objectFit="cover"
                            quality="90"
                            class="w-full h-full max-h-[450px] object-cover"
                        />
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    )
}
    