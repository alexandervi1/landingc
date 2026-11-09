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
  updated: string;
  intro: string;
  sections: PrivacySection[];
  disclaimer: string;
}

export const privacy: Record<Locale, PrivacyDoc> = {
  es: {
    metaTitle: 'Aviso de privacidad — Alexander Villalva',
    metaDescription:
      'Qué datos recoge el formulario de contacto, para qué se usan, cuánto tiempo se conservan y cómo ejercer tus derechos.',
    title: 'Aviso de privacidad',
    updated: 'Última actualización: 8 de noviembre de 2026',
    intro:
      'Este aviso explica qué datos personales se recogen en alexandervillalva.uk, para qué se usan y cómo puedes ejercer tus derechos. Está redactado en lenguaje claro, siguiendo los principios de la Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador.',
    sections: [
      {
        heading: 'Quién es el responsable',
        paragraphs: [
          'El responsable del tratamiento es Alexander Villalva, con domicilio en Riobamba, Ecuador.',
          'Puedes contactarlo en hola@alexandervillalva.uk.',
        ],
      },
      {
        heading: 'Qué datos se recogen',
        paragraphs: ['Solo los que escribes en el formulario de contacto:'],
        list: ['Nombre', 'Dirección de correo electrónico', 'Contenido del mensaje'],
      },
      {
        heading: 'Con qué finalidad',
        paragraphs: [
          'Leer tu mensaje y responderte. No se usan para publicidad, no se elaboran perfiles y no se ceden a terceros con fines comerciales.',
        ],
      },
      {
        heading: 'Cuál es la base de legitimación',
        paragraphs: [
          'El consentimiento. Lo otorgas al marcar la casilla de aceptación y enviar el formulario. Puedes retirarlo en cualquier momento escribiendo a hola@alexandervillalva.uk, sin que ello afecte a la licitud del tratamiento realizado antes de retirarlo.',
        ],
      },
      {
        heading: 'Cuánto tiempo se conservan',
        paragraphs: [
          'Los mensajes se conservan durante 12 meses desde su recepción y después se eliminan. Si la conversación da lugar a una relación profesional, se conservan mientras dure esa relación y durante el plazo legal aplicable.',
        ],
      },
      {
        heading: 'Quién más interviene',
        paragraphs: [
          'Para que el sitio funcione, dos proveedores tratan datos por cuenta del responsable:',
        ],
        list: [
          'Cloudflare (Estados Unidos): aloja el sitio, ejecuta el formulario y gestiona el correo del dominio.',
          'Resend (Estados Unidos): entrega el correo con el contenido del formulario.',
        ],
      },
      {
        heading: 'Transferencia internacional',
        paragraphs: [
          'Los dos proveedores anteriores están fuera de Ecuador, por lo que el envío del formulario implica una transferencia internacional de datos. Ambos actúan como encargados del tratamiento y solo procesan los datos para prestar el servicio contratado.',
        ],
      },
      {
        heading: 'Analítica',
        paragraphs: [
          'El sitio usa Cloudflare Web Analytics, que no instala cookies ni identifica visitantes individuales. Registra de forma agregada páginas vistas, país aproximado, navegador y tiempos de carga. No permite seguirte entre sitios ni realizar perfilado de usuarios.',
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
        ],
      },
      {
        heading: 'Cómo ejercerlos',
        paragraphs: [
          'Escribe a hola@alexandervillalva.uk indicando el derecho que deseas ejercer. Se responde en el plazo que establece la ley.',
          'Si consideras que tu solicitud no fue atendida correctamente, puedes acudir a la Superintendencia de Protección de Datos Personales de Ecuador.',
        ],
      },
      {
        heading: 'Seguridad',
        paragraphs: [
          'El sitio se sirve por HTTPS. El formulario incluye medidas contra envíos automatizados y el acceso a los mensajes está limitado al responsable.',
        ],
      },
      {
        heading: 'Cambios en este aviso',
        paragraphs: [
          'Si este aviso cambia, se actualiza la fecha del encabezado. Los cambios sustanciales se anuncian en esta misma página.',
        ],
      },
    ],
    disclaimer:
      'Este texto es una base redactada en lenguaje claro y no sustituye el asesoramiento de un abogado. Antes de considerarlo definitivo debe revisarlo un profesional en protección de datos.',
  },
  en: {
    metaTitle: 'Privacy notice — Alexander Villalva',
    metaDescription:
      'What data the contact form collects, what it is used for, how long it is kept and how to exercise your rights.',
    title: 'Privacy notice',
    updated: 'Last updated: 8 November 2026',
    intro:
      'This notice explains what personal data is collected on alexandervillalva.uk, what it is used for and how you can exercise your rights. It is written in plain language and follows the principles of Ecuador’s Organic Law on Personal Data Protection (LOPDP).',
    sections: [
      {
        heading: 'Who is the controller',
        paragraphs: [
          'The controller is Alexander Villalva, based in Riobamba, Ecuador.',
          'You can reach him at hola@alexandervillalva.uk.',
        ],
      },
      {
        heading: 'What data is collected',
        paragraphs: ['Only what you write in the contact form:'],
        list: ['Name', 'Email address', 'Message content'],
      },
      {
        heading: 'What it is used for',
        paragraphs: [
          'To read your message and reply to you. It is not used for advertising, no profiles are built and it is not shared with third parties for commercial purposes.',
        ],
      },
      {
        heading: 'Legal basis',
        paragraphs: [
          'Consent. You give it by ticking the acceptance box and sending the form. You can withdraw it at any time by writing to hola@alexandervillalva.uk, without affecting the lawfulness of processing carried out before withdrawal.',
        ],
      },
      {
        heading: 'How long it is kept',
        paragraphs: [
          'Messages are kept for 12 months from receipt and then deleted. If the conversation leads to a professional relationship, they are kept for the duration of that relationship and the applicable legal period.',
        ],
      },
      {
        heading: 'Who else is involved',
        paragraphs: ['To run the site, two providers process data on the controller’s behalf:'],
        list: [
          'Cloudflare (United States): hosts the site, runs the form and handles email for the domain.',
          'Resend (United States): delivers the email containing the form content.',
        ],
      },
      {
        heading: 'International transfer',
        paragraphs: [
          'Both providers are outside Ecuador, so sending the form involves an international data transfer. Both act as data processors and only process the data to provide the contracted service.',
        ],
      },
      {
        heading: 'Analytics',
        paragraphs: [
          'The site uses Cloudflare Web Analytics, which sets no cookies and does not identify individual visitors. It records aggregated page views, approximate country, browser and load times. It cannot follow you across sites or carry out user profiling.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: ['You can exercise the following rights over your data:'],
        list: [
          'Access: know what data of yours is processed.',
          'Rectification and updating: correct inaccurate or incomplete data.',
          'Erasure: ask for it to be deleted.',
          'Objection: object to a specific processing activity.',
          'Suspension: ask for it to be temporarily restricted.',
          'Portability: receive your data in a readable format.',
        ],
      },
      {
        heading: 'How to exercise them',
        paragraphs: [
          'Write to hola@alexandervillalva.uk stating the right you wish to exercise. A reply is sent within the period established by law.',
          'If you believe your request was not handled correctly, you can turn to Ecuador’s Superintendence for Personal Data Protection.',
        ],
      },
      {
        heading: 'Security',
        paragraphs: [
          'The site is served over HTTPS. The form includes measures against automated submissions and access to messages is limited to the controller.',
        ],
      },
      {
        heading: 'Changes to this notice',
        paragraphs: [
          'If this notice changes, the date in the header is updated. Substantial changes are announced on this same page.',
        ],
      },
    ],
    disclaimer:
      'This text is a plain-language draft and does not replace legal advice. It should be reviewed by a data protection professional before being considered final.',
  },
};
