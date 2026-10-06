# Sito Davide Fois Travel Consultant — riorganizzazione mondiale

Versione preparata il 6 ottobre 2026, da revisionare prima della pubblicazione.

## Obiettivo

Facilitare le richieste di consulenza per viaggi nel mondo. La homepage introduce il servizio e consente di partire dalla meta, dal continente o dal tipo di esperienza.

## Percorso del visitatore

- Home → continente → destinazione → richiesta con meta precompilata.
- Home → esperienza → richiesta con tipo di viaggio precompilato.
- Home → richiesta senza meta → scelta guidata con Davide.
- Asia → Giappone → guide esistenti e nuova sintesi pratica.

## Contenuti

Cinque aree: Asia, Europa, Africa, Americhe e Oceania. Le schede delle destinazioni aprono una richiesta personalizzata; non sono offerte con disponibilità o prezzi garantiti. Si possono richiedere anche mete non elencate.

La sezione Giappone conserva gli URL e le guide precedenti. La nuova pagina `giappone-pratico/` rielabora temi del libro **Il Giappone da Vivere**, PDF allegato di 262 pagine:

- capitoli 2 e 6: durata, ritmo e itinerari;
- capitolo 3: composizione del budget;
- capitoli 5 e 13: trasporti;
- capitolo 12: Internet, preparazione digitale e checklist;
- capitoli 7–11 e 14: città, esperienze e comunicazione;
- capitolo 15: preparazione e risorse.

Gli schemi di 7, 10, 14 e 21 giorni sono sintesi del capitolo 6. Gli itinerari dettagliati già presenti restano percorsi alternativi e sono etichettati come tali. Non si è effettuata una revisione completa dei vecchi articoli.

Il PDF integrale non viene pubblicato sul sito. Non sono aggiunti link di acquisto senza un indirizzo verificato.

## Verifica

Build Astro: 24 pagine, inclusi cinque hub per continente e la nuova guida pratica. Controllo di URL e ancore interni. Verifica DOM del percorso di richiesta, ricerca delle destinazioni e apertura/chiusura del menu mobile. La verifica visiva in un browser resta da effettuare: il browser di test non è disponibile in questo ambiente. Il form conserva il collegamento Formspree esistente; nessuna richiesta di prova viene inviata.

## Attività successive

- Revisionare l’aspetto grafico e confermare la pubblicazione.
- Aggiungere fotografie autentiche pertinenti ai continenti.
- Arricchire le schede delle mete con contenuti specifici, progressivamente.
- Rivedere gli articoli Giappone esistenti e distinguere con cura gli itinerari alternativi.
- Collegare la guida al suo indirizzo pubblico di acquisto, quando fornito.
