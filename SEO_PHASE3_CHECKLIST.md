# Fase 3 — Checklist SEO e misurazione

## Dati da inserire

1. Crea un file `.env` locale oppure aggiungi le variabili in GitHub Actions:
   - `PUBLIC_GA_ID`
   - `PUBLIC_SEARCH_CONSOLE_CODE`

2. Sostituisci `INSERISCI_ID` nel file:
   - `src/pages/preventivo.astro`

3. Completa:
   - `src/pages/privacy.astro`
   - `src/pages/cookie-policy.astro`

## Search Console

Dopo il deploy:

1. Apri Google Search Console.
2. Aggiungi la proprietà con prefisso URL:
   `https://dfoistravel.github.io/davide-fois-travel/`
3. Usa il metodo Tag HTML.
4. Copia solo il valore del campo `content`.
5. Inseriscilo come `PUBLIC_SEARCH_CONSOLE_CODE`.
6. Esegui un nuovo deploy.
7. Invia la sitemap:
   `https://dfoistravel.github.io/davide-fois-travel/sitemap-index.xml`

## Google Analytics

1. Crea o usa una proprietà GA4.
2. Inserisci l'ID in `PUBLIC_GA_ID`.
3. Il tag viene caricato solo dopo consenso.
4. Verifica il traffico in tempo reale dopo il deploy.

## Conversioni da configurare successivamente

- clic WhatsApp;
- invio modulo preventivo;
- clic sul catalogo Nuovevacanze;
- download guide PDF;
- iscrizione newsletter.
