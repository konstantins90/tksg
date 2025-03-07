import React from "react"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../components/seo"
import Banner from "../components/banner"

export default function Datenschutz({ data }) {
  return (
    <Layout>
        <Banner />
        <div className="bg-white h-full min-height">
            <div className="container">
                <div className="py-6 lg:py-24">
                    <h3 className="text-2xl mt-8 md:text-4xl uppercase font-medium text-gray-600">Datenschutzerklärung</h3>
                    <div className="divider"></div>
                    <div>
                    <div class="heading primary-heading text-left"><div class="desc"><h2 className="text-2xl mt-8">1. Datenschutz auf einen Blick</h2>
                    <h3 className="text-xl mt-4">Allgemeine Hinweise</h3>
                    <p className="mt-4">Die folgenden Hinweise geben einen einfachen Überblick darüber,
                    was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind
                    alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum
                    Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
                    Datenschutzerklärung.</p>
                    <h3 className="text-xl mt-4">Datenerfassung auf dieser Website</h3>
                    <h4>Wer ist verantwortlich für die Datenerfassung auf dieser
                    Website?</h4>
                    <p className="mt-4">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                    Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser
                    Datenschutzerklärung entnehmen.</p>
                    <h4>Wie erfassen wir Ihre Daten?</h4>
                    <p className="mt-4">Ihre Daten werden zum
                    einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein
                    Kontaktformular eingeben.</p>
                    <p className="mt-4">Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
                    der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
                    Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
                    Website betreten.</p>
                    <h4>Wofür nutzen wir Ihre Daten?</h4>
                    <p className="mt-4">Ein Teil der Daten wird erhoben, um eine
                    fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
                    Nutzerverhaltens verwendet werden.</p>
                    <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                    <p className="mt-4">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                    Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                    können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
                    unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                    verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde
                    zu.</p>
                    <p className="mt-4">Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns
                    wenden.</p>
                    <h3 className="text-xl mt-4">Analyse-Tools und Tools von Dritt­anbietern</h3>
                    <p className="mt-4">Beim Besuch dieser Website kann Ihr Surf-
                    Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p>
                    <p className="mt-4">Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
                    Datenschutzerklärung.</p>
                    <h2 className="text-2xl mt-8">2. Hosting</h2>
                    <p className="mt-4">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                    <h3 className="text-xl mt-4">Host Europe</h3>
                    <p className="mt-4">Anbieter ist die Host Europe GmbH, Hansestraße 111, 51149, Köln
                    (nachfolgend Host Europe) Wenn Sie unsere Website besuchen, erfasst Host Europe verschiedene Logfiles inklusive
                    Ihrer IP-Adressen.</p>
                    <p className="mt-4">Details entnehmen Sie der Datenschutzerklärung von Host Europe: <a href="https://www.hosteurope.de/AGB/Datenschutzerklaerung/" target="_blank" rel="noopener
                    noreferrer">https://www.hosteurope.de/AGB/Datenschutzerklaerung/</a>.</p>
                    <p className="mt-4">Die Verwendung von Host
                    Europe erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
                    möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt
                    wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs.
                    1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
                    Endgerät des Nutzers (z.&nbsp;B. für Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
                    Einwilligung ist jederzeit widerrufbar.</p>
                    <h4>Auftragsverarbeitung</h4>
                    <p className="mt-4">Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung
                    des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen
                    Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach
                    unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
                    <h2 className="text-2xl mt-8">3. Allgemeine Hinweise und Pflicht­informationen</h2>
                    <h3 className="text-xl mt-4">Datenschutz</h3>
                    <p className="mt-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr
                    ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                    Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                    <p className="mt-4">Wenn Sie diese Website benutzen,
                    werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
                    persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert,
                    welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
                    geschieht.</p>
                    <p className="mt-4">Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der
                    Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor
                    dem Zugriff durch Dritte ist nicht möglich.</p>
                    <h3 className="text-xl mt-4">Hinweis zur verantwortlichen Stelle</h3>
                    <p className="mt-4">Die verantwortliche Stelle für die Datenverarbeitung auf
                    dieser Website ist:</p>
                    <p className="mt-4">Turn Key Solar GmbH
                    Anton-Bartscher-Straße 7<br />
                    33154 Salzkotten</p>
                    <p className="mt-4">Telefon: +49 5254 9386539
                    E-Mail: info@turnkey-solar.de</p>
                    <p className="mt-4">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
                    über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-
                    Adressen o. Ä.) entscheidet.</p>
                    <h3 className="text-xl mt-4">Speicherdauer</h3>
                    <p className="mt-4">Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
                    genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
                    entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
                    Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
                    zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer-
                    oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall
                    dieser Gründe.</p>
                    <h3 className="text-xl mt-4">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                    <p className="mt-4">Sofern Sie
                    in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art.
                    6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                    verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener
                    Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.
                    Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z.&nbsp;B. via
                    Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von §
                    25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur
                    Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des
                    Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer
                    rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung
                    kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die
                    jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser
                    Datenschutzerklärung informiert.</p>
                    <h3 className="text-xl mt-4">Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</h3>
                    <p className="mt-4">Wir verwenden unter anderem
                    Tools von Unternehmen mit Sitz in den USA oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn
                    diese Tools aktiv sind, können Ihre personenbezogene Daten in diese Drittstaaten übertragen und dort
                    verarbeitet werden. Wir weisen darauf hin, dass in diesen Ländern kein mit der EU vergleichbares
                    Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu verpflichtet,
                    personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener hiergegen
                    gerichtlich vorgehen könnten. Es kann daher nicht ausgeschlossen werden, dass US-Behörden
                    (z.&nbsp;B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten,
                    auswerten und dauerhaft speichern. Wir haben auf diese Verarbeitungstätigkeiten keinen
                    Einfluss.</p>
                    <h3 className="text-xl mt-4">Empfänger von personenbezogenen Daten</h3>
                    <p className="mt-4">Im Rahmen unserer
                    Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch
                    eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben
                    personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung
                    erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an
                    Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben
                    oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern
                    geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über
                    Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame
                    Verarbeitung geschlossen.</p>
                    <h3 className="text-xl mt-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                    <p className="mt-4">Viele Datenverarbeitungsvorgänge sind
                    nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
                    jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                    Widerruf unberührt.</p>
                    <h3 className="text-xl mt-4">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21
                    DSGVO)</h3>
                    <p className="mt-4">WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F
                    DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER
                    BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
                    WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
                    PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN
                    SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE
                    BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR
                    KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
                    NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
                    VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
                    RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
                    <p className="mt-4">WERDEN IHRE
                    PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS
                    RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER
                    DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING,
                    SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN,
                    WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER
                    DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
                    <h3 className="text-xl mt-4">Beschwerde­recht bei der zuständigen Aufsichts­behörde</h3>
                    <p className="mt-4">Im Falle von
                    Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                    Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
                    unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
                    <h3 className="text-xl mt-4">Recht auf Daten­übertrag­barkeit</h3>
                    <p className="mt-4">Sie haben das Recht, Daten, die wir auf Grundlage
                    Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
                    einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte
                    Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
                    machbar ist.</p>
                    <h3 className="text-xl mt-4">Auskunft, Berichtigung und Löschung</h3>
                    <p className="mt-4">Sie haben im Rahmen der geltenden gesetzlichen
                    Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
                    Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
                    Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
                    Daten können Sie sich jederzeit an uns wenden.</p>
                    <h3 className="text-xl mt-4">Recht auf Einschränkung der Verarbeitung</h3>
                    <p className="mt-4">Sie haben das Recht, die Einschränkung der
                    Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden.
                    Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
                    <ul>
                    <li>Wenn Sie die
                    Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit,
                    um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
                    Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn die
                    Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt
                    der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                    <li>Wenn wir Ihre
                    personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
                    Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die
                    Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn Sie einen
                    Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren
                    Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das
                    Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    </ul>
                    <p className="mt-4">Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese
                    Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
                    Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
                    natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der
                    Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
                    <h3 className="text-xl mt-4">SSL- bzw. TLS-Verschlüsselung</h3>
                    <p className="mt-4">Diese Seite nutzt aus Sicherheitsgründen und zum Schutz
                    der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als
                    Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                    Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und
                    an dem Schloss-Symbol in Ihrer Browserzeile.</p>
                    <p className="mt-4">Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist,
                    können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
                    <h2 className="text-2xl mt-8">4. Datenerfassung auf dieser Website</h2>
                    <h3 className="text-xl mt-4">Cookies</h3>
                    <p className="mt-4">Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine
                    Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend
                    für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät
                    gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies
                    bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische
                    Löschung durch Ihren Webbrowser erfolgt.</p>
                    <p className="mt-4">Cookies können von uns (First-Party-Cookies) oder
                    von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung
                    bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.&nbsp;B. Cookies zur Abwicklung
                    von Zahlungsdienstleistungen).</p>
                    <p className="mt-4">Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch
                    notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z.&nbsp;B. die
                    Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des
                    Nutzerverhaltens oder zu Werbezwecken verwendet werden.</p>
                    <p className="mt-4">Cookies, die zur Durchführung des
                    elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen
                    (z.&nbsp;B. für die Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung
                    des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                    gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes
                    Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung
                    seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren
                    Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser
                    Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.</p>
                    <p className="mt-4">Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                    Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
                    ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
                    Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>
                    <p className="mt-4">Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser
                    Datenschutzerklärung entnehmen.</p>
                    <p className="mt-4">Zur Verwaltung der eingesetzten Cookies und ähnlichen Technologien (Tracking-Pixel, Web-Beacons etc.) und diesbezüglicher Einwilligungen setzen wir das Consent Tool "Real Cookie Banner" ein. Details zur Funktionsweise von "Real Cookie Banner" finden Sie unter <a href="https://devowl.io/de/rcb/datenverarbeitung/" rel="noreferrer" target="_blank">https://devowl.io/rcb/data-processing/</a>.</p>
                    <p className="mt-4">Rechtsgrundlagen für die Verarbeitung von personenbezogenen Daten in diesem Zusammenhang sind Art. 6 Abs. 1 lit. c DS-GVO und Art. 6 Abs. 1 lit. f DS-GVO. Unser berechtigtes Interesse ist die Verwaltung der eingesetzten Cookies und ähnlichen Technologien und der diesbezüglichen Einwilligungen.</p>
                    <p className="mt-4">Die Bereitstellung der personenbezogenen Daten ist weder vertraglich vorgeschrieben noch für den Abschluss eines Vertrages notwendig. Sie sind nicht verpflichtet die personenbezogenen Daten bereitzustellen. Wenn Sie die personenbezogenen Daten nicht bereitstellen, können wir Ihre Einwilligungen nicht verwalten.</p>
                    <h3 className="text-xl mt-4">Server-Log-Dateien</h3>
                    <p className="mt-4">Der Provider der Seiten erhebt und speichert automatisch Informationen in so
                    genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                    <ul>
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                    </ul>
                    <p className="mt-4">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
                    <p className="mt-4">Die
                    Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                    berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website –
                    hierzu müssen die Server-Log-Files erfasst werden.</p>
                    <h3 className="text-xl mt-4">Kontaktformular</h3>
                    <p className="mt-4">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
                    Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                    der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
                    Einwilligung weiter.</p>
                    <p className="mt-4">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                    sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                    vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
                    unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
                    DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist
                    jederzeit widerrufbar.</p>
                    <p className="mt-4">Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie
                    uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
                    Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
                    gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
                    <h3 className="text-xl mt-4">Anfrage per E-Mail, Telefon oder Telefax</h3>
                    <p className="mt-4">Wenn Sie uns per E-Mail, Telefon oder Telefax
                    die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
                    Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
                    wurde; die Einwilligung ist jederzeit widerrufbar.</p>
                    <p className="mt-4">Die von Ihnen an uns per Kontaktanfragen
                    übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
                    Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach
                    abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere
                    gesetzliche Aufbewahrungsfristen – bleiben unberührt.</p>
                    <h2 className="text-2xl mt-8">5. Plugins und Tools</h2>
                    <h3 className="text-xl mt-4">YouTube</h3>
                    <p className="mt-4">Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die
                    Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                    <p className="mt-4">Wenn Sie
                    eine unserer Webseiten besuchen, auf denen YouTube eingebunden ist, wird eine Verbindung zu den Servern von
                    YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.</p>
                    <p className="mt-4">Des Weiteren kann YouTube verschiedene Cookies auf Ihrem Endgerät speichern oder vergleichbare
                    Technologien zur Wiedererkennung verwenden (z.&nbsp;B. Device-Fingerprinting). Auf diese Weise kann YouTube
                    Informationen über Besucher dieser Website erhalten. Diese Informationen werden u.&nbsp;a. verwendet,
                    um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen
                    vorzubeugen.</p>
                    <p className="mt-4">Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr
                    Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich
                    aus Ihrem YouTube-Account ausloggen.</p>
                    <p className="mt-4">Die Nutzung von YouTube erfolgt im Interesse einer
                    ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs.
                    1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                    ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
                    Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers
                    (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
                    <p className="mt-4">Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von
                    YouTube unter: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener
                    noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
                    <h3 className="text-xl mt-4">Vimeo</h3>
                    <p className="mt-4">Diese Website nutzt Plugins des Videoportals Vimeo. Anbieter ist die Vimeo Inc., 555 West
                    18th Street, New York, New York 10011, USA.</p>
                    <p className="mt-4">Wenn Sie eine unserer mit einem Vimeo-Video
                    ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von Vimeo hergestellt. Dabei wird dem
                    Vimeo-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Zudem erlangt Vimeo Ihre IP-Adresse. Dies gilt
                    auch dann, wenn Sie nicht bei Vimeo eingeloggt sind oder keinen Account bei Vimeo besitzen. Die von Vimeo
                    erfassten Informationen werden an den Vimeo-Server in den USA übermittelt.</p>
                    <p className="mt-4">Wenn Sie in Ihrem
                    Vimeo-Account eingeloggt sind, ermöglichen Sie Vimeo, Ihr Surfverhalten direkt Ihrem persönlichen
                    Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem Vimeo-Account ausloggen.</p>
                    <p className="mt-4">Zur Wiedererkennung der Websitebesucher verwendet Vimeo Cookies bzw. vergleichbare
                    Wiedererkennungstechnologien (z.&nbsp;B. Device-Fingerprinting).</p>
                    <p className="mt-4">Die Nutzung von Vimeo erfolgt im
                    Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne
                    des Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                    ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
                    Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers
                    (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
                    <p className="mt-4">Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission sowie nach
                    Aussage von Vimeo auf „berechtigte Geschäftsinteressen“ gestützt. Details finden Sie
                    hier: <a href="https://vimeo.com/privacy" target="_blank" rel="noopener
                    noreferrer">https://vimeo.com/privacy</a>.</p>
                    <p className="mt-4">Weitere Informationen zum Umgang mit Nutzerdaten finden
                    Sie in der Datenschutzerklärung von Vimeo unter: <a href="https://vimeo.com/privacy" target="_blank" rel="noopener noreferrer">https://vimeo.com/privacy</a>.</p>
                    <h3 className="text-xl mt-4">Google Maps</h3>
                    <p className="mt-4">Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland
                    Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                    <p className="mt-4">Zur Nutzung der
                    Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der
                    Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat
                    keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der
                    einheitlichen Darstellung der Schriftarten Google Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr
                    Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt
                    anzuzeigen.</p>
                    <p className="mt-4">Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer
                    Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt
                    ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung
                    abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und
                    § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
                    Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist
                    jederzeit widerrufbar.</p>
                    <p className="mt-4">Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der
                    EU-Kommission gestützt. Details finden Sie hier: <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank" rel="noopener
                    noreferrer">https://privacy.google.com/businesses/gdprcontrollerterms/</a> und <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" target="_blank" rel="noopener
                    noreferrer">https://privacy.google.com/businesses/gdprcontrollerterms/sccs/</a>.</p>
                    <p className="mt-4">Mehr Informationen
                    zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener
                    noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
                    <h3 className="text-xl mt-4">iThemes Security</h3>
                    <p className="mt-4">Wir haben iThemes Security auf dieser Website eingebunden. Anbieter ist die
                    iThemes Media LLC, 1720 South Kelly Avenue Edmond, OK 73013, USA (nachfolgend „iThemes
                    Security“).</p>
                    <p className="mt-4">iThemes Security dient dem Schutz unserer Website vor unerwünschten Zugriffen
                    oder bösartigen Cyberattacken. Zu diesem Zweck erfasst iThemes Security u.&nbsp;a. Ihre IP-Adresse,
                    Zeitpunkt und Quelle von Login-Versuchen und Log-Daten (z.&nbsp;B. den verwendeten Browser). iThemes
                    Security wird lokal auf unseren Servern installiert.</p>
                    <p className="mt-4">iThemes Security übermittelt IP-Adressen von
                    wiederkehrenden Angreifern an eine zentrale Datenbank von iThemes in die USA (Network Brute Force Protection),
                    um derartige Angriffe künftig zu unterbinden.</p>
                    <p className="mt-4">Die Verwendung von iThemes Security erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                    Websitebetreiber hat ein berechtigtes Interesse an einem möglichst effektiven Schutz seiner Website vor
                    Cyberattacken. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                    ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
                    Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers
                    (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
                    <p className="mt-4">Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
                    </div></div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export const Head = () => (
    <SEO
        title = "Datenschutzerklärung | Turn Key Solar GmbH - Photovoltaik Paderborn"
    />
)
