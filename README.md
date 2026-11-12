# landing

[![CI](https://github.com/alexandervi1/landingc/actions/workflows/ci.yml/badge.svg)](https://github.com/alexandervi1/landingc/actions/workflows/ci.yml)

Portafolio de Alexander Villalva, ingeniero de software. Sitio estático bilingüe (ES/EN) con un formulario de contacto que se ejecuta en un Worker de Cloudflare.

Producción: <https://alexandervillalva.uk>

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Astro 7 (salida estática) |
| Estilos | Tailwind CSS 4 + CSS propio con tokens |
| Tipografías | Archivo, Space Grotesk, JetBrains Mono (Fontsource, self-hosted) |
| Runtime | Cloudflare Workers + Static Assets |
| Correo | Resend (envío) + Cloudflare Email Routing (recepción) |
| Analítica | Cloudflare Web Analytics (sin cookies, inyectado en el borde) |
| Tests | Vitest |

## Ejecutar en local

```bash
npm install
npm run dev
```

El servidor de desarrollo sirve `/api/contact` mediante un middleware de Vite en `astro.config.mjs`, para que el formulario funcione sin levantar el Worker. Para probar el Worker real:

```bash
npm run build
npx wrangler dev --port 8787
```

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga |
| `npm run build` | `check:content` y después `astro build` |
| `npm run preview` | Sirve `dist/` localmente |
| `npm run check` | `astro check` (tipos en `.astro`, `.ts`, `.mjs`) |
| `npm test` | Tests del Worker con Vitest |
| `npm run check:content` | Guard de contenido (ver abajo) |
| `npm run deploy` | `npm run build` y `wrangler deploy` |

## check:content

`scripts/check-content.mjs` recorre `src/i18n` y `src/data` y falla el build si encuentra:

- la palabra `Placeholder` (texto provisional que no debe llegar a producción);
- un enlace muerto con la forma `href: '#'`;
- un caso con `published: true` o `visibleOnHome: true` que contenga `[COMPLETAR]` o campos vacíos;
- cualquier `[COMPLETAR]` o `[CONFIRMAR]` en `src/data/privacy.ts`.

Se ejecuta como `prebuild`, así que `npm run build` y `npm run deploy` lo corren siempre. Para ejecutarlo suelto:

```bash
npm run check:content
```

También acepta rutas como argumento, útil para probar una regla:

```bash
node scripts/check-content.mjs ruta/a/fixture
```

## Aviso de privacidad

`src/data/privacy.ts` contiene el aviso en ES y EN. La página muestra solo la línea de versión y fecha; el descargo legal vive como comentario al inicio del archivo y no se publica.

> Este texto es una base redactada en lenguaje claro y no sustituye el asesoramiento de un abogado. Antes de considerarlo definitivo debe revisarlo un profesional en protección de datos.

Los tres proveedores que aparecen en el aviso son Cloudflare, Resend y Google (buzón de destino). Si cambia el buzón, actualiza las dos listas de "Quién más interviene" / "Who else is involved".

### Retención de 12 meses: rutina manual

El aviso declara que los mensajes se conservan 12 meses. El código del sitio no almacena los mensajes; se envían a Resend y llegan al buzón de Gmail. No hay una base de datos ni una tarea de limpieza en el sitio.

El recorrido de un mensaje es:

```
visitante → POST /api/contact → Resend → hola@alexandervillalva.uk
                                            ↓
                              Cloudflare Email Routing
                                            ↓
                                     buzón de Gmail
```

La única copia operativa vive en Gmail. Por tanto, el plazo de 12 meses **depende de una rutina manual**:

1. Buscar en el buzón con `older_than:12m`.
2. Revisar que los resultados son mensajes del formulario.
3. Borrarlos. En Gmail, borrar un mensaje lo mueve a la Papelera, donde permanece hasta 30 días.
4. Si el objetivo es eliminarlo definitivamente, vaciar también la Papelera. Mientras no se vacíe, el mensaje sigue existiendo y puede recuperarse.

Gmail no tiene una regla nativa de borrado por antigüedad: los filtros actúan sobre el correo entrante, no sobre la fecha del mensaje. Un filtro no puede programar un borrado futuro.

Dos límites que conviene tener presentes:

- Si el buzón está respaldado en otro sitio (Google Takeout, copia local), borrar del buzón no borra la copia.
- Resend conserva sus propios registros de envío según su política, fuera de este control. El aviso habla de los mensajes, no de esos registros.

Este apartado documenta el estado actual. Cualquier automatización o cambio de plazo requiere una decisión explícita antes de tocar el código o el aviso.

### Opciones de retención (ninguna implementada)

> Ninguna de estas opciones está implementada. La tabla compara cómo cumpliría cada una el plazo; **no es una conclusión legal**.

| Opción | Cuándo se borra realmente | Papelera de Gmail | Copias externas | Registros de Resend |
|---|---|---|---|---|
| **A. Manual con recordatorio** | Al ejecutar la búsqueda. Con cadencia trimestral, un mensaje puede vivir hasta un trimestre de más | El borrado mueve a Papelera; desaparece a los 30 días. Hasta entonces el mensaje sigue existiendo | No las alcanza | Sin cambios |
| **B. Apps Script con disparador mensual** | Depende del día en que esté programado el disparador: hasta aproximadamente un mes después de cumplir los 12 | Depende de la llamada: mover a Papelera deja 30 días de margen; el borrado permanente requiere la API avanzada | No las alcanza | Sin cambios |
| **C. Etiqueta + revisión trimestral** | Al revisar. No garantiza el borrado al cumplir 12 meses: acota el exceso a un trimestre | Igual que A | No las alcanza | Sin cambios |
| **D. Plazo corto (p. ej. 30 días)** | Al responder y borrar. El momento depende de cuándo respondas y elimines el correo, así que **no garantiza un máximo de 30 días** | 30 días más si no se vacía | No las alcanza | Sin cambios |

Ninguna opción basada en revisión periódica borra a los 12 meses exactos. La revisión trimestral acota el exceso a un trimestre; un disparador diario lo acotaría a un día.

Las cuestiones sobre si un plazo es adecuado, si la Papelera cuenta como conservación o si hay que mencionar los registros de Resend requieren revisión legal. Este documento no las resuelve.

## CI y despliegue

`.github/workflows/ci.yml` tiene dos jobs:

1. **verify** (en cada push y pull request): `npm ci` → `check:content` → `astro check` → `vitest` → `build`.
2. **deploy** (solo en push a `main` y solo si `verify` pasó): build y `wrangler deploy`.

Los pull requests desde forks no reciben secretos, y el job de despliegue no se ejecuta en PRs.

Secretos necesarios en GitHub → Settings → Secrets and variables → Actions:

| Secreto | Valor |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Token de API con permiso *Workers Scripts: Edit* sobre la cuenta |
| `CLOUDFLARE_ACCOUNT_ID` | ID de tu cuenta de Cloudflare (Workers & Pages, panel derecho) |

## Renovar el token de Cloudflare

El token caduca a los **90 días**. Cuando falte poco:

1. Cloudflare → **My Profile → API Tokens → Create Token**.
2. Plantilla *Edit Cloudflare Workers* o permisos mínimos: `Account → Workers Scripts → Edit`.
3. Limita el token a la cuenta de Cloudflare del proyecto y, si es posible, a la zona `alexandervillalva.uk`.
4. Copia el valor y actualiza el secreto `CLOUDFLARE_API_TOKEN` en GitHub.
5. Revoca el token anterior en Cloudflare.

Si el token caduca, el job de deploy falla con un error de autenticación; el sitio publicado sigue funcionando.

## Secretos de runtime del Worker

| Nombre | Dónde | Para qué |
|---|---|---|
| `RESEND_API_KEY` | `wrangler secret` | Envío del formulario |
| `CONTACT_TO` | `wrangler.jsonc` (var) | Destino de los mensajes |
| `CONTACT_FROM` | `wrangler.jsonc` (var) | Remitente verificado en Resend |

Para cambiar la clave de Resend sin terminal: Cloudflare → Workers & Pages → `landing` → Settings → Variables and Secrets → editar `RESEND_API_KEY` → Deploy.

## Estructura

```
src/
  components/     Secciones y piezas de UI
  data/           Datos del sitio, proyectos y aviso de privacidad
  i18n/           Diccionarios ES/EN y contrato de tipos `Dict`
  layouts/        Base con metadatos, JSON-LD y menú móvil
  pages/          Rutas: /, /en/, /privacidad, /en/privacy, sitemap, robots
  styles/         Tokens y estilos globales
worker/           Endpoint /api/contact
scripts/          Guard de contenido
tests/            Tests del Worker
```

## Notas

La sección de noticias se retiró. Para reactivar una sección de **Notas técnicas** con contenido propio: añadir un bloque `notes` al contrato `Dict` (`src/i18n/types.ts`), un componente `Notes.astro` y montarlo entre `Projects` y `Contact` en `src/pages/index.astro` y `src/pages/en/index.astro`.
