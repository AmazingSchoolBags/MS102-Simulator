window.templatesPowershell = [
  {
    id: "q_powershell_templated_001",
    cat: "PowerShell",
    subcat: "Microsoft Graph",
    difficulty: "Moyen",
    type: "powershell-complete",
    templated: true,
    variables: {
      company: ["Contoso Ltd", "Tailspin Toys", "Adatum Corp"],
      policyName: ["MFA-Required-Policy", "Security-MFA-Rule", "Global-MFA-Policy"]
    },
    q: "Vous administrez le locataire Microsoft 365 de <strong>{company}</strong>. Vous devez utiliser Microsoft Graph PowerShell pour afficher les détails de la politique d'Accès Conditionnel nommée <strong>{policyName}</strong>.<br><br>Complétez la commande PowerShell pour filtrer et afficher cette politique spécifique :<br><code>Get-MgIdentityConditionalAccessPolicy -Filter \"displayName eq '___________________'\"</code>",
    options: [
      "{policyName}",
      "MFA-Required",
      "-Name {policyName}",
      "displayName"
    ],
    correct: 0,
    exp: {
      correct: "Pour filtrer par nom d'affichage de la politique dans Microsoft Graph PowerShell, la valeur du filtre OData doit correspondre exactement au displayName recherché, soit <code>{policyName}</code> dans ce cas.",
      incorrect: {
        "B": "MFA-Required est incorrect car le nom exact de la politique configurée pour {company} est {policyName}.",
        "C": "Le paramètre -Name n'est pas utilisé à l'intérieur de la chaîne de filtrage OData <code>-Filter</code>.",
        "D": "displayName est le nom de l'attribut filtré, pas sa valeur."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/powershell/module/microsoft.graph.identity.signins/get-mgidentityconditionalaccesspolicy",
    powershellCmd: "Get-MgIdentityConditionalAccessPolicy -Filter \"displayName eq '{policyName}'\"",
    estTime: 100,
    points: 10
  }
];
