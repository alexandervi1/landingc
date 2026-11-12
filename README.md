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
