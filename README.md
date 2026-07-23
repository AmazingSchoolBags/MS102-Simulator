# 🎓 MS-102 Simulator — Microsoft 365 Administrator Premium Edition

Un simulateur d'examen interactif, haute fidélité et moderne pour préparer la certification **Microsoft MS-102 (Microsoft 365 Administrator)**.

Ce simulateur est une application Web monopage (Single Page Application) purement statique (HTML/CSS/JS) qui fonctionne directement dans n'importe quel navigateur, sans aucune installation requise.

---

## 🚀 Fonctionnalités Clés

*   **Formats de Questions Réalistes** :
    *   *Choix unique* & *Choix multiples* (avec contrôle du nombre de réponses).
    *   *Glisser-déposer* (Drag & Drop) interactif en un clic pour le paramétrage technique.
    *   *Mise en ordre* (Ordering) d'étapes de configuration.
    *   *Études de Cas* (Case Studies) avec écran partagé (scénario à gauche, questions à droite).
    *   *Complétion de PowerShell* (PowerShell autocomplete).
*   **3 Modes de Session** :
    *   **Entraînement** : Correction immédiate, explications détaillées des réponses correctes et des distracteurs, liens vers la documentation officielle Microsoft Learn, et scripts PowerShell associés.
    *   **Examen Réel** : Chronomètre global (conditions Pearson VUE), questions masquées jusqu'à la soumission finale, et pas de correction immédiate.
    *   **Révision Intelligente** : Concentrez-vous sur vos erreurs passées ou sur vos questions favorites.
*   **Algorithme de Répétition Espacée** : Sauvegarde locale de vos erreurs récurrentes pour les réintroduire en priorité dans vos sessions d'entraînement.
*   **Tableau de Bord de Résultats Avancé** :
    *   Calcul automatique du score sur **1000 points** (Seuil de réussite de l'examen réel à 700).
    *   Progression et statistiques détaillées par domaine de compétences Microsoft 365.
    *   Corrélation Confiance/Réussite (pour évaluer la pertinence de vos intuitions).
*   **Interface Premium** :
    *   Thème Sombre/Clair automatique ou manuel avec mémorisation de votre choix.
    *   Tiroir latéral (Drawer) pour naviguer rapidement d'une question à l'autre.
    *   Raccourcis clavier complets (`→` Suivant, `←` Précédent, `Entrée` Vérifier, `F` Signaler, `S` Favori).
    *   Sauvegarde automatique de votre historique et de vos favoris dans le stockage local (`localStorage`) du navigateur.

---

## 📂 Structure du Projet

```text
├── index.html       # Interface utilisateur (CSS, structure HTML, logique JS et dashboard)
├── questions.js     # Banque de 25 questions haute fidélité détaillées
└── README.md        # Documentation du projet
```

---

## 💻 Utilisation

1. **Localement** : Double-cliquez simplement sur le fichier `index.html` pour ouvrir le simulateur dans votre navigateur web préféré (Chrome, Edge, Firefox, Safari).
2. **Hébergement** : Puisqu'il s'agit d'une application statique sans base de données serveur, vous pouvez facilement l'héberger gratuitement sur **GitHub Pages**, **Vercel** ou **Netlify** en quelques clics.

---

## 📝 Exigences couvertes (Microsoft Learn)

La banque de questions intégrée dans `questions.js` couvre les domaines officiels du programme MS-102 :
*   Déploiement et gestion d'un tenant Microsoft 365.
*   Implémentation et gestion des identités et de la synchronisation (Microsoft Entra ID / Entra Connect).
*   Gestion de la sécurité, de la conformité et des menaces (Microsoft Defender & Purview).
*   Gestion des appareils avec Microsoft Intune.
