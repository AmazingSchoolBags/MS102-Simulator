window.templatesIdentity = [
  {
    id: "q_identity_templated_001",
    cat: "Identité",
    subcat: "Conditional Access",
    difficulty: "Moyen",
    type: "single-choice",
    templated: true,
    variables: {
      company: ["Contoso Ltd", "Litware Inc", "Tailspin Toys", "Adatum Corp"],
      users: ["1 500", "3 000", "8 500", "15 000"],
      license: ["Microsoft 365 E3", "Microsoft 365 E5", "Microsoft 365 Business Premium"],
      adminGroup: ["Admins-Securite", "Admins-MFA-Exclusion", "BreakGlass-Users", "Urgence-Comptes"]
    },
    q: "Votre organisation <strong>{company}</strong> compte <strong>{users}</strong> utilisateurs. Tous disposent d'une licence <strong>{license}</strong>. Vous configurez une stratégie d'Accès Conditionnel pour exiger le MFA pour l'ensemble des accès. Vous devez exclure temporairement un groupe de comptes d'urgence nommé <strong>{adminGroup}</strong>.<br><br>Comment devez-vous configurer l'exclusion de sécurité selon les recommandations de Microsoft ?",
    options: [
      "Ajouter directement le groupe {adminGroup} dans la section 'Exclure' (Exclude) de la politique d'Accès Conditionnel.",
      "Définir le paramètre de sécurité par défaut (Security Defaults) sur Désactivé pour le groupe {adminGroup}.",
      "Déplacer les comptes du groupe {adminGroup} dans une unité administrative non-évaluée.",
      "Configurer une règle de contournement MFA basée sur l'adresse MAC des postes des membres de {adminGroup}."
    ],
    correct: 0,
    exp: {
      correct: "Pour exclure des comptes d'urgence à {company}, la bonne pratique officielle est d'exclure explicitement le groupe {adminGroup} sous l'onglet 'Exclude' de la politique d'Accès Conditionnel.",
      incorrect: {
        "A": "L'exclusion du groupe {adminGroup} is correct.",
        "B": "Les Security Defaults sont globaux et ne permettent pas de configurer des exclusions sélectives pour le groupe {adminGroup}.",
        "C": "Les unités administratives ne peuvent pas être utilisées comme filtre d'exclusion dans les politiques d'accès conditionnel.",
        "D": "L'Accès Conditionnel ne supporte pas le filtrage par adresse MAC des cartes réseau."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/entra/identity/conditional-access/plan-conditional-access",
    powershellCmd: "Get-MgBetaConditionalAccessPolicy",
    estTime: 100,
    points: 10
  }
];
