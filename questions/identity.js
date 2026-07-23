window.questionsIdentity = [
  {
    id: "q_006",
    cat: "Identité",
    subcat: "Conditional Access",
    difficulty: "Difficile",
    type: "single-choice",
    q: "Votre organisation souhaite mettre en œuvre une politique d'Accès Conditionnel pour exiger une authentification multifacteur (MFA) pour tous les utilisateurs. Cependant, vous souhaitez exclure temporairement un groupe d'utilisateurs 'BreakGlass' (comptes d'urgence) de cette politique.<br><br>Quelle est la recommandation de Microsoft concernant la gestion des exclusions dans ce scénario ?",
    options: [
      "Exclure explicitement le groupe de comptes d'urgence sous l'onglet 'Exclude' de la politique d'Accès Conditionnel.",
      "Ajouter les comptes d'urgence à une unité administrative exclue.",
      "Désactiver temporairement les fonctions de sécurité par défaut (Security Defaults) uniquement pour ces comptes.",
      "Définir le niveau de risque de l'utilisateur sur 'Faible' pour éviter le déclenchement de la règle."
    ],
    correct: 0,
    exp: {
      correct: "L'exclusion explicite d'un groupe dédié dans l'Accès Conditionnel (onglet Exclude) est la pratique officielle recommandée par Microsoft pour s'assurer que les comptes BreakGlass ne se retrouvent jamais bloqués par une mauvaise configuration MFA.",
      incorrect: {
        "B": "Les unités administratives (AU) servent à déléguer des rôles d'administration et ne peuvent pas être directement utilisées pour configurer des exclusions de politiques d'accès conditionnel.",
        "C": "Les Security Defaults sont globaux pour tout le tenant. On ne peut pas les désactiver pour seulement quelques comptes.",
        "D": "Modifier manuellement le niveau de risque n'empêche pas une politique d'Accès Conditionnel basée sur le MFA global de s'appliquer."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/entra/identity/conditional-access/plan-conditional-access",
    powershellCmd: "Get-MgBetaConditionalAccessPolicy",
    estTime: 90,
    points: 10
  },
  {
    id: "q_007",
    cat: "Identité",
    subcat: "Hybrid",
    difficulty: "Expert",
    type: "multi-choice",
    q: "Vous configurez Microsoft Entra Cloud Sync pour synchroniser les utilisateurs d'une forêt AD locale nouvellement acquise. L'entreprise souhaite s'assurer que seuls les comptes situés dans l'unité d'organisation (OU) nommée <code>OU=Marketing,DC=contoso,DC=com</code> soient synchronisés.<br><br>Quelles <strong>deux</strong> actions devez-vous effectuer pour configurer ce filtrage ? (Choisissez deux réponses)",
    options: [
      "Configurer les filtres de portée (Scope filters) dans la configuration Cloud Sync sur le portail Entra admin center.",
      "Modifier l'outil Synchronization Rules Editor sur le serveur local de l'agent cloud sync.",
      "Indiquer l'attribut DN (Distinguished Name) de l'OU marketing dans les filtres de ciblage de conteneur d'Active Directory.",
      "Exécuter la cmdlet PowerShell Set-ADSyncScheduler pour désactiver la synchronisation automatique globale pendant l'édition."
    ],
    correct: [0, 2],
    exp: {
      correct: "Avec Entra Cloud Sync (contrairement à Entra Connect), la configuration du filtrage s'effectue directement dans le cloud sur le portail Microsoft Entra via l'édition de la portée (Scope). On y définit le ciblage de conteneur d'Active Directory en renseignant le Distinguished Name de l'OU marketing.",
      incorrect: {
        "B": "Synchronization Rules Editor est utilisé pour Microsoft Entra Connect classique, pas pour Entra Cloud Sync qui est géré à 100% dans le cloud.",
        "D": "Il n'est pas nécessaire d'arrêter le scheduler global de synchronisation ADSync pour éditer la configuration d'un agent léger Cloud Sync."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/entra/identity/hybrid/cloud-sync/how-to-configure",
    powershellCmd: "Get-MgDirectoryOnPremisesSynchronization",
    estTime: 180,
    points: 10
  },
  {
    id: "q_008",
    cat: "Identité",
    subcat: "Entra ID",
    difficulty: "Moyen",
    type: "drag-drop",
    q: "Associez les fonctionnalités de protection des identités de Microsoft Entra aux scénarios d'utilisation correspondants.",
    dragItems: [
      "Access Reviews",
      "PIM (Privileged Identity Management)",
      "Entra ID Protection"
    ],
    dropZones: [
      "Évaluer en temps réel les risques de connexion et exiger le MFA si une anomalie géographique est détectée.",
      "Demander aux propriétaires de groupes de confirmer périodiquement l'accès de leurs membres externes.",
      "Accorder des privilèges d'administration temporaires et just-in-time avec approbation managériale."
    ],
    correct: [1, 2, 0],
    exp: {
      correct: "Entra ID Protection gère l'analyse de risque en temps réel. Access Reviews assure la gouvernance en demandant des attestations régulières de droit d'accès. PIM permet l'élévation de privilèges temporaire.",
      incorrect: {
        "General": "Bien qu'il s'agisse de sécurité, ces trois technologies interviennent à des étapes différentes du cycle de vie des identités."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/entra/id-governance/privileged-identity-management/pim-configure",
    powershellCmd: "Get-MgPrivilegedRole",
    estTime: 120,
    points: 10
  },
  {
    id: "q_020",
    cat: "Identité",
    subcat: "Entra ID",
    difficulty: "Expert",
    type: "single-choice",
    q: "Vous implémentez Microsoft Entra ID Governance. Vous devez créer une stratégie permettant de révoquer automatiquement les accès d'administration pour les consultants externes s'ils ne justifient pas de leur affectation tous les 30 jours.<br><br>Quel composant devez-vous configurer ?",
    options: [
      "Les révisions d'accès (Access Reviews)",
      "Privileged Identity Management (PIM) avec affectation éligible",
      "Une politique d'Accès Conditionnel basée sur le cycle de vie",
      "Une stratégie d'Unités Administratives dynamiques"
    ],
    correct: 0,
    exp: {
      correct: "Les Access Reviews (révisions d'accès) sont spécifiquement conçues pour forcer la réévaluation périodique des droits des utilisateurs (notamment les invités ou membres de rôles), avec la possibilité de révoquer automatiquement les accès en cas de non-réponse ou refus.",
      incorrect: {
        "B": "PIM permet d'activer des rôles à la demande mais n'effectue pas d'enquête périodique de conformité pour valider si le compte a toujours légitimement besoin d'avoir ce rôle.",
        "C": "L'Accès Conditionnel contrôle le signal d'authentification lors de la connexion, il ne gère pas le cycle de vie global de l'appartenance à un rôle.",
        "D": "Les unités administratives gèrent la délégation des rôles d'administration locale mais n'ont pas de système de révision périodique intégrée."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/entra/id-governance/access-reviews-overview",
    powershellCmd: "New-MgIdentityGovernanceAccessReviewDefinition",
    estTime: 150,
    points: 10
  }
];
