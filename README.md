# 🎓 MS-102 Simulator — Microsoft 365 Administrator Premium Edition

Un simulateur d'examen interactif, haute fidélité et moderne pour préparer la certification **Microsoft MS-102 (Microsoft 365 Administrator)**.

Ce simulateur est une application Web monopage (Single Page Application) purement statique (HTML/CSS/JS) qui fonctionne directement dans n'importe quel navigateur, sans aucune installation requise ni problème de CORS en exécution locale.

---

## 🚀 Fonctionnalités Clés

*   **Formats de Questions Réalistes** :
    *   *Choix unique* & *Choix multiples* (avec contrôle du nombre de réponses).
    *   *Glisser-déposer* (Drag & Drop) interactif en un clic pour le paramétrage technique.
    *   *Mise en ordre* (Ordering) d'étapes de configuration.
    *   *Études de Cas* (Case Studies) avec écran partagé (scénario à gauche, questions à droite).
    *   *Complétion de PowerShell* (PowerShell autocomplete).
*   **Moteur de Génération Procédurale** : 
    *   Moteur de templates intégré permettant de varier dynamiquement les scénarios d'examen (ex: changements aléatoires de noms de locataires, licences Microsoft 365, groupes d'utilisateurs, règles PowerShell).
    *   Force le raisonnement conceptuel au lieu de la simple mémorisation par cœur.
*   **3 Modes de Session** :
    *   **Entraînement** : Correction immédiate, explications détaillées des réponses correctes et des distracteurs, liens vers la documentation officielle Microsoft Learn, et scripts PowerShell associés.
    *   **Examen Réel** : Conditions réelles Pearson VUE, minuterie globale, questions masquées jusqu'à la soumission finale, et score uniquement à la fin.
    *   **Révision Intelligente** : Concentrez-vous en priorité sur vos erreurs passées ou sur vos questions favorites.
*   **Algorithme de Répétition Espacée** : Sauvegarde locale de vos erreurs pour les réintroduire automatiquement en priorité lors de vos prochaines révisions.
*   **Sauvegarde et Restauration (Import / Export JSON)** :
    *   Sauvegardez l'intégralité de votre progression en téléchargeant un fichier de sauvegarde JSON.
    *   Restaurez instantanément vos statistiques de réussite, votre historique et vos favoris sur n'importe quel autre appareil ou navigateur.
*   **Tableau de Bord de Résultats Avancé** :
    *   Calcul automatique du score sur **1000 points** (Seuil de réussite à 700).
    *   Statistiques par domaine de compétences Microsoft 365.
    *   Corrélation Confiance/Réussite (pour évaluer la pertinence de vos réponses).
*   **Interface Premium** :
    *   Thème Sombre/Clair automatique ou manuel avec mémorisation de votre choix.
    *   Tiroir latéral (Drawer) pour naviguer rapidement d'une question à l'autre.
    *   Raccourcis clavier complets (`→` Suivant, `←` Précédent, `Entrée` Vérifier, `F` Signaler, `S` Favori).

---

## 📂 Structure du Projet

```text
├── index.html       # Interface utilisateur (CSS, structure HTML, logique JS, dashboard)
├── questions/       # Banque de questions modularisée par catégorie
│   ├── case_studies.js
│   ├── identity.js
│   ├── exchange.js
│   ├── defender.js
│   ├── intune.js
│   ├── compliance.js
│   ├── tenant.js
│   └── powershell.js
└── README.md        # Documentation du projet
```

---

## 💻 Utilisation

1. **Localement** : Double-cliquez simplement sur le fichier `index.html` pour ouvrir le simulateur dans votre navigateur web (Chrome, Edge, Firefox, Safari).
2. **Hébergement** : Puisqu'il s'agit d'une application statique sans base de données serveur, vous pouvez facilement l'héberger gratuitement sur **GitHub Pages**, **Vercel** ou **Netlify** en quelques clics.

---

## 📝 Exigences couvertes (Microsoft Learn)

La banque de questions intégrée dans `questions/` couvre l'ensemble du programme officiel MS-102 :
*   Déploiement et gestion d'un tenant Microsoft 365.
*   Implémentation et gestion des identités et de la synchronisation (Microsoft Entra ID / Entra Connect).
*   Gestion de la sécurité, de la conformité et des menaces (Microsoft Defender & Purview).
*   Gestion des appareils avec Microsoft Intune.
