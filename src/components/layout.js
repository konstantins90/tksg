import React from "react";
import { Link } from "gatsby"
import Header from "../components/header"

export default function Layout({ children }) {
  return (
    <>
        <Header />
        {children}
        <footer class="bg-gray-800">
            <div class="container py-6">
                <div class="md:flex justify-between items-end">
                    <div class="text-gray-400 text-sm text-center md:text-left">
                        <p>Turn Key Solar GmbH • Zum Strothebach 22 • 33175 Bad Lippspringe</p>
                        <p><a href="tel: +4952549386539">+49 5254 9386539</a> • <a href="mailto: info@turnkey-solar.de@">info@turnkey-solar.de</a></p>
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