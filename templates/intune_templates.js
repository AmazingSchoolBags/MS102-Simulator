window.templatesIntune = [
  {
    id: "q_intune_templated_001",
    cat: "Intune",
    subcat: "Enrollment",
    difficulty: "Moyen",
    type: "single-choice",
    templated: true,
    variables: {
      company: ["Contoso Ltd", "Fabrikam Inc", "Litware Inc", "Tailspin Toys"],
      count: ["50 tablettes", "100 smartphones iOS", "500 ordinateurs"],
      os: ["Android Enterprise", "iOS/iPadOS", "macOS", "Windows 11"]
    },
    q: "Votre entreprise <strong>{company}</strong> envisage d'enrôler <strong>{count}</strong> fonctionnant sous <strong>{os}</strong> dans Microsoft Intune.<br><br>Quel composant de configuration d'enrôlement devez-vous configurer en premier pour permettre l'inscription et la gestion de ce type d'appareil ?",
    options: [
      "Le certificat MDM Push correspondant au système d'exploitation cible (ex: certificat APNs Apple ou compte Google Enterprise).",
      "Une politique d'Accès Conditionnel exigeant un appareil marqué comme conforme.",
      "Un profil de configuration d'appareil de type restriction d'appareil.",
      "Le connecteur de proxy d'application Microsoft Entra."
    ],
    correct: 0,
    exp: {
      correct: "Pour enrôler les terminaux {os} de {company}, la première étape technique indispensable est d'établir la relation d'approvisionnement via le certificat ou jeton d'autorité MDM approprié (comme le certificat APNs pour Apple ou le compte d'entreprise Google Play).",
      incorrect: {
        "A": "Le certificat de Push MDM approprié est obligatoire pour initier la gestion MDM.",
        "B": "L'Accès Conditionnel bloque ou autorise l'accès après l'enrôlement ou l'évaluation, mais n'est pas requis pour configurer l'infrastructure d'enrôlement elle-même.",
        "C": "Les profils de configuration ne s'appliquent qu'une fois l'appareil déjà inscrit et géré dans Intune.",
        "D": "Le proxy d'application n'a aucun lien avec le processus d'enrôlement des appareils mobiles."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/mem/intune/enrollment/device-enrollment",
    powershellCmd: "Get-DeviceManagementEnrollmentProfile",
    estTime: 120,
    points: 10
  }
];
