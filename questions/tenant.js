window.questionsTenant = [
  {
    id: "q_018",
    cat: "Licences",
    subcat: "Tenant",
    difficulty: "Moyen",
    type: "single-choice",
    q: "Un administrateur souhaite utiliser l'attribution de licences basée sur les groupes (Group-Based Licensing). Il associe une licence Microsoft 365 E5 à un groupe dynamique de sécurité nommé 'Tous-les-Membres'. Plusieurs utilisateurs se plaignent de ne pas avoir accès aux outils de messagerie Exchange Online.<br><br>Quelle est la cause la plus probable de ce dysfonctionnement ?",
    options: [
      "Les utilisateurs ont des conflits de licences existants ou le service Exchange Online est désactivé au sein de l'affectation de licence M365 E5 pour ce groupe.",
      "Les groupes dynamiques ne supportent pas l'attribution de licences de groupe.",
      "Le groupe n'a pas été configuré avec le type de sécurité de messagerie (Mail-Enabled Security).",
      "Les utilisateurs n'ont pas encore configuré leur mot de passe initial."
    ],
    correct: 0,
    exp: {
      correct: "Lors de l'affectation d'une suite de licences complexes comme le plan E5, il est possible de désactiver sélectivement certains services (ex: Exchange Online). Si ce service a été décoché dans l'attribution de groupe, ou s'il y a un conflit direct (ex: une licence E3 existante non résolue), les boîtes mail ne seront pas provisionnées.",
      incorrect: {
        "B": "L'attribution basée sur les groupes fonctionne parfaitement avec les groupes de sécurité dynamiques.",
        "C": "Il n'est pas nécessaire d'avoir un groupe à extension de messagerie pour utiliser le licensing par groupe.",
        "D": "L'authentification initiale de l'utilisateur n'affecte pas le provisionnement automatique des licences."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/entra/identity/users-groups-roles/licensing-groups-assign",
    powershellCmd: "Get-MgUserLicenseDetail",
    estTime: 120,
    points: 10
  },
  {
    id: "q_024",
    cat: "Tenant",
    subcat: "Licences",
    difficulty: "Moyen",
    type: "single-choice",
    q: "Un administrateur doit comparer les fonctionnalités de licences. Quelle fonctionnalité de sécurité avancée est incluse dans Microsoft 365 E5 mais <strong>indisponible</strong> dans la licence standard Microsoft 365 E3 ?",
    options: [
      "Microsoft Entra ID Protection (analyse de risques à la connexion)",
      "L'authentification multifacteur (MFA) de base",
      "L'inscription automatique des appareils mobiles dans Microsoft Intune",
      "Le chiffrement des messages Office 365 (OME) de base"
    ],
    correct: 0,
    exp: {
      correct: "Microsoft Entra ID Protection (anciennement Azure AD Identity Protection) nécessite des licences Premium P2 qui font partie de Microsoft 365 E5. Microsoft 365 E3 n'inclut que Entra ID Premium P1.",
      incorrect: {
        "B": "Le MFA de base est inclus dans toutes les versions de licences et est même disponible gratuitement via les Security Defaults.",
        "C": "L'inscription automatique Intune est supportée dans la licence E3 car elle inclut Microsoft Intune et Entra ID Premium P1.",
        "D": "Le chiffrement OME de base est inclus dans Microsoft 365 E3 via le plan d'abonnement Exchange Online."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenant-level-services-licensing-guidance/microsoft-365-security-compliance-licensing-guidance",
    powershellCmd: "Get-MgSubscribedSku",
    estTime: 90,
    points: 10
  },
  {
    id: "q_025",
    cat: "Tenant",
    subcat: "Migration",
    difficulty: "Expert",
    type: "single-choice",
    q: "Dans le cadre d'un projet de migration Exchange hybride avec authentification fédérée (ADFS), vous devez modifier l'enregistrement DNS externe <code>autodiscover.contoso.com</code> pour rediriger les clients vers Exchange Online.<br><br>Quel type d'enregistrement DNS externe devez-vous configurer ?",
    options: [
      "Un enregistrement CNAME pointant vers autodiscover.outlook.com",
      "Un enregistrement A pointant vers l'adresse IP publique de votre serveur ADFS",
      "Un enregistrement CNAME pointant vers l'adresse publique de votre proxy d'application web local (WAP)",
      "Un enregistrement MX pointant vers mail.protection.outlook.com"
    ],
    correct: 0,
    exp: {
      correct: "Pour finaliser la migration de la messagerie et s'assurer que tous les périphériques découvrent automatiquement leur boîte aux lettres hébergée dans le cloud, l'enregistrement CNAME autodiscover doit pointer vers <code>autodiscover.outlook.com</code>.",
      incorrect: {
        "B": "ADFS gère l'authentification et non la découverte de boîte aux lettres de messagerie (Autodiscover).",
        "C": "Rediriger l'Autodiscover vers le proxy local empêcherait la connexion des utilisateurs déjà migrés dans Exchange Online si l'infrastructure locale est surchargée ou en cours de décommissionnement.",
        "D": "L'enregistrement MX gère la livraison du flux de messagerie SMTP (emails entrants) et non la configuration automatique des clients de messagerie Outlook."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/exchange/hybrid-deployment-prerequisites",
    powershellCmd: "Resolve-DnsName -Name autodiscover.outlook.com",
    estTime: 120,
    points: 10
  }
];
