import Head from 'next/head'
import { FieldGroup, ProjectField } from '/components/fields'
import { navbar } from '/components/navbar'
import { name, subtitle, title, plaintext, listDecimal, listBullet, explistDecimal } from '/components/text'
import { file, page, pagetext, multipagetext } from '/components/links'

export default function Home() {
    return (
        <div className="top-0 left-0 right-0 min-h-screen py-24 bg-gray-900 max-w-screen absolute">
            <Head>
                <title>Marius Tomek - TI HS 2026</title>
                <link rel="icon" href="/ETH_head.png" />
            </Head>
            <body className="h-full max-w-screen-lg mx-auto static">
                {navbar}
                {name("TI - Übungsstunde 2026")}
                <br/>
                <div className="max-w-screen-lg relative">
                <div className="top-0 left-0">
                    {plaintext("white", "Bei Inhaltlichen oder Technischen Fehlern dieser Webseite bin ich froh über eine kleine Nachricht.")}
                    {subtitle("Generelle Informationen")}
                    {listBullet("white",
                        "Gruppe: 07 / Mi 16:15 - 18:00 / CHN D 44",
                        "Vorlesung: Di 08:15 - 10:00 (HG E 7) / Fr 08:15 - 10:00 (HG E 7)",
                        page("https://moodle-app2.let.ethz.ch/course/view.php?id=29077",  "Moodle Kurs", "cyan-300"),
                        page("https://courses.algodi.inf.ethz.ch/theoinf-2026/",  "Vorlesungswebseite", "cyan-300")
                    )}
                    <br/>
                    <br/>
                    {subtitle("Disclaimer")}
                    {multipagetext(
                        {type: "text", color: "white", text: "Sämtliche organisatorische Informationen auf dieser Webpage sind ohne Gewähr und ich übernehme keine Verantwortung für deren Richtigkeit. Für verbindliche Informationen, konsultiert bitte die "},
                        {type: "page", url: "https://courses.algodi.inf.ethz.ch/theoinf-2026/", name: "Vorlesungswebseite", color: "cyan-300"},
                        {type: "text", color: "white", text: " oder den "},
                        {type: "page", url: "https://moodle-app2.let.ethz.ch/course/view.php?id=29077", name: "Moodle Kurs", color: "cyan-300"},
                        {type: "text", color: "white", text: "."}
                    )}
                    <br/>
                    <br/>
                    {subtitle("Bonusaufgaben")}
                    {listBullet("white",
                        "Release Quiz: Freitags",
                        "Fällig: Dienstag 08:00 über Moodle vor der Vorlesung (Angaben können abweichen, Moodle ist verbindlich)",
                        "Upload Aufgaben Blatt: Freitags",
                        "Abgabe Bonusaufgaben: Freitag bis 11:00 auf Moodle (Angaben können abweichen, Moodle ist verbindlich)",
                        "WICHTIG: Namen oder Kürzel aller Beteiligten auf dem Blatt vermerken.",
                    )}
                    <br/>
                    <br/>
                    {subtitle("Kontakt")}
                    {plaintext("white",
                        "Mein Name ist Marius Tomek",
                    )}
                    <p className="text-white inline">Mail: </p>
                    {page("mailto:marius.tomek@asvz.ch", "marius.tomek@asvz.ch", "cyan-300")}
                    <br/>
                    <br/>
                    <br/>
                    {subtitle("Folien")}
                    {plaintext("white", "Die Folien zur jeweiligen Übungsstunde werden hier nach der Stunde zur Verfügung gestellt.")}
                    {listBullet("white",
                        file("/files/TI_HS_26/slides_week01.pdf", "Folien Woche 1", "cyan-300"),
                        file("/files/TI_HS_26/slides_week02.pdf", "Folien Woche 2", "cyan-300"),
                        "Folien Woche 3"
                    )}
                    <br/>
                    <br/>
                    {subtitle("Zusatzmaterial")}
                    {plaintext("white", "Im Verlaufe des Semesters werde ich zusätzliche Materialien hier bereitstellen.")}
                    {/*listBullet("white",
                        file("/files/TI_HS_26/Beweisideen101.pdf", "Beweisideen101 von Nicolas Wehrli", "cyan-300"),
                    )*/}
                    <br/>
                </div>
                </div>
            </body>
        </div>
    )
}