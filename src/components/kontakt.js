import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Kontakt = () => {
    return (
        <div id="contact" className="container py-40 lg:max-w-[60%]" data-aos="fade-up">
            <div className="headline text-center pb-20">
                <h3 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Ihre Ansprechpartner</h3>
                <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                    Unser erfahrenes Team steht Ihnen jederzeit zur Verfügung, um Ihre Fragen zu beantworten und Sie bei Ihrem Photovoltaik-Projekt zu unterstützen. Finden Sie hier Ihren direkten Ansprechpartner für eine kompetente Beratung.
                </div>
            </div>
            <div className="flex flex-wrap gap-20 justify-center">
                <div className="person">
                    <div className="image overflow-hidden rounded-full max-w-[250px] max-h-[250px]">
                        <StaticImage
                            src="../images/team-6.jpg"
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
                        <div className="font-bold text-lg">Katarina Mustermann</div>
                        <div className="italic text-gray-400">Dachanlagen Spezialist</div>
                        <div className="mt-2">
                            <a href="tel:+49 5254 938 65 39">+49 5254 938 65 39</a>
                        </div>
                    </div>
                </div>
                <div className="person">
                    <div className="image overflow-hidden rounded-full max-w-[250px] max-h-[250px]">
                        <StaticImage
                            src="../images/team-4.jpg"
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
                        <div className="font-bold text-lg">Emilie Tester</div>
                        <div className="italic text-gray-400">Solar Spezialistin</div>
                        <div className="mt-2">
                            <a href="tel:+49 5254 938 65 39">+49 5254 938 65 39</a>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Kontakt