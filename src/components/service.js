import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Service({ data }) {
  return (
    <div id="service" className="container flex flex-col lg:flex-row gap-4 lg:gap-8" data-aos="fade-up">
        <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:gap-8">
            <div class="bg-blue text-white p-8 relative h-[19rem]">
                <div className="absolute z-10 bottom-8">
                    <h3 className="text-xl mb-4 font-bold">
                        Aufdachanlagen
                    </h3>
                    <p className="text-sm">
                        Für Privat und Gewerbe Gebäude
                    </p>
                </div>
                <StaticImage
                    src="../images/anlagen.jpg"
                    alt="Anlagen"
                    placeholder="blurred"
                    layout="constrained"
                    width={700}
                    imgStyle={{ 'object-position': 'right center' }}
                    objectFit="cover"
                    class="w-full h-full absolute inset-0 object-cover"
                    imgClassName="w-full h-full"
                />
                <div class="w-full h-full absolute inset-0 img-overlay dark"></div>
            </div>
            <div class="bg-blue text-white p-8 h-[11rem]">                    
                <h3 className="text-xl mb-4 font-bold">
                    Eigenverbrauch- und Speicherlösungen
                </h3>
                <p className="text-sm">
                    Effiziente Eigenverbrauch- und Speicherlösungen für maximale Unabhängigkeit und Kostenersparnis.
                </p>
            </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:gap-8">
            <div class="bg-blue text-white p-8 h-[10rem]">
                <h3 className="text-xl mb-4 font-bold">
                    Asbestsanierung
                </h3>
                <p className="text-sm">
                    Sichere Entfernung und fachgerechte Entsorgung von asbesthaltigem Material
                </p>
            </div>
            <div class="bg-blue text-white p-8 relative h-[20rem]">
                <div className="absolute z-10 bottom-8">
                    <h3 className="text-xl mb-4 font-bold">
                        Freiflächenanlagen
                    </h3>
                    <p className="text-sm">
                        Materialbeschaffung & Logistik
                    </p>
                </div>
                <StaticImage
                    src="../images/solar-wind.jpg"
                    alt="Anlagen"
                    placeholder="blurred"
                    layout="constrained"
                    width={700}
                    imgStyle={{ 'object-position': 'right center' }}
                    objectFit="cover"
                    class="w-full h-full absolute inset-0 object-cover"
                    imgClassName="w-full h-full"
                />
                <div class="w-full h-full absolute inset-0 img-overlay dark"></div>
            </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:gap-8 relative h-[32rem]">
            <div class="bg-blue text-white p-8">
                <div className="absolute z-10 bottom-8">
                    <h3 className="text-xl mb-4 font-bold">
                        Technische Betriebsführung
                    </h3>
                    <p className="text-sm">
                        Professionelle technische Betriebsführung für eine zuverlässige und optimierte Anlagenleistung.
                    </p>
                </div>
                <StaticImage
                    src="../images/working.jpg"
                    alt="Anlagen"
                    placeholder="blurred"
                    layout="constrained"
                    width={700}
                    imgStyle={{ 'object-position': 'right center' }}
                    objectFit="cover"
                    class="w-full h-full absolute inset-0 object-cover"
                    imgClassName="w-full h-full"
                />
                <div class="w-full h-full absolute inset-0 img-overlay dark"></div>
            </div>
        </div>
    </div>
  )
}
