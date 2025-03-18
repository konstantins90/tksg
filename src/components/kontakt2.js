import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Kontakt = () => {
    return (
        <div id="contact" className="container py-40 lg:max-w-[60%]" data-aos="fade-up">
            <div className="headline text-center pb-20">
                <h3 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Lassen Sie sich jetzt von uns beraten!</h3>
                <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                    Mit uns erhalten Sie nicht nur eine leistungsstarke Photovoltaikanlage, sondern auch die Gewissheit, dass sie <strong>nach den neuesten Sicherheitsstandards gebaut</strong> wurde – sei es für den <strong>privaten Bereich, Gewerbe oder die Industrie</strong>.
                </div>
            </div>
            <div className="flex flex-wrap gap-20 justify-center">
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
        </div>
    )
}

export default Kontakt