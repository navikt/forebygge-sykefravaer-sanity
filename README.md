Sanity-server for siden om forebygging av sykefravær
================

Dette er Sanity-serveren for appen `forebygge-sykefravaer`, som kan sees [her](https://arbeidsgiver.nav.no/forebygge-sykefravaer).

Sanity er et CMS, altså et system der redaktører kan endre tekster uten å gå via kodeflyten. Denne applikasjonen definerer skjemaet for innholdet som kan redigeres i Sanity Studio.

 - Man kan endre og redigere tekster i [Sanity studio](https://forebygge-sykefravaer.sanity.studio/)
 - Prosjektet administreres her: https://manage.sanity.io/projects/er31zvh0

# Komme i gang
## Første gang
 - Bli invitert til Sanity-prosjektet "Forebygge-sykefravaer-sanity"
 - Last ned sanity cli: `npm install -g @sanity/cli`
 - Logg inn: `sanity login`
 - Les i dokumentasjonen til Sanity: [Getting started](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)

## Starte sanity studio lokalt (NB: Endringer du gjør her )
 - `yarn`
 - `sanity start`

## Deploy skjema (NB: Dette endrer både prod og dev)
Kjør `sanity deploy`

## Relevante lenker
 - Prosjektet administreres her: https://manage.sanity.io/projects/er31zvh0
 - [Sanity studio](https://forebygge-sykefravaer.sanity.studio/) - det er her man endrer og publiserer tekster.

---

# Henvendelser

## For Nav-ansatte
* Dette Git-repositoriet eies av [Team IA i Produktområde arbeidsgiver](https://navno.sharepoint.com/sites/intranett-prosjekter-og-utvikling/SitePages/Produktomr%C3%A5de-arbeidsgiver.aspx).
* Slack-kanaler:
    * [#arbeidsgiver-teamia-utvikling](https://nav-it.slack.com/archives/C016KJA7CFK)
    * [#arbeidsgiver-utvikling](https://nav-it.slack.com/archives/CD4MES6BB)
    * [#arbeidsgiver-general](https://nav-it.slack.com/archives/CCM649PDH)

## For folk utenfor Nav
* Opprett gjerne en issue i Github for alle typer spørsmål
* IT-utviklerne i Github-teamet https://github.com/orgs/navikt/teams/arbeidsgiver
* IT-avdelingen i [Arbeids- og velferdsdirektoratet](https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Relatert+informasjon/arbeids-og-velferdsdirektoratet-kontorinformasjon)
