window.questionsIntune = [
  {
    id: "q_013",
    cat: "Intune",
    subcat: "Enrollment",
    difficulty: "Difficile",
    type: "ordering",
    q: "Votre entreprise déploie des PC Windows 11 neufs via Windows Autopilot en mode déploiement autonome (User-Driven). Ordonnez les étapes requises pour que les appareils soient correctement provisionnés et configurés par Intune.",
    options: [
      "L'utilisateur allume le PC, sélectionne la langue et se connecte avec son compte d'entreprise Microsoft 365.",
      "Le fournisseur de matériel télécharge l'ID d'appareil unique (Hardware Hash) sur le tenant de l'entreprise.",
      "Intune applique les profils de configuration et installe les applications professionnelles requises.",
      "Attribuer un profil Windows Autopilot au groupe dynamique contenant le périphérique."
    ],
    correct: [1, 3, 0, 2],
    exp: {
      correct: "L'intégration Autopilot suit les étapes : 1. Enregistrement de l'identifiant matériel (Hardware Hash) dans le tenant ; 2. Association d'un profil Autopilot au périphérique ; 3. Démarrage de la machine par l'utilisateur et authentification initiale ; 4. Phase de provisionnement et application des politiques par Intune (ESP - Enrollment Status Page).",
      incorrect: {
        "General": "L'utilisateur ne peut pas voir le portail de connexion personnalisé de l'entreprise si le Hardware Hash n'a pas été préalablement enregistré et qu'aucun profil ne lui a été assigné."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/mem/autopilot/user-driven",
    powershellCmd: "Get-WindowsAutoPilotInfo",
    estTime: 150,
    points: 15
  },
  {
    id: "q_014",
    cat: "Intune",
    subcat: "App Protection",
    difficulty: "Moyen",
    type: "single-choice",
    q: "Vous souhaitez mettre en place des stratégies de protection des applications (MAM) Microsoft Intune. L'objectif est d'empêcher les utilisateurs de copier-coller des données professionnelles depuis Microsoft Outlook vers des applications non gérées comme WhatsApp ou les notes système.<br><br>Quelles machines ou comptes cette politique protègera-t-elle ?",
    options: [
      "Uniquement les appareils mobiles entièrement enregistrés dans le MDM d'Intune",
      "Les appareils personnels des utilisateurs (MAM-WE), qu'ils soient enregistrés ou non dans le MDM Intune",
      "Uniquement les ordinateurs fonctionnant sous Windows 10/11",
      "Uniquement les appareils d'entreprise enregistrés dans le programme DEP d'Apple"
    ],
    correct: 1,
    exp: {
      correct: "Les stratégies de protection d'applications (MAM / App Protection Policies) agissent au niveau du conteneur applicatif Microsoft. Elles fonctionnent indépendamment de l'état d'enregistrement de l'appareil (BYOD, MAM without enrollment - MAM-WE).",
      incorrect: {
        "A": "C'est la force de MAM : il n'y a pas besoin que l'appareil soit inscrit en MDM complet.",
        "C": "Les App Protection Policies sont particulièrement conçues pour les plateformes mobiles iOS et Android, bien que des protections WIP/MAM légères existent sur PC.",
        "D": "DEP est pour le MDM institutionnel Apple, MAM n'a aucunement besoin de cette intégration."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/mem/intune/apps/app-protection-policy",
    powershellCmd: "Get-DeviceAppManagement",
    estTime: 120,
    points: 10
  },
  {
    id: "q_022",
    cat: "Intune",
    subcat: "Compliance",
    difficulty: "Moyen",
    type: "single-choice",
    q: "Dans Microsoft Intune, vous souhaitez empêcher les appareils mobiles sous Android d'accéder aux ressources cloud de votre entreprise si l'appareil est détecté comme étant rooté.<br><br>Où devez-vous configurer ce paramètre ?",
    options: [
      "Dans une politique de conformité de l'appareil (Device Compliance Policy)",
      "Dans un profil de configuration d'appareil (Configuration Profile)",
      "Dans les restrictions d'inscription d'appareils (Enrollment Restrictions)",
      "Dans les paramètres de sécurité globale du locataire"
    ],
    correct: 0,
    exp: {
      correct: "Le contrôle de l'intégrité de l'appareil (détection du rootage ou du jailbreak) est un critère classique de conformité configuré dans les Device Compliance Policies. Si l'appareil est marqué non-conforme, l'Accès Conditionnel peut alors lui bloquer l'accès aux ressources.",
      incorrect: {
        "B": "Les profils de configuration servent à configurer des paramètres (ex: Wi-Fi, VPN, restrictions de caméra) mais pas à évaluer l'état de conformité par rapport à une menace de sécurité.",
        "C": "Les restrictions d'inscription bloquent le droit d'enregistrer l'appareil au départ, mais n'analysent pas continuellement l'état rooté de l'OS.",
        "D": "Il n'y a pas de paramètre de sécurité globale du tenant pour la détection spécifique du rootage Android."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/mem/intune/protect/device-compliance-get-started",
    powershellCmd: "Get-DeviceManagementCompliancePolicy",
    estTime: 90,
    points: 10
  }
];
