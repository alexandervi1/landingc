// AVISO LEGAL PARA MANTENIMIENTO (no se publica en la página):
// Este texto es una base redactada en lenguaje claro y no sustituye el
// asesoramiento de un abogado. Antes de considerarlo definitivo debe revisarlo
// un profesional en protección de datos.
import type { Locale } from '../i18n/types';

export interface PrivacySection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface PrivacyDoc {
  metaTitle: string;
  metaDescription: string;
  title: string;
  version: string;
  updated: string;
  intro: string;
  sections: PrivacySection[];
}

export const privacy: Record<Locale, PrivacyDoc> = {
  es: {
    metaTitle: 'Aviso de privacidad — Alexander Villalva',
    metaDescription:
      'Qué datos recoge el formulario de contacto, para qué se usan, cuánto tiempo se conservan y cómo ejercer tus derechos.',
    title: 'Aviso de privacidad',
    version: 'Versión 1.1',
    updated: 'Última actualización: 11 de noviembre de 2026',
    intro:
      'Este aviso explica qué datos personales se recogen en alexandervillalva.uk, para qué se usan y cómo puedes ejercer tus derechos. Está redactado en lenguaje claro, tomando como referencia la Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador.',
    sections: [
      {
        heading: 'Quién es el responsable',
        paragraphs: [
          'Alexander Villalva, persona natural, Riobamba, Ecuador.',
          'Contacto: hola@alexandervillalva.uk',
        ],
      },
      {
        heading: 'Qué datos se recogen',
        paragraphs: ['Los que escribes en el formulario y un dato técnico asociado al envío:'],
        list: [
          'Nombre, correo electrónico y mensaje.',
          'Tu dirección IP, de forma temporal y solo para limitar envíos automatizados o abusivos. Se guarda como clave en la caché del borde de Cloudflare durante un máximo de 60 segundos, por centro de datos. No se registra en logs, no se almacena en ninguna base de datos y no se envía a ningún proveedor.',
        ],
      },
      {
        heading: 'Con qué finalidad',
        paragraphs: [
          'Leer tu mensaje y responderte, y proteger el formulario frente al spam. No se usan para publicidad, no se elaboran perfiles y no se toman decisiones automatizadas que te afecten.',
        ],
      },
      {
        heading: 'Base de legitimación',
        paragraphs: [
          'Tu consentimiento, que otorgas al marcar la casilla de aceptación y enviar el formulario. Puedes retirarlo en cualquier momento escribiendo a hola@alexandervillalva.uk, sin que ello afecte a lo tratado antes.',
        ],
      },
      {
        heading: 'Cuánto tiempo se conservan',
        paragraphs: [
          'Los mensajes se conservan 12 meses desde su recepción y después se eliminan. Si la conversación se convierte en una relación profesional, se conservan mientras dure y durante el plazo legal aplicable.',
        ],
      },
      {
        heading: 'Quién más interviene',
        paragraphs: ['Para que el sitio funcione intervienen estos proveedores:'],
        list: [
          'Cloudflare (Estados Unidos): aloja el sitio, ejecuta el formulario, gestiona el correo del dominio y ofrece analítica agregada.',
          'Resend (Estados Unidos): entrega el correo con el contenido del formulario.',
          'Google (Estados Unidos): proveedor del buzón donde recibo los mensajes.',
        ],
      },
      {
        heading: 'Transferencia internacional',
        paragraphs: [
          'Estos proveedores operan fuera de Ecuador, por lo que enviar el formulario implica una transferencia internacional de datos. Solo tratan los datos para prestar el servicio.',
        ],
      },
      {
        heading: 'Analítica',
        paragraphs: [
          'Cloudflare Web Analytics no instala cookies ni identifica visitantes individuales. Registra de forma agregada páginas vistas, país aproximado, navegador y tiempos de carga.',
        ],
      },
      {
        heading: 'Tus derechos',
        paragraphs: ['Puedes ejercer los siguientes derechos sobre tus datos:'],
        list: [
          'Acceso: saber qué datos tuyos se tratan.',
          'Rectificación y actualización: corregir datos inexactos o incompletos.',
          'Eliminación: pedir que se borren.',
          'Oposición: oponerte a un tratamiento concreto.',
          'Suspensión: pedir que se limite temporalmente.',
          'Portabilidad: recibir tus datos en un formato legible.',
          'A no ser objeto de decisiones basadas únicamente en valoraciones automatizadas.',
        ],
      },
      {
        heading: 'Cómo ejercerlos',
        paragraphs: [
          'Escribe a hola@alexandervillalva.uk indicando el derecho que deseas ejercer. Las solicitudes de acceso, rectificación, eliminación y oposición se atienden en un máximo de 15 días.',
          'Si consideras que tu solicitud no fue atendida correctamente, puedes acudir a la Autoridad de Protección de Datos Personales de Ecuador.',
        ],
      },
      {
        heading: 'Menores de edad',
        paragraphs: ['El sitio no está dirigido a menores de 18 años.'],
      },
      {
        heading: 'Seguridad',
        paragraphs: [
          'El sitio se sirve por HTTPS, el formulario incluye medidas contra envíos automatizados y el acceso a los mensajes está limitado al responsable.',
        ],
      },
      {
        heading: 'Cambios en este aviso',
        paragraphs: [
          'Si cambia, se actualiza la versión y la fecha. Los cambios sustanciales se anuncian en esta página.',
        ],
      },
    ],
  },
  en: {
    metaTitle: 'Privacy notice — Alexander Villalva',
    metaDescription:
      'What data the contact form collects, what it is used for, how long it is kept and how to exercise your rights.',
    title: 'Privacy notice',
    version: 'Version 1.1',
    updated: 'Last updated: 11 November 2026',
    intro:
      'This notice explains what personal data is collected on alexandervillalva.uk, what it is used for and how you can exercise your rights. It is written in plain language and takes Ecuador’s Organic Law on Personal Data Protection (LOPDP) as a reference.',
    sections: [
      {
        heading: 'Who is the controller',
        paragraphs: [
          'Alexander Villalva, natural person, Riobamba, Ecuador.',
          'Contact: hola@alexandervillalva.uk',
        ],
      },
      {
        heading: 'What data is collected',
        paragraphs: ['What you write in the form, plus one technical detail tied to the submission:'],
        list: [
          'Name, email address and message.',
          'Your IP address, temporarily and only to limit automated or abusive submissions. It is stored as a key in Cloudflare’s edge cache for at most 60 seconds, per data centre. It is not written to logs, not stored in any database and not sent to any provider.',
        ],
      },
      {
        heading: 'What it is used for',
        paragraphs: [
          'To read your message and reply to you, and to protect the form against spam. It is not used for advertising, no profiles are built and no automated decisions affecting you are made.',
        ],
      },
      {
        heading: 'Legal basis',
        paragraphs: [
          'Your consent, which you give by ticking the acceptance box and submitting the form. You can withdraw it at any time by writing to hola@alexandervillalva.uk, without affecting what was processed before.',
        ],
      },
      {
        heading: 'How long it is kept',
        paragraphs: [
          'Messages are kept for 12 months from receipt and then deleted. If the conversation turns into a professional relationship, they are kept for as long as it lasts and for the applicable legal period.',
        ],
      },
      {
        heading: 'Who else is involved',
        paragraphs: ['These providers are involved in running the site:'],
        list: [
          'Cloudflare (United States): hosts the site, runs the form, manages the domain’s email and provides aggregate analytics.',
          'Resend (United States): delivers the email containing the form content.',
          'Google (United States): provider of the mailbox where I receive the messages.',
        ],
      },
      {
        heading: 'International transfer',
        paragraphs: [
          'These providers operate outside Ecuador, so submitting the form involves an international transfer of data. They process the data only to provide the service.',
        ],
      },
      {
        heading: 'Analytics',
        paragraphs: [
          'Cloudflare Web Analytics sets no cookies and does not identify individual visitors. It records page views, approximate country, browser and load times in aggregate.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: ['You can exercise the following rights over your data:'],
        list: [
          'Access: know what data of yours is processed.',
          'Rectification and updating: correct inaccurate or incomplete data.',
          'Erasure: ask for it to be deleted.',
          'Objection: object to a specific processing operation.',
          'Suspension: ask for it to be temporarily restricted.',
          'Portability: receive your data in a readable format.',
          'Not to be subject to decisions based solely on automated assessments.',
        ],
      },
      {
        heading: 'How to exercise them',
        paragraphs: [
          'Write to hola@alexandervillalva.uk stating the right you wish to exercise. Requests for access, rectification, erasure and objection are answered within 15 days at most.',
          'If you believe your request was not handled correctly, you can turn to Ecuador’s Personal Data Protection Authority.',
        ],
      },
      {
        heading: 'Minors',
        paragraphs: ['This site is not aimed at anyone under 18.'],
      },
      {
        heading: 'Security',
        paragraphs: [
          'The site is served over HTTPS, the form includes measures against automated submissions and access to the messages is limited to the controller.',
        ],
      },
      {
        heading: 'Changes to this notice',
        paragraphs: [
          'If it changes, the version and date are updated. Substantial changes are announced on this page.',
        ],
      },
    ],
  },
};
