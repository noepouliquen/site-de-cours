# Site de cours

Site de révision personnel. Première matière : **SIC S5, approche sémiologique** (Ralitza Bonéva), exam écrit du 1er octobre 2026.

## Ouvrir le site

- **Sur PC** : double-clic sur `index.html`. Tout marche hors ligne, sauf les polices, qui ont besoin d'Internet (sinon le site bascule sur les polices du système).
- **Sur téléphone** : utiliser l'adresse GitHub Pages du dépôt (`https://<pseudo>.github.io/<nom-du-dépôt>/`). Le site est public pour qui a le lien, mais n'est pas référencé par les moteurs de recherche (balise `noindex`).

La progression (cartes, sujets, coches, textes rédigés) est enregistrée **dans le navigateur de chaque appareil**. Elle ne se synchronise pas entre le PC et le téléphone.

## Ce qu'il y a dedans

| Page | Contenu |
|------|---------|
| Accueil | Compte à rebours, plan de révision J-2 / J-1 / Jour J, progression par partie |
| Sujets d'exam | Les 21 sujets de contrôle officiels + 3 bonus, avec chrono, rédaction, plan type et checklist des points clés |
| Examen blanc | 3 sujets tirés au sort (un par partie), 1h30 |
| Flashcards | ~100 cartes en répétition espacée (Raté / Hésitant / Su) |
| Fiches | Tout le cours résumé, avec recherche |
| Quiz | 36 QCM expliqués |
| Auteurs et notions | Jeu d'association |
| Repères | Frise des auteurs et des dates |
| Exercice IA | Consigne, méthode et grille de relevé pour l'exercice noté sur 6 |

## Sources

Tout le contenu vient des 3 PDF du cours. Chaque point indique sa diapo d'origine (« Cours 2 · diapo 28 »). Les rares rapprochements qui ne sont pas dans le cours tel quel sont signalés comme des « pistes ».

## Ajouter une matière plus tard

1. Créer `data/<matiere>.js` sur le modèle de `data/semiotique.js` (`window.MATIERES.<matiere> = {...}`).
2. L'inclure dans `index.html` et adapter `js/app.js`, qui ne lit pour l'instant que `semiotique`.

Le plus simple : demander à Jarvis en lui donnant les nouveaux cours.
