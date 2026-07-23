window.templatesCompliance = [
  {
    id: "q_compliance_templated_001",
    cat: "Compliance",
    subcat: "DLP",
    difficulty: "Moyen",
    type: "single-choice",
    templated: true,
    variables: {
      company: ["Contoso Ltd", "Litware Inc", "Tailspin Toys", "Adatum Corp"],
      sensitiveType: ["de numéros de cartes de crédit", "de numéros de sécurité sociale", "de coordonnées bancaires (IBAN)"]
    },
    q: "Dans <strong>{company}</strong>, vous configurez une politique de prévention des pertes de données (DLP) dans Microsoft Purview pour détecter et bloquer le partage externe <strong>{sensitiveType}</strong>.<br><br>Vous souhaitez tester la politique sans bloquer les e-mails ni avertir les utilisateurs dans un premier temps.<br><br>Quel mode d'activation de politique devez-vous sélectionner ?",
    options: [
      "Testez-la d'abord et afficher les conseils de stratégie en mode Rapport seul (Test it out first)",
      "Activer immédiatement la politique (Turn it on right away)",
      "Conserver la politique désactivée (Keep it off)",
      "Activer uniquement pour les e-mails internes"
    ],
    correct: 0,
    exp: {
      correct: "Le mode de test 'Test it out first' (ou Rapport seul) pour {company} permet d'évaluer l'efficacité de la règle DLP de détection {sensitiveType} sans bloquer le flux d'informations ni perturber les utilisateurs.",
      incorrect: {
        "A": "Le mode de test est correct.",
        "B": "Activer immédiatement bloquerait les e-mails et afficherait des alertes, ce qui enfreint la contrainte de test silencieux.",
        "C": "Conserver la politique désactivée n'enregistre aucune donnée d'audit dans les rapports.",
        "D": "Il n'y a pas de mode d'activation partielle interne/externe global au niveau de l'état d'activation ; cela doit être configuré dans les règles de la politique."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/purview/dlp-create-deploy-policy",
    powershellCmd: "Set-DlpCompliancePolicy -Identity \"DLP-Policy\" -Mode TestWithoutNotifications",
    estTime: 120,
    points: 10
  }
];
