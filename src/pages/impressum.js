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
                            Zum Strothebach 22<br/>
                            33175 Bad Lippspringe<br/><br/>

                            Telefon: +49 5254 9386539<br/>
                            E-Mail: info@turnkey-solar.de<br/><br/>

                            Amtsgericht Paderborn HRB 16386<br/>
                            Umsatzsteuernr.: 339/5850/4089
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
