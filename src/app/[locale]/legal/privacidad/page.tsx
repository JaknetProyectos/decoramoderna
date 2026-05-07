"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function LegalEs() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
        .legal-container section { margin-bottom: 3rem; }
      `}} />

            <section>
                <h1 id="aviso-de-privacidad-integral">Aviso de Privacidad Integral</h1>
                <p><strong>MAYEDA, S.A. DE C.V.</strong>  </p>
                <p>AVENIDA PRESIDENTE MASARYK, N° 178, DEP. 303, COLONIA POLANCO V SECCION, ALCALDIA MIGUEL HIDALGO, C.P. 11560, ENTIDAD FEDERATIVA CIUDAD DE MÉXICO.<br />informacion@decoramoderna.com          </p>
                <p><strong>1. Identidad y responsabilidad</strong><br />MAYEDA, S.A. DE C.V. (“MAYEDA”), como persona moral constituida bajo las leyes mexicanas, asume la máxima responsabilidad en el uso, resguardo, transferencia y protección de los datos personales proporcionados por sus usuarios, clientes y visitantes, conforme a lo dispuesto en los artículos 15 y 16 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y demás disposiciones correlativas aplicables.<br /><strong>2. Finalidades del tratamiento de datos</strong><br />El tratamiento de los datos personales que recaba MAYEDA tiene como eje rector la provisión segura, eficiente y personalizada de los servicios de diseño de interiores ofertados en línea.<br />Las finalidades son:  </p>
                <ol>
                    <li>Dar cumplimiento a la solicitud, contratación, diseño, desarrollo y entrega de los servicios virtuales ofertados.  </li>
                    <li>Ofrecer atención y soporte antes, durante y después de la prestación del servicio, así como facilitar actualizaciones, mejoras o cambios sobre los productos y servicios contratados.  </li>
                    <li>Gestionar la facturación y cobro electrónico, expidiendo comprobantes fiscales acorde a la normativa vigente.  </li>
                    <li>Mantener comunicación vía digital sobre avances, recomendaciones, sugerencias y seguimiento de cada proyecto.  </li>
                    <li>Cumplir con obligaciones administrativas, fiscales, regulatorias y de seguridad de la información exigidas por la legislación mexicana.  </li>
                    <li>Evaluar la satisfacción del cliente, realizar encuestas, obtener retroalimentación y mejorar nuestros servicios.  </li>
                    <li>Prevenir fraudes, conductas ilícitas o transacciones no autorizadas sobre la plataforma.<br /><strong>3. Categoría y origen de los datos</strong><br />Se recaba la siguiente información mediante el ingreso directo a formularios, contacto digital, mensajería web o contratación de servicios:  </li>
                    <li>Datos de identificación: nombre completo, teléfono, correo electrónico.  </li>
                    <li>Datos de contacto y localización: dirección física, ciudad, estado, referencias de proyecto.  </li>
                    <li>Datos sobre el espacio a intervenir: fotografías, planos, medidas, preferencias de estilo y funcionalidad, presupuesto, descripción del espacio y finalidad del diseño.  </li>
                    <li>Datos de facturación y fiscales requeridos conforme a las disposiciones tributarias.  </li>
                    <li>Preferencias respecto a notificaciones, encuestas, promociones y boletines informativos.<br />No se recaban de manera directa ni se almacenan datos sensibles relacionados con tarjetas bancarias o información financiera: todo pago se procesa a través de plataformas independientes y agregadores de pagos quienes cuentan con sus propias políticas y protocolos de seguridad.<br /><strong>4. Conservación, acceso y transferencias</strong><br />MAYEDA resguarda los datos personales en archivos y bases electrónicas bajo estrictos controles administrativos, técnicos y físicos, con medidas preventivas para asegurar la integridad, confidencialidad y disponibilidad de los datos hasta por el periodo necesario para cumplir con las finalidades de tratamiento, obligaciones contractuales y exigencias legales.<br />Los datos podrán ser transferidos únicamente a:  </li>
                    <li>Prestadores de servicios que respaldan tecnologías de hosting, almacenamiento, mensajería y gestión de proyectos, bajo clausulados estrictos de confidencialidad y protección.  </li>
                    <li>Proveedores de sistemas de pago para la correcta validación de transacciones comerciales y procesamientos fiscales; en este supuesto, se aclara que MAYEDA no almacena datos financieros, siendo responsabilidad exclusiva del proveedor la seguridad y manejo de dicha información.  </li>
                    <li>Autoridades administrativas, regulatorias o judiciales mexicanas, si así lo exige la ley o se emite orden fundada.<br />NO se venderán, rentarán ni publicarán datos personales a terceros ajenos a la prestación y mejora del servicio contratado.<br /><strong>5. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</strong>  </li>
                    <li><strong>Cómo ejercerlos:</strong> enviar solicitud por correo electrónico a la dirección de MAYEDA designada para derechos de privacidad informacion@decoramoderna.com        .  </li>
                    <li><strong>Plazos</strong>: MAYEDA deberá dar respuesta a la solicitud de derechos ARCO dentro de un plazo máximo de 20 días hábiles a partir de la fecha en que la solicitud se haya recibido correctamente. Si por alguna razón se requiere ampliar el plazo para atender la solicitud, MAYEDA informará al titular dentro de los primeros 5 días hábiles señalando la nueva fecha para la resolución, sin exceder de 10 días hábiles adicionales.  </li>
                    <li><strong>Extinción y supresión</strong>: la cancelación de datos se ajusta a la normativa aplicable y a las finalidades autorizadas; ante solicitudes de supresión total, MAYEDA evaluará la viabilidad de retención conforme a obligaciones fiscales y contractuales.  </li>
                    <li><strong>Excepciones:</strong> cuando la conservación de datos sea necesaria para cumplir obligaciones legales, resolver disputas o prevenir fraudes, podrá conservarse la información de forma limitada incluso tras la solicitud de cancelación, hasta cumplir con dichas finalidades.<br /><strong>6. Uso de Cookies y tecnologías de rastreo</strong><br />Este sitio web puede utilizar cookies y otras tecnologías de rastreo, propias y de terceros, con la finalidad de facilitar la navegación, analizar tendencias, administrar la página, identificar preferencias de los usuarios, así como personalizar la experiencia de navegación y mejorar los servicios ofertados.<br />Las cookies permiten recolectar datos como:  </li>
                    <li>IP, ubicación aproximada, tipo de navegador, sistema operativo y páginas vistas en la visita.  </li>
                    <li>Identificadores anónimos y patrones de comportamiento en el sitio web.  </li>
                    <li>Preferencias seleccionadas y tiempos de navegación.<br />La recolección y procesamiento de esta información se utiliza exclusivamente con fines estadísticos, de seguridad, funcionalidad del sitio y personalización de contenidos o anuncios, siempre bajo lo permitido por la normatividad mexicana en protección de datos personales.<br />El usuario puede deshabilitar las cookies en cualquier momento desde la configuración de su navegador; sin embargo, lo anterior puede afectar la funcionalidad y experiencia respecto a los servicios ofrecidos por MAYEDA.<br />El uso de cookies será notificado al usuario al ingresar al sitio, otorgando consentimiento informado, explícito y revocable en cualquier momento.<br />Los proveedores de tecnologías asociados podrán recolectar información anonimizada para fines de estadística, remarketing u optimización de campañas digitales, sin que ello implique acceso a datos identificables del usuario salvo autorización expresa.<br /><strong>7. Seguridad y medidas de protección</strong><br />MAYEDA,  adopta de manera proactiva y sistemática un conjunto robusto de medidas organizacionales, técnicas y físicas orientadas a garantizar la seguridad, integridad y confidencialidad de los datos personales en toda etapa de su tratamiento. El resguardo se efectúa bajo políticas y procedimientos específicamente diseñados para prevenir accesos no autorizados, mecanismos de intercepción, pérdida, alteración, destrucción accidental o ilícita, así como cualquier forma de uso indebido o divulgación no consentida.<br />Las políticas internas de seguridad abarcan:  </li>
                    <li>Implementación de sistemas de encriptación avanzada (SSL/TLS) y cifrado de datos tanto en tránsito como en reposo, que minimizan el riesgo de interceptación o exposición durante la transferencia y almacenamiento electrónico.  </li>
                    <li>Control de acceso restringido a personal autorizado, apoyado en credenciales únicas, monitoreo continuo, auditorías periódicas y capacitación constante sobre protección de información y cumplimiento normativo.  </li>
                    <li>Monitoreo permanente y registros de operación (“logs”) que permiten detectar, rastrear e investigar cualquier incidente, vulnerabilidad o sospecha de brecha de seguridad de manera oportuna y mitigar sus efectos conforme al protocolo de acción rápida.  </li>
                    <li>Bloques físicos y electrónicos para restringir el acceso a servidores, bases de datos y sistemas gestionados por MAYEDA, con segregación de ambientes, copias de respaldo cifradas y plataformas cloud certificadas por normas internacionales de ciberseguridad (ISO/IEC 27001, NIST, NOM-151-SCFI-2016).  </li>
                    <li>Procedimientos formales de gestión de incidentes y comunicación a titulares y autoridades, en caso de violaciones a la seguridad que comprometan datos personales, conforme lo estipula la LFPDPPP y sus lineamientos.<br />El compromiso de MAYEDA es resguardar la confidencialidad y correcto manejo de la información personal bajo la filosofía de prevención y mejora continua, asegurando que terceros proveedores de tecnología o infraestructura mantengan estándares equiparables (“due diligence”) y contratos de confidencialidad independientes. El titular puede consultar, en cualquier momento, el estatus de sus datos y las medidas de protección vigentes contactando al correo designado, y podrá solicitar información sobre movimientos relevantes y acciones tomadas, en pleno ejercicio de los derechos conferidos por la ley mexicana aplicable.<br /><strong>8. Modificaciones al aviso de privacidad</strong><br />Cualquier modificación sustantiva, actualización o cambio en las finalidades o en los términos de este aviso será comunicada oportunamente en el sitio web, así como mediante los medios de contacto registrados por los usuarios, en cumplimiento con las mejores prácticas de transparencia y rendición de cuentas.  </li>
                </ol>


            </section>
        </div>
    );
}

function LegalEn() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
      `}} />

            <section>

                <h1 id="comprehensive-privacy-notice">Comprehensive Privacy Notice</h1>
                <p><strong>MAYEDA, S.A. DE C.V.</strong></p>
                <p>AVENIDA PRESIDENTE MASARYK, NO. 178, APT. 303, POLANCO V SECTION, MIGUEL HIDALGO BOROUGH, ZIP CODE 11560, MEXICO CITY.<br />informacion@decoramoderna.com</p>

                <p><strong>1. Identity and Responsibility</strong><br />
                    MAYEDA, S.A. DE C.V. (“MAYEDA”), as a legal entity incorporated under Mexican law, assumes the highest responsibility regarding the use, safeguarding, transfer, and protection of the personal data provided by its users, clients, and visitors, in accordance with Articles 15 and 16 of the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP), its Regulations, and other applicable related provisions.
                    <br /><strong>2. Purposes of Data Processing</strong><br />
                    The processing of personal data collected by MAYEDA is primarily intended to provide secure, efficient, and personalized online interior design services.
                    <br />The purposes are:
                </p>

                <ol>
                    <li>To fulfill requests, contracting, design, development, and delivery of the virtual services offered.</li>

                    <li>To provide customer service and support before, during, and after service delivery, as well as to facilitate updates, improvements, or changes to contracted products and services.</li>

                    <li>To manage electronic billing and collections, issuing tax invoices in accordance with current regulations.</li>

                    <li>To maintain digital communication regarding progress, recommendations, suggestions, and follow-up for each project.</li>

                    <li>To comply with administrative, tax, regulatory, and information security obligations required under Mexican law.</li>

                    <li>To evaluate customer satisfaction, conduct surveys, obtain feedback, and improve our services.</li>

                    <li>To prevent fraud, unlawful conduct, or unauthorized transactions on the platform.
                        <br /><strong>3. Category and Origin of Data</strong><br />
                        The following information is collected through direct form submissions, digital contact, web messaging, or service contracting:
                    </li>

                    <li>Identification data: full name, telephone number, email address.</li>

                    <li>Contact and location data: physical address, city, state, project references.</li>

                    <li>Data regarding the space to be intervened: photographs, plans, measurements, style and functionality preferences, budget, description of the space, and purpose of the design.</li>

                    <li>Billing and tax information required in accordance with tax regulations.</li>

                    <li>Preferences regarding notifications, surveys, promotions, and newsletters.
                        <br />Sensitive data related to bank cards or financial information is neither directly collected nor stored: all payments are processed through independent platforms and payment aggregators that maintain their own security policies and protocols.
                        <br /><strong>4. Retention, Access, and Transfers</strong><br />
                        MAYEDA safeguards personal data in files and electronic databases under strict administrative, technical, and physical controls, implementing preventive measures to ensure the integrity, confidentiality, and availability of the data for as long as necessary to fulfill the processing purposes, contractual obligations, and legal requirements.
                        <br />Data may only be transferred to:
                    </li>

                    <li>Service providers supporting hosting, storage, messaging, and project management technologies, under strict confidentiality and protection clauses.</li>

                    <li>Payment system providers for the proper validation of commercial transactions and tax processing; in this regard, MAYEDA does not store financial data, and the provider is solely responsible for the security and management of such information.</li>

                    <li>Mexican administrative, regulatory, or judicial authorities, if required by law or pursuant to a duly issued order.
                        <br />Personal data will NOT be sold, rented, or disclosed to third parties unrelated to the provision and improvement of the contracted service.
                        <br /><strong>5. ARCO Rights (Access, Rectification, Cancellation, and Objection)</strong>
                    </li>

                    <li><strong>How to exercise them:</strong> submit a request via email to MAYEDA’s designated privacy rights address: informacion@decoramoderna.com.</li>

                    <li><strong>Deadlines:</strong> MAYEDA must respond to ARCO rights requests within a maximum period of 20 business days from the date the request is properly received. If, for any reason, an extension is required to process the request, MAYEDA will notify the data subject within the first 5 business days, indicating the new resolution date, which may not exceed an additional 10 business days.</li>

                    <li><strong>Termination and deletion:</strong> data cancellation will comply with applicable regulations and authorized purposes; in the event of requests for complete deletion, MAYEDA will assess the feasibility of retaining information in accordance with tax and contractual obligations.</li>

                    <li><strong>Exceptions:</strong> when data retention is necessary to comply with legal obligations, resolve disputes, or prevent fraud, information may be retained in a limited manner even after a cancellation request until such purposes have been fulfilled.
                        <br /><strong>6. Use of Cookies and Tracking Technologies</strong><br />
                        This website may use cookies and other proprietary and third-party tracking technologies to facilitate browsing, analyze trends, manage the website, identify user preferences, personalize the browsing experience, and improve the services offered.
                        <br />Cookies may collect data such as:
                    </li>

                    <li>IP address, approximate location, browser type, operating system, and pages viewed during the visit.</li>

                    <li>Anonymous identifiers and behavioral patterns on the website.</li>

                    <li>Selected preferences and browsing times.
                        <br />The collection and processing of this information is used exclusively for statistical, security, website functionality, and content or advertising personalization purposes, always within the limits permitted by Mexican personal data protection regulations.
                        <br />Users may disable cookies at any time through their browser settings; however, doing so may affect the functionality and experience of the services offered by MAYEDA.
                        <br />The use of cookies will be disclosed to users upon entering the website, granting informed, explicit, and revocable consent at any time.
                        <br />Associated technology providers may collect anonymized information for statistical purposes, remarketing, or digital campaign optimization, without implying access to identifiable user data unless expressly authorized.
                        <br /><strong>7. Security and Protection Measures</strong><br />
                        MAYEDA proactively and systematically adopts a robust set of organizational, technical, and physical measures aimed at guaranteeing the security, integrity, and confidentiality of personal data at every stage of processing. Safeguarding is carried out under policies and procedures specifically designed to prevent unauthorized access, interception mechanisms, loss, alteration, accidental or unlawful destruction, as well as any form of improper use or unauthorized disclosure.
                        <br />Internal security policies include:
                    </li>

                    <li>Implementation of advanced encryption systems (SSL/TLS) and data encryption both in transit and at rest, minimizing the risk of interception or exposure during electronic transfer and storage.</li>

                    <li>Restricted access control for authorized personnel, supported by unique credentials, continuous monitoring, periodic audits, and ongoing training regarding information protection and regulatory compliance.</li>

                    <li>Permanent monitoring and operational logs that allow the detection, tracking, and investigation of any incident, vulnerability, or suspected security breach in a timely manner and mitigate its effects in accordance with rapid response protocols.</li>

                    <li>Physical and electronic safeguards restricting access to servers, databases, and systems managed by MAYEDA, including environment segregation, encrypted backup copies, and cloud platforms certified under international cybersecurity standards (ISO/IEC 27001, NIST, NOM-151-SCFI-2016).</li>

                    <li>Formal incident management procedures and communication with data subjects and authorities in the event of security breaches compromising personal data, in accordance with the provisions of the LFPDPPP and its guidelines.
                        <br />MAYEDA’s commitment is to safeguard the confidentiality and proper handling of personal information under a philosophy of prevention and continuous improvement, ensuring that third-party technology or infrastructure providers maintain equivalent standards (“due diligence”) and independent confidentiality agreements. Data subjects may consult, at any time, the status of their data and current protection measures by contacting the designated email address and may request information regarding relevant activities and actions taken, in full exercise of the rights granted under applicable Mexican law.
                        <br /><strong>8. Modifications to the Privacy Notice</strong><br />
                        Any substantial modification, update, or change in the purposes or terms of this notice will be communicated in a timely manner on the website, as well as through the contact methods registered by users, in compliance with best practices of transparency and accountability.
                    </li>
                </ol>

            </section>
        </div>
    );
}

export default function LegalPage() {
    const locale = useLocale();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                {locale === "es" ? <LegalEs /> : <LegalEn />}
            </main>
            <Footer />
        </div>
    );
}