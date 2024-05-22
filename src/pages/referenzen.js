import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Projects from "../components/projectsAll"

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

        <div className="bg bg-white pb-5" data-aos="fade-up">
            <div id="about" data-aos="fade-up">
                <div className="container lg:max-w-[60%] py-40 text-center">
                    <h3 className="text-center inline-block mb-12 text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-display font-bold pb-4 border-b-2 border-orange">Unsere Projekte</h3>
                    <div className="text-lg lg:text-2xl text-center font-light leading-normal">
                        Tauchen Sie ein in unsere Welt der grünen Innovationen und lassen Sie sich von unseren Erfolgsgeschichten inspirieren. Unsere Projekte sind Ausdruck unserer Expertise und Leidenschaft für eine nachhaltige Zukunft.
                    </div>
                </div>
            </div>
            <Projects />
        </div>

        <div className="hidden">
            <div className="w-1/4 w-2/4"></div>
        </div>
    </Layout>
  )
}
