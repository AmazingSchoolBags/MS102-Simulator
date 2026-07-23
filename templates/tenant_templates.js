window.templatesTenant = [
  {
    id: "q_tenant_templated_001",
    cat: "Tenant",
    subcat: "Licences",
    difficulty: "Moyen",
    type: "single-choice",
    templated: true,
    variables: {
      company: ["Contoso Ltd", "Northwind Traders", "Tailspin Toys", "Adatum Corp"],
      targetUser: ["un nouvel analyste de données", "un technicien support", "un responsable RH"]
    },
    q: "Dans <strong>{company}</strong>, vous devez attribuer une licence Microsoft 365 E5 à <strong>{targetUser}</strong>. Cependant, vous souhaitez désactiver l'accès à Microsoft Yammer pour ce compte tout en conservant tous les autres services actifs.<br><br>Où devez-vous effectuer cette modification dans le Centre d'administration Microsoft 365 ?",
    options: [
      "Dans l'onglet 'Licences et applications' de la fiche utilisateur, en développant les 'Applications' sous la licence E5 et en décochant Yammer.",
      "Dans les paramètres de sécurité d'Entra ID en bloquant l'application Yammer.",
      "En créant une stratégie d'Accès Conditionnel bloquant l'accès à Yammer.",
      "En modifiant les informations de profil de l'utilisateur dans Azure Active Directory Connect local."
    ],
    correct: 0,
    exp: {
      correct: "Pour désactiver Yammer sélectivement pour {targetUser} chez {company}, la méthode la plus directe est de modifier l'affectation individuelle sous 'Licences et applications' dans le Centre d'administration Microsoft 365 en décochant le service Yammer spécifique.",
      incorrect: {
        "A": "Décocher Yammer sous Licences et applications est correct.",
        "B": "Bloquer Yammer dans Entra ID désactiverait l'application pour toute l'organisation ou nécessiterait des configurations complexes de consentement d'application, ce qui est inapproprié pour un seul utilisateur.",
        "C": "L'Accès Conditionnel peut bloquer la connexion, mais le service resterait provisionné et la licence consommée avec Yammer actif.",
        "D": "Azure AD Connect local synchronise les identités mais ne gère pas les détails de provisionnement des sous-services de licences Microsoft 365."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/microsoft-365/admin/manage/assign-licenses-to-users",
    powershellCmd: "Set-MgUserLicense -UserId <UserId> -AddLicenses @{SkuId='...'; DisabledPlans=@('...')} -RemoveLicenses @()",
    estTime: 120,
    points: 10
  }
];
