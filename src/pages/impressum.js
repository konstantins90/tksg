import React from "react"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../components/seo"
import Banner from "../components/banner"

export default function Impressum({ data }) {
  return (
    <Layout>
        <Banner />
        <div className="bg-white h-full min-height">
            <div className="container">
                <div className="py-6 lg:py-24">
                    <h3 className="text-2xl md:text-4xl uppercase font-medium text-gray-600">Impressum</h3>
                    <div className="divider"></div>
                    <div>
                        <p className="text-xl text-gray-800">Angaben gemäß § 5 TMG:</p>
                        <p className="mt-4 text-gray-500">
                            Turn Key Solar GmbH<br/>
                            Geschäftsführung: Andreas Spreier<br/>
                            Anton-Bartscher-Straße 7<br />
                            33154 Salzkotten<br/><br/>

                            Telefon: +49 5254 94785 64<br/>
                            E-Mail: info@turnkey-solar.de<br/><br/>

                            Amtsgericht Paderborn HRB 16386<br/>
                            Umsatzsteuernr.: 339/5850/4089
                        </p>
                        <p className="mt-10">
                            Design & Programmierung: <a target="_blank" href="https://smetana.be">Konstantin Smetana</a><br />
                            Fotografie: <a target="_blank" href="https://www.instagram.com/mariia_muss_photo/">Mariia Muss</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export const Head = () => (
    <SEO
        title = "Impressum | Turn Key Solar GmbH - Photovoltaik-Experte in Paderborn"
    />
)
