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
                <h1 id="t-rminos-y-condiciones-de-uso">Términos y Condiciones de Uso</h1>
                <p><strong>MAYEDA, S.A. DE C.V.</strong>  </p>
                <p><strong>1. Naturaleza, Alcance y Definiciones</strong><br />Bienvenido a MAYEDA, tu espacio especializado en servicios de diseño de interiores en línea. Estos Términos y Condiciones rigen la relación entre los usuarios y MAYEDA respecto a la consulta, adquisición y uso de sus servicios virtuales de diseño. Se entenderá por Usuario, Cliente o Contratante a toda persona física o moral que solicite cualquiera de los servicios proporcionados por MAYEDA, a través de medios electrónicos como el sitio web, aplicaciones móviles o canales de mensajería autorizados.<br /><strong>2. Servicios Ofrecidos</strong><br />MAYEDA dispone de un portafolio amplio que incluye, entre otros: consultoría virtual, diseño por habitación, diseño integral residencial, home staging, diseño comercial, generación de renders, recorridos virtuales y asesoría DIY. Cada servicio cuenta con características específicas, alcance único y tarifas claramente indicadas en el sitio web.  </p>
                <ol>
                    <li>La contratación y entrega de cada servicio estarán condicionadas al cumplimiento de los requisitos, tiempos y datos proporcionados por el usuario.  </li>
                    <li>Los precios reflejados en el sitio incluyen el IVA correspondiente conforme a la legislación fiscal mexicana.<br /><strong>3. Proceso de Contratación y Pagos</strong><br />La contratación de nuestros servicios se realiza únicamente a través del sitio web oficial de MAYEDA, donde cada cliente puede explorar a profundidad los diferentes paquetes de diseño de interiores disponibles y seleccionar el que mejor se adapte a sus necesidades propias. Una vez elegido el paquete, el siguiente paso es agregarlo de manera sencilla al carrito virtual de compras, el cual permite revisar los servicios seleccionados, así como los precios claros y actualizados, que siempre están expresados en pesos mexicanos e incluyen el IVA vigente conforme a las disposiciones legales aplicables.<br />El proceso de compra en línea está pensado para brindar máxima seguridad y confianza al usuario. El pago de los servicios se efectúa exclusivamente por medio de tarjeta de crédito o débito, a través de un agregador de pagos autorizado y especializado en el manejo de transacciones electrónicas seguras, con tecnología SSL y protocolos de protección robustos. MAYEDA no recibe, almacena ni tiene acceso a los datos bancarios del cliente; toda la información sensible es gestionada directamente por el proveedor de pagos, quien garantiza confidencialidad y buen resguardo en todo momento.<br />Al concluir el pago, el usuario recibirá una confirmación digital y, una vez acreditado el monto correspondiente, se iniciará formalmente la prestación del servicio contratado, conforme a las fechas y plazos acordados para cada paquete. Si la transacción no se aprueba o presenta cualquier incidencia, se notificará al usuario por correo electrónico, y no se establecerá obligación alguna respecto a la entrega del servicio hasta no tener constancia del pago exitoso y validado en el sitio web.<br /><strong>4. Entregables y Responsabilidades de MAYEDA</strong><br />MAYEDA se compromete a entregar los productos contratados como moodboards, listas de compras, planos, renders, asesorías y documentos PDF, dentro de los plazos anunciados por cada servicio, dando acompañamiento digital cuando corresponda. La responsabilidad de MAYEDA respecto a la implementación física del diseño es limitada a la entrega de recomendaciones y manuales, exceptuando cualquier gestión directa con contratistas, proveedores externos o adquisiciones físicas de mobiliario y materiales fuera de la asesoría brindada. Los documentos entregados tienen carácter de recomendación y sugerencia, adaptados a la información brindada por el cliente para cada espacio.<br /><strong>5. Obligaciones y Responsabilidades del Usuario</strong><br />El usuario se obliga a proporcionar información veraz, precisa y completa respecto a sus espacios, medidas y fotografías, según lo requiera cada tipo de diseño. El cliente acepta que los resultados pueden variar según el cumplimiento estricto de las indicaciones, requerimientos técnicos y materiales disponibles en su localidad. El usuario será responsable del uso y ejecución final de los proyectos, así como de los resultados obtenidos al implementar las recomendaciones de MAYEDA.<br /><strong>6. Propiedad Intelectual</strong><br />Todos los entregables generados por MAYEDA, incluyendo imágenes, planos, moodboards, renders, manuales y documentos electrónicos, son propiedad exclusiva de MAYEDA y se otorgan al usuario únicamente para uso personal o del proyecto contratado. Queda prohibido copiar, distribuir, reproducir, modificar o utilizar para fines comerciales no autorizados cualquier elemento, salvo acuerdo expreso por escrito con MAYEDA.<br /><strong>7. Limitaciones de Garantía y Responsabilidad</strong><br />MAYEDA ofrece servicios de asesoría y diseño virtual, por lo que los resultados finales dependen de la ejecución y elección de materiales, mobiliario y proveedores externos seleccionados por el usuario. MAYEDA no garantiza el desempeño, durabilidad ni adecuación de los elementos adquiridos mediante enlaces o recomendaciones, quedando libres de responsabilidad ante desperfectos, retrasos o problemas derivados de contratistas independientes o terceros.  </li>
                    <li>Los renders e imágenes generadas son representaciones digitales, no compromiso de resultado idéntico.  </li>
                    <li>Las recomendaciones sobre productos y proveedores se ofrecen a título informativo, sin que constituyan obligación de adquisición ni garantía sobre los mismos.<br /><strong>8. Cancelaciones y Reembolsos</strong><br />Toda solicitud de cancelación deberá hacerse antes de que se inicie la prestación del servicio o elaboración de los entregables. En servicios pagados y no prestados, puede solicitar reembolso conforme a la política interna disponible en el sitio web. Una vez iniciada la prestación, cualquier reembolso o ajuste estará sujeto a negociación y a las condiciones particulares establecidas en la contratación. Servicios entregados, asesorías realizadas, PDFs enviados y productos digitales no son sujetos a devolución, salvo casos específicos de incumplimiento documentado por parte de MAYEDA.<br /><strong>9. Datos Personales y Privacidad</strong><br />El tratamiento de los datos proporcionados por el usuario se realiza conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su reglamento vigente. MAYEDA utiliza la información facilitada exclusivamente para diseñar, cotizar y personalizar los servicios, manteniendo confidencialidad estricta y seguridad electrónica en todos los formularios, correos y documentación electrónica.<br />El usuario puede ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) contactando a MAYEDA mediante la vía oficial dispuesta en el sitio web.<br /><strong>10. Modificaciones de Términos</strong><br />MAYEDA podrá modificar libremente estos Términos y Condiciones en cualquier momento, lo cual será comunicado en el sitio web. La versión vigente será siempre la última publicada y el uso continuo de los servicios implicará la aceptación de cualquier cambio realizado.<br /><strong>11. Jurisdicción y Legislación Aplicable</strong><br />Toda controversia relacionada con la interpretación, cumplimiento y ejecución de los presentes Términos y Condiciones será sometida a las leyes aplicables de los Estados Unidos Mexicanos, el usuario acepta expresamente la jurisdicción de los tribunales competentes en la Ciudad de México para cualquier controversia derivada del presente instrumento.  </li>
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
                <h1 id="terms-and-conditions-of-use">Terms and Conditions of Use</h1>

                <p><strong>MAYEDA, S.A. DE C.V.</strong></p>

                <p>
                    <strong>1. Nature, Scope, and Definitions</strong><br />
                    Welcome to MAYEDA, your specialized space for online interior design services. These Terms and Conditions govern the relationship between users and MAYEDA regarding the consultation, purchase, and use of its virtual design services. User, Client, or Contracting Party shall mean any individual or legal entity requesting any of the services provided by MAYEDA through electronic means such as the website, mobile applications, or authorized messaging channels.

                    <br /><strong>2. Services Offered</strong><br />
                    MAYEDA offers a broad portfolio that includes, among others: virtual consulting, room-by-room design, full residential design, home staging, commercial design, render generation, virtual walkthroughs, and DIY consulting. Each service has specific characteristics, a unique scope, and fees clearly indicated on the website.
                </p>

                <ol>
                    <li>
                        The contracting and delivery of each service shall be subject to compliance with the requirements, timelines, and information provided by the user.
                    </li>

                    <li>
                        The prices displayed on the website include the corresponding VAT in accordance with Mexican tax legislation.

                        <br /><strong>3. Contracting Process and Payments</strong><br />
                        The contracting of our services is carried out exclusively through MAYEDA’s official website, where each client may thoroughly explore the different interior design packages available and select the one that best suits their individual needs. Once the package has been selected, the next step is to conveniently add it to the virtual shopping cart, which allows the user to review the selected services as well as the clear and updated prices, always expressed in Mexican pesos and including the applicable VAT in accordance with current legal provisions.

                        <br />The online purchasing process is designed to provide maximum security and confidence to the user. Payment for services is made exclusively by credit or debit card through an authorized payment aggregator specialized in secure electronic transaction management, utilizing SSL technology and robust protection protocols. MAYEDA does not receive, store, or have access to the client’s banking information; all sensitive information is managed directly by the payment provider, who guarantees confidentiality and proper safeguarding at all times.

                        <br />Upon completion of the payment, the user will receive a digital confirmation and, once the corresponding amount has been validated, the provision of the contracted service will formally begin according to the dates and timelines agreed upon for each package. If the transaction is not approved or presents any issue, the user will be notified by email, and no obligation regarding service delivery shall arise until successful and validated payment has been confirmed on the website.

                        <br /><strong>4. Deliverables and Responsibilities of MAYEDA</strong><br />
                        MAYEDA undertakes to deliver the contracted products such as moodboards, shopping lists, plans, renders, consulting services, and PDF documents within the timelines announced for each service, providing digital support when applicable. MAYEDA’s responsibility regarding the physical implementation of the design is limited to the delivery of recommendations and manuals, excluding any direct management with contractors, external suppliers, or physical purchases of furniture and materials outside the consulting services provided. The delivered documents are recommendations and suggestions adapted to the information provided by the client for each space.

                        <br /><strong>5. Obligations and Responsibilities of the User</strong><br />
                        The user undertakes to provide truthful, accurate, and complete information regarding their spaces, measurements, and photographs, as required for each type of design. The client accepts that results may vary depending on strict compliance with instructions, technical requirements, and materials available in their locality. The user shall be responsible for the use and final execution of the projects, as well as for the results obtained from implementing MAYEDA’s recommendations.

                        <br /><strong>6. Intellectual Property</strong><br />
                        All deliverables generated by MAYEDA, including images, plans, moodboards, renders, manuals, and electronic documents, are the exclusive property of MAYEDA and are granted to the user solely for personal use or for the contracted project. Copying, distributing, reproducing, modifying, or using any element for unauthorized commercial purposes is prohibited unless expressly agreed in writing with MAYEDA.

                        <br /><strong>7. Limitations of Warranty and Liability</strong><br />
                        MAYEDA offers consulting and virtual design services; therefore, final results depend on the execution and selection of materials, furniture, and external suppliers chosen by the user. MAYEDA does not guarantee the performance, durability, or suitability of items purchased through links or recommendations and shall not be liable for defects, delays, or issues arising from independent contractors or third parties.
                    </li>

                    <li>
                        The renders and generated images are digital representations and do not constitute a commitment to an identical final result.
                    </li>

                    <li>
                        Recommendations regarding products and suppliers are provided for informational purposes only and do not constitute an obligation to purchase or any guarantee regarding them.

                        <br /><strong>8. Cancellations and Refunds</strong><br />
                        Any cancellation request must be made before the provision of the service or preparation of the deliverables has begun. For paid services not yet rendered, refunds may be requested in accordance with the internal policy available on the website. Once service provision has begun, any refund or adjustment shall be subject to negotiation and the specific conditions established in the contracting process. Delivered services, completed consulting sessions, sent PDFs, and digital products are non-refundable except in specific cases of documented non-compliance by MAYEDA.

                        <br /><strong>9. Personal Data and Privacy</strong><br />
                        The processing of data provided by the user is carried out in accordance with the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP) and its current regulations. MAYEDA uses the information provided exclusively to design, quote, and personalize services, maintaining strict confidentiality and electronic security in all forms, emails, and electronic documentation.

                        <br />The user may exercise their ARCO rights (Access, Rectification, Cancellation, and Objection) by contacting MAYEDA through the official means provided on the website.

                        <br /><strong>10. Amendments to the Terms</strong><br />
                        MAYEDA may freely modify these Terms and Conditions at any time, which shall be communicated on the website. The current version shall always be the latest published version, and continued use of the services shall imply acceptance of any changes made.

                        <br /><strong>11. Jurisdiction and Applicable Law</strong><br />
                        Any dispute related to the interpretation, compliance, and execution of these Terms and Conditions shall be subject to the applicable laws of the United Mexican States, and the user expressly accepts the jurisdiction of the competent courts in Mexico City for any controversy arising from this instrument.
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