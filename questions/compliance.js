window.questionsCompliance = [
  {
    id: "q_015",
    cat: "Compliance",
    subcat: "Purview",
    difficulty: "Difficile",
    type: "multi-choice",
    q: "Votre organisation doit s'assurer que toutes les conversations Teams contenant des données financières confidentielles soient automatiquement supprimées après une période de 2 ans. Les fichiers stockés dans le dossier SharePoint lié à l'équipe ne doivent pas être affectés par cette règle.<br><br>Quelles <strong>trois</strong> configurations devez-vous réaliser ? (Choisissez trois réponses)",
    options: [
      "Créer une stratégie de rétention (Retention Policy) dans Microsoft Purview.",
      "Sélectionner 'Teams channel messages' et 'Teams chats' comme emplacements (Locations).",
      "Sélectionner 'SharePoint classic and communication sites' comme emplacement.",
      "Configurer la stratégie pour supprimer automatiquement le contenu après 2 ans.",
      "Créer une politique de prévention des pertes de données (DLP) avec blocage de partage."
    ],
    correct: [0, 1, 3],
    exp: {
      correct: "Pour traiter les messages Teams spécifiquement sans toucher aux fichiers SharePoint associés : 1. Créer une Retention Policy ; 2. Cibler uniquement les emplacements liés aux chats et canaux Teams ; 3. Spécifier une action de suppression automatique après la durée définie de 2 ans.",
      incorrect: {
        "C": "Inclure SharePoint appliquerait la règle de suppression aux fichiers stockés dans le site d'équipe, violant la contrainte spécifiée.",
        "E": "Une politique DLP sert à bloquer ou alerter en temps réel lors du partage de données sensibles, elle n'effectue pas d'actions de rétention temporelle ou de suppression après expiration."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/purview/retention-policies-teams",
    powershellCmd: "New-RetentionCompliancePolicy -Name \"TeamsRetention\" -TeamsChatLocation All",
    estTime: 180,
    points: 10
  },
  {
    id: "q_023",
    cat: "Compliance",
    subcat: "Purview",
    difficulty: "Difficile",
    type: "single-choice",
    q: "Votre entreprise doit empêcher l'envoi externe de documents marqués comme 'Secret' via Microsoft Teams et Outlook. Vous créez une politique de prévention des pertes de données (DLP).<br><br>Sur quel élément de classification la politique DLP doit-elle se baser pour détecter ce document ?",
    options: [
      "Une étiquette de confidentialité (Sensitivity Label)",
      "Une étiquette de rétention (Retention Label)",
      "Un type d'informations sensibles personnalisé (SIT)",
      "Un dictionnaire de mots clés"
    ],
    correct: 0,
    exp: {
      correct: "Les politiques DLP de Purview peuvent cibler des étiquettes de confidentialité (Sensitivity Labels) appliquées aux fichiers. C'est le moyen idéal pour bloquer le partage de fichiers identifiés préalablement comme 'Secret'.",
      incorrect: {
        "B": "Les étiquettes de rétention gèrent le cycle de conservation et de suppression légale, elles ne classifient pas le document pour des blocages de sécurité DLP.",
        "C": "Les Sensitive Information Types (SIT) détectent des motifs de texte (ex: cartes bancaires, passeports), pas des métadonnées de marquage appliquées.",
        "D": "Un dictionnaire de mots clés permet de chercher des termes dans le contenu, mais est moins fiable que le ciblage direct de l'étiquette de confidentialité appliquée officiellement."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/purview/dlp-sensitivity-label-as-condition",
    powershellCmd: "Get-DlpCompliancePolicy",
    estTime: 120,
    points: 10
  }
];
