# minnovativ Statistik — Nutzer einladen (Onboarding)

Stand 2026-06-08. Kurzanleitung für Timon (Admin), wie andere Leute ein Konto bekommen und ihre **eigenen**
Projekte (Websites) anlegen.

## Wichtig: Nutzer ≠ Team
- **Nutzer-Konto (Rolle „user"):** darf **eigene** Websites anlegen/bearbeiten/löschen. Das ist, was du willst,
  wenn jeder sein eigenes Ding macht.
- **Team:** nur für **gemeinsames** Arbeiten an denselben Websites (z. B. du + Kunde sehen dieselbe Statistik).
  Für „jeder sein eigenes Projekt" NICHT nötig.

Umami hat **keine offene Selbstregistrierung** — du legst die Konten an. (Self-Service-Registrierung wäre ein
eigener späterer Ausbau.)

## So lädst du jemanden ein
1. Anmelden auf `https://statistik.minnovativ.de/login` als Admin.
2. **Einstellungen → Nutzer** (bzw. `/settings/users` / als Admin `/admin/users`) → **Nutzer hinzufügen**.
3. Benutzername + Passwort vergeben, **Rolle „user"** wählen. Speichern.
4. Zugangsdaten an die Person geben. Sie meldet sich an und kann unter **Einstellungen → Profil** ihr Passwort
   ändern.

## Was die eingeladene Person dann tut
1. Anmelden, **Einstellungen → Websites → Website hinzufügen** (Name + Domain).
2. Den **Tracking-Code** kopieren (Website-Einstellungen → Tracking-Code) und in die eigene Seite einbauen.
   Tipp: das Skript kann auf `https://statistik.minnovativ.de/script.js` zeigen, dann läuft alles unter der
   Marken-Domain.
3. Fertig — ab sofort sieht die Person ihre eigene Statistik in Echtzeit.

## Rollen-Spickzettel
- **admin:** alles (nur du). Nicht rausgeben.
- **user:** eigene Websites verwalten. Standard für eingeladene Leute.
- **view-only:** darf nur ansehen, was geteilt wurde (kein eigenes Anlegen).

## Wenn doch mal geteilt werden soll (Team)
Nur falls mehrere Leute **dieselbe** Website sehen sollen: **Einstellungen → Teams → Team erstellen**, Website ins
Team verschieben/teilen, Mitglieder über den **Beitritts-Code** einladen.
