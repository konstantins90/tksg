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
            <TabList className="mb-10 flex gap-4 justify-between">
                <Tab className={tabClassName}>
                    Standortanalyse
                </Tab>
                <Tab className={tabClassName}>
                    Baugenehmigung
                </Tab>
                <Tab className={tabClassName}>
                    Umweltprüfung
                </Tab>
            </TabList>
        
            <TabPanel>
                <div class="flex flex-row gap-20 items-center">
                    <div class="basis-1/2 py-10">
                        <h2 className="text-3xl font-bold mb-4">Der Schlüssel zu Ihrer erfolgreichen Freilandanlage</h2>
                        <p className="mb-10">Optimieren Sie den Standort Ihrer Freilandanlage mit unserer detaillierten Standortanalyse. Wir evaluieren alle relevanten Faktoren, um den idealen Platz für Ihre Investition zu bestimmen.</p>
                        <ul>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Umfassende Bewertung potenzieller Standorte</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Berücksichtigung von Umwelt- und Wetterbedingungen</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Maximierung des Ertragspotenzials</li>
                        </ul>
                        <Link to="/standortanalyse" className="mt-10 py-2 px-5 inline-block border-2 border-orange rounded-full hover:bg-orange hover:text-white">mehr erfahren</Link>
                    </div>
                    <div class="basis-1/2 relative -order-1">
                        <StaticImage
                            src="../images/42559.jpg"
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
                <div class="flex flex-row gap-20 items-center">
                    <div class="basis-1/2 py-10">
                        <h2 className="text-3xl font-bold mb-4">Sichere Genehmigungen für Ihr Freilandprojekt</h2>
                        <p className="mb-10">Sichern Sie sich eine reibungslose Baugenehmigung für Ihre Freilandanlage mit unserer Unterstützung. Wir führen Sie durch alle behördlichen Anforderungen und sorgen für eine zügige Genehmigung.</p>
                        <ul>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Unterstützung bei der Antragstellung</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Beratung zu gesetzlichen Anforderungen</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Effiziente Abwicklung des Genehmigungsverfahrens</li>
                        </ul>
                        <Link to="/baugenehmigung" className="mt-10 py-2 px-5 inline-block border-2 border-orange rounded-full hover:bg-orange hover:text-white">mehr erfahren</Link>
                    </div>
                    <div class="basis-1/2 relative -order-1">
                        <StaticImage
                            src="../images/62114.jpg"
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
                <div class="flex flex-row gap-20 items-center">
                    <div class="basis-1/2 py-10">
                        <h2 className="text-3xl font-bold mb-4">Nachhaltigkeit und Compliance für Ihre Freilandanlage</h2>
                        <p className="mb-10">Gewährleisten Sie die Umweltverträglichkeit Ihrer Freilandanlage durch unsere umfassende Umweltprüfung. Wir prüfen alle relevanten Umweltaspekte und stellen sicher, dass Ihr Projekt den gesetzlichen Vorgaben entspricht.</p>
                        <ul>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Detaillierte Umweltverträglichkeitsprüfungen</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Einhaltung aller gesetzlichen Vorschriften</li>
                            <li><CheckCircleIcon className="inline h-5 w-5 text-orange" /> Förderung nachhaltiger Projektentwicklung</li>
                        </ul>
                        <Link to="/umweltpruefung" className="mt-10 py-2 px-5 inline-block border-2 border-orange rounded-full hover:bg-orange hover:text-white">mehr erfahren</Link>
                    </div>
                    <div class="basis-1/2 relative -order-1">
                        <StaticImage
                            src="../images/65370.jpg"
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
    