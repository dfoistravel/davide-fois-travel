# Davide Fois Travel — Astro + GitHub Pages

Starter professionale per una landing page di consulenza viaggi.

## 1. Personalizzazioni indispensabili

Cerca in tutti i file e sostituisci:

- `TUO-USERNAME` con il tuo username GitHub.
- `39INSERISCI_NUMERO` con il numero WhatsApp completo di prefisso, senza `+` e senza spazi.
- `INSERISCI_ID` con l'ID del modulo Formspree.
- testi, recapiti, privacy policy e destinazioni secondo le tue esigenze.

## 2. Prova il sito sul computer

Installa Node.js 22 o successivo, poi apri il terminale nella cartella:

```bash
npm install
npm run dev
```

Apri l'indirizzo mostrato nel terminale.

## 3. Pubblica su GitHub Pages

1. Crea un repository pubblico su GitHub.
2. Carica tutti i file mantenendo la stessa struttura.
3. Vai in **Settings → Pages → Build and deployment**.
4. In **Source**, scegli **GitHub Actions**.
5. Esegui il primo push sul branch `main`.
6. Apri la scheda **Actions** e attendi il completamento del deploy.

Il workflow incluso usa l'azione ufficiale per GitHub Pages.

## 4. URL del sito

- Repository chiamato `TUO-USERNAME.github.io`: sito all'indirizzo `https://TUO-USERNAME.github.io/`
- Repository con altro nome: sito all'indirizzo `https://TUO-USERNAME.github.io/NOME-REPOSITORY/`

La configurazione Astro rileva automaticamente il sottopercorso.

## 5. Modulo preventivo

Crea un account gratuito su Formspree, crea un form e sostituisci:

```text
https://formspree.io/f/INSERISCI_ID
```

con l'endpoint fornito.

## 6. Dominio personalizzato

In seguito potrai configurarlo da **Settings → Pages → Custom domain** e aggiornare:

- `site` in `astro.config.mjs`
- `Sitemap` in `public/robots.txt`

## 7. Prima di renderlo pubblico

- Inserisci recapiti reali.
- Aggiungi una privacy policy conforme al tuo trattamento dati.
- Configura un banner cookie solo se utilizzi cookie non essenziali.
- Verifica tutti i link.
- Collega Google Search Console.
- Aggiungi Analytics soltanto dopo aver predisposto la corretta gestione del consenso.
