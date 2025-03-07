import React from "react";
import { Link } from "gatsby"
import Header from "../components/header"

const Layout = ({ children }) => {
    let serviceLinks = [
        {
            "link": "/leistungen",
            "name": "Leistungen"
        },
        {
            "link": "/projektentwicklung",
            "name": "Projektentwicklung"
        },
        {
            "link": "/anlagenbetrieb",
            "name": "Anlagenbetrieb"
        },
        {
            "link": "/anlagenerrichtung",
            "name": "Anlagenerrichtung"
        },
        {
            "link": "/baugenehmigung",
            "name": "Baugenehmigung"
        },
        {
            "link": "/contracting",
            "name": "Contracting"
        },
        {
            "link": "/dachsanierung",
            "name": "Dachsanierung"
        },
        {
            "link": "/eigenverbrauch",
            "name": "Eigenverbrauch"
        },
        {
            "link": "/machbarkeitsstudie",
            "name": "Machbarkeitsstudie"
        },
        {
            "link": "/standortanalyse",
            "name": "Standortanalyse"
        },
        {
            "link": "/umweltpruefung",
            "name": "Umweltprüfung"
        }
    ]
    return (
    <>
        <Header />
        {children}
        <footer class="bg-gray-800">
            <div class="container py-10">
                <div class="md:flex justify-between items-end">
                    <div class="text-gray-400 text-center md:text-left">
                        <p className="font-bold">Turn Key Solar GmbH</p>
                        <p>Anton-Bartscher-Straße 7 • 33154 Salzkotten</p>
                        <p><a href="tel:+4952549478564">+49 5254 94785 64</a> • <a href="mailto: info@turnkey-solar.de@">info@turnkey-solar.de</a></p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 text-center mt-5 lg:mt-0 lg:text-left gap-y-2 gap-x-4 text-sm text-gray-400">
                        {serviceLinks.map(function(link, index) {
                            return (
                                <div>
                                    <Link to={link.link}>{link.name}</Link>
                                </div>
                            )
                        })}
                    </div>
                    <div class="mt-6 text-gray-400 text-sm text-center md:text-left md:mt-0">
                        <Link to="/impressum">Impressum</Link> • <Link to="/privacy-policy">Datenschutz</Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Layout