import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../components/seo"
import Banner from "../components/banner"

export default function Projektentwicklung({ data }) {
  return (
    <Layout>
        <Banner />

        <div className="bg bg-white pb-40 overflow-hidden" data-aos="fade-up">
            <div id="about">
                <div className="container lg:max-w-[60%] py-40 text-center">
                    <h1 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Unser Office-Team</h1>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        Unser engagiertes Team von Experten steht Ihnen jederzeit zur Seite. Mit langjähriger Erfahrung und tiefgreifendem Fachwissen in der Planung, Installation und Wartung von Photovoltaikanlagen bieten wir maßgeschneiderte Lösungen für private und gewerbliche Kunden in Paderborn und Umgebung.
                    </div>
                </div>
            </div>
           <div className="photos">
            <div className="flex flex-wrap gap-20 justify-center mb-20">
                <div className="person">
                    <div className="image overflow-hidden rounded-full max-w-[250px] max-h-[250px]">
                        <StaticImage
                            src="../images/team/Turnkey-Solar-Andreas-Speier.jpg"
                            alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={250}
                            quality={90}
                            imgStyle={{ 'object-position': 'right center' }}
                            objectFit="cover"
                            class="w-full posistion"
                        />
                    </div>
                    <div className="name text-center py-5">
                        <div className="font-bold text-lg">Andreas Speier</div>
                        <div className="italic text-gray-400">Geschäftsführer</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-20 justify-center mb-20">
                    <div className="person">
                        <div className="image overflow-hidden rounded-full max-w-[250px] max-h-[250px]">
                            <StaticImage
                                src="../images/team/Turnkey-Solar-Gabriela-Mainusch.jpg"
                                alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                                placeholder="blurred"
                                layout="constrained"
                                width={250}
                                quality={90}
                                imgStyle={{ 'object-position': 'right center' }}
                                objectFit="cover"
                                class="w-full posistion"
                            />
                        </div>
                        <div className="name text-center py-5">
                            <div className="font-bold text-lg">Gabriela Mainusch</div>
                            <div className="italic text-gray-400">Assistenz der Geschäftsführung</div>
                            <div className="mt-2">
                                <a href="tel:+491738655073">T: +49 173 8655073</a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="person">
                        <div className="image overflow-hidden rounded-full max-w-[250px] max-h-[250px]">
                            <StaticImage
                                src="../images/team/Turnkey-Solar-Kirsten-Blume.jpg"
                                alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                                placeholder="blurred"
                                layout="constrained"
                                width={250}
                                quality={90}
                                imgStyle={{ 'object-position': 'right center' }}
                                objectFit="cover"
                                class="w-full posistion"
                            />
                        </div>
                        <div className="name text-center py-5">
                            <div className="font-bold text-lg">Kirsten Blume</div>
                            <div className="italic text-gray-400">Assistenz der Geschäftsführung</div>
                            <div className="mt-2">
                                <a href="tel:+491734859764">T: +49 173 4859764</a>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="flex flex-wrap gap-20 justify-center mb-20">
                <div className="person">
                    <div className="image overflow-hidden rounded-full max-w-[250px] max-h-[250px]">
                        <StaticImage
                            src="../images/team/Turnkey-Solar-Waldemar-Neufeld.jpg"
                            alt="Photovoltaik Analge gebaut von Turn Key Solar GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={250}
                            quality={90}
                            imgStyle={{ 'object-position': 'right center' }}
                            objectFit="cover"
                            class="w-full posistion"
                        />
                    </div>
                    <div className="name text-center py-5">
                        <div className="font-bold text-lg">Waldemar Neufeld</div>
                        <div className="italic text-gray-400">Projektleiter</div>
                        <div className="mt-2">
                            <a href="tel:+491727598613">T: +49 172 7598613</a>
                        </div>
                    </div>
                </div>
                <div className="person">
                    <div className="image max-w-[250px] max-h-[250px]">
                        <div className="text-8xl text-center w-[250px] h-[250px] flex items-center justify-center shadow-inner rounded-full shadow-gray-300">IT</div>
                    </div>
                    <div className="name text-center py-5">
                        <div className="font-bold text-lg">Ivan Tihon</div>
                        <div className="italic text-gray-400">Projektleiter</div>
                        <div className="mt-2">
                            <a href="tel:+491724545547">T: +49 172 4545547</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-20 justify-center mb-20">
                <div className="person">
                    <div className="image overflow-hidden rounded-full max-w-[250px] max-h-[250px]">
                        <StaticImage
                            src="../images/team/Turnkey-Solar-Petro-Fotiuk.jpg"
                            alt="Petro Fotiuk von Turn Key Solar GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={250}
                            quality={90}
                            imgStyle={{ 'object-position': 'right center' }}
                            objectFit="cover"
                            class="w-full posistion"
                        />
                    </div>
                    <div className="name text-center py-5">
                        <div className="font-bold text-lg">Petro Fotiuk</div>
                        <div className="italic text-gray-400">Wartung</div>
                        <div className="mt-2">
                            <a href="tel:+4952549478560">T: +49 5254 94785 60</a>
                        </div>
                    </div>
                </div>
                <div className="person">
                    <div className="image overflow-hidden rounded-full max-w-[250px] max-h-[250px]">
                        <StaticImage
                            src="../images/team/Turnkey-Solar-Stephan-Henke.jpg"
                            alt="Stephan Henke von Turn Key Solar GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={250}
                            quality={90}
                            imgStyle={{ 'object-position': 'right center' }}
                            objectFit="cover"
                            class="w-full posistion"
                        />
                    </div>
                    <div className="name text-center py-5">
                        <div className="font-bold text-lg">Stephan Henke</div>
                        <div className="italic text-gray-400">Monitoring</div>
                        <div className="mt-2">
                            <a href="tel:+491734859752">T: +49 173 4859752</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-20 justify-center">
                <div className="person">
                    <div className="image overflow-hidden rounded-full max-w-[250px] max-h-[250px]">
                        <StaticImage
                            src="../images/team/Turnkey-Solar-Sobaka.jpg"
                            alt="Christina Kruse von SSR Eletrotechnik GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={250}
                            quality={90}
                            imgStyle={{ 'object-position': 'right center' }}
                            objectFit="cover"
                            class="w-full posistion"
                        />
                    </div>
                    <div className="name text-center py-5">
                        <div className="font-bold text-lg">Paul</div>
                        <div className="italic text-gray-400">Wachhund</div>
                    </div>
                </div>
                <div className="person">
                    <div className="image overflow-hidden rounded-full max-w-[250px] max-h-[250px]">
                        <StaticImage
                            src="../images/team/Turnkey-Solar-Sobaka-Small.jpg"
                            alt="Christian Costales Castro von SSR Eletrotechnik GmbH"
                            placeholder="blurred"
                            layout="constrained"
                            width={250}
                            quality={90}
                            imgStyle={{ 'object-position': 'right center' }}
                            objectFit="cover"
                            class="w-full posistion"
                        />
                    </div>
                    <div className="name text-center py-5">
                        <div className="font-bold text-lg">Hinata</div>
                        <div className="italic text-gray-400">Empfangsdame</div>
                    </div>
                </div>
            </div>
           </div>
           <div id="about">
                <div className="container lg:max-w-[60%] py-20 text-center">
                    <div className="text-lg text-center font-light leading-normal">
                        <p>
                            Jeder von uns bringt seine Expertise und Leidenschaft für erneuerbare Energien ein, um Ihnen den besten Service zu bieten.
                        </p>
                        <p>
                            Kontaktieren Sie uns für eine individuelle Beratung.
                        </p>
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

export const Head = () => (
    <SEO
        title = "Anlagenbetrieb für Photovoltaikanlagen in Paderborn | Turn Key Solar GmbH"
        description = "Turn Key Solar GmbH bietet umfassenden Service für den Anlagenbetrieb Ihrer Photovoltaikanlage in Paderborn und Umgebung. Effiziente Wartung, zuverlässige Überwachung und maximale Leistung für Ihre Solaranlage."
    />
  )
