window.templatesDefender = [
  {
    id: "q_defender_templated_001",
    cat: "Microsoft Defender",
    subcat: "Defender for Office 365",
    difficulty: "Moyen",
    type: "single-choice",
    templated: true,
    variables: {
      company: ["Contoso Ltd", "Litware Inc", "Tailspin Toys", "Adatum Corp"],
      policyName: ["Safe-Attachments-Policy", "DDO365-Attachments", "Block-Malware-Policy", "Secured-Attachments"],
      action: ["Block (Bloquer)", "Replace (Remplacer)", "Dynamic Delivery (Livraison dynamique)"]
    },
    q: "Dans <strong>{company}</strong>, vous configurez Microsoft Defender pour Office 365. Vous souhaitez créer une stratégie de pièces jointes sécurisées (Safe Attachments) nommée <strong>{policyName}</strong>. L'objectif est de s'assurer que les e-mails sont livrés immédiatement à l'utilisateur sans leurs pièces jointes en cours d'analyse par le bac à sable (sandbox), et que les pièces jointes soient réinsérées une fois l'analyse terminée et s'il s'avère qu'elles sont saines.<br><br>Quelle action de pièce jointe sécurisée devez-vous sélectionner ?",
    options: [
      "Dynamic Delivery (Livraison dynamique)",
      "Block (Bloquer)",
      "Replace (Remplacer)",
      "Monitor (Surveiller)"
    ],
    correct: 0,
    exp: {
      correct: "L'option 'Dynamic Delivery' (Livraison dynamique) pour la stratégie {policyName} de {company} permet de délivrer le message immédiatement avec des espaces réservés à la place des pièces jointes le temps de l'analyse, puis de restaurer les pièces jointes saines sans retarder le flux d'emails.",
      incorrect: {
        "A": "L'option Livraison dynamique est correcte.",
        "B": "L'action Bloquer suspend la livraison de tout l'e-mail avec sa pièce jointe tant que l'analyse n'est pas finalisée.",
        "C": "L'action Remplacer délivre l'e-mail en supprimant définitivement la pièce jointe suspecte si elle est détectée comme malveillante, mais ne permet pas l'aperçu dynamique initial.",
        "D": "L'action Surveiller (Monitor) délivre les messages immédiatement avec leurs pièces jointes et enregistre les résultats, mais ne protège pas activement en cas d'infection avant analyse."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/defender-office-365/safe-attachments-about",
    powershellCmd: "New-SafeAttachmentPolicy -Name \"{policyName}\" -Action DynamicDelivery",
    estTime: 120,
    points: 10
  }
];
