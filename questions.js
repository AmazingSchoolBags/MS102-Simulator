const questions = [
  // CASE STUDY: FABRIKAM INC.
  {
    id: "q_cs_001",
    cat: "Tenant",
    subcat: "Migration",
    difficulty: "Moyen",
    type: "case-study",
    caseStudy: {
      id: "cs_fabrikam",
      title: "Étude de Cas : Fabrikam Inc. (Q1 sur 5)",
      text: `<h3>Contexte de l'entreprise</h3>
<p>Fabrikam Inc. est un fabricant de pièces industrielles qui compte 5 000 employés répartis sur deux sites principaux (Paris et Chicago). L'infrastructure actuelle utilise un domaine Active Directory local (fabrikam.com) fonctionnant au niveau fonctionnel Windows Server 2016. L'entreprise prévoit de migrer toutes les charges de travail vers Microsoft 365.</p>

<h3>Contraintes du projet</h3>
<ul>
  <li><strong>Sécurité :</strong> Respecter strictement le principe du moindre privilège.</li>
  <li><strong>Licences :</strong> L'entreprise utilise des licences Microsoft 365 E3 pour la majorité des utilisateurs et a acheté 100 licences Microsoft 365 E5 pour l'équipe de direction.</li>
  <li><strong>Continuité de service :</strong> Aucune interruption du flux de messagerie pendant la phase de migration de 100 boîtes aux lettres pilotes du département des ventes.</li>
  <li><strong>Authentification :</strong> Les utilisateurs doivent pouvoir s'authentifier même en cas de panne de la liaison réseau locale.</li>
</ul>`
    },
    q: "Dans le cadre de <strong>Project1</strong> (migration pilote de 100 boîtes aux lettres de vente vers Exchange Online), vous devez ajouter le domaine personnalisé <code>fabrikam.com</code> dans le portail Microsoft 365 et le faire vérifier.<br><br>Quel enregistrement DNS devez-vous créer en premier lieu chez votre registraire public pour valider la propriété du domaine ?",
    options: [
      "Un enregistrement MX pointant vers fabrikam-com.mail.protection.outlook.com avec une priorité de 10",
      "Un enregistrement CNAME autodiscover pointant vers autodiscover.outlook.com",
      "Un enregistrement TXT avec la valeur MS=msXXXXXXXX contenant l'identifiant fourni par Microsoft",
      "Un enregistrement SRV _sip._tls pointant vers sipdir.online.lync.com"
    ],
    correct: 2,
    exp: {
      correct: "L'enregistrement TXT contenant la valeur de vérification MS=msXXXXXXXX est la méthode standard et recommandée par Microsoft pour prouver la propriété d'un domaine externe sans affecter aucun flux de messagerie existant.",
      incorrect: {
        "A": "L'enregistrement MX sert à router les emails vers Exchange Online. Si vous le configurez avant de vérifier le domaine, vous risquez d'interrompre le flux de messagerie de l'organisation locale, violant ainsi la contrainte de continuité.",
        "B": "L'enregistrement CNAME autodiscover sert à la configuration automatique des clients Outlook après la configuration complète du domaine, pas pour la validation initiale.",
        "D": "L'enregistrement SRV est utilisé pour Skype for Business / Teams, il ne sert pas à valider la propriété du domaine."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/microsoft-365/admin/setup/add-domain",
    powershellCmd: "Confirm-MsolDomain -DomainName fabrikam.com",
    estTime: 120,
    points: 10
  },
  {
    id: "q_cs_002",
    cat: "Identité",
    subcat: "Entra ID",
    difficulty: "Difficile",
    type: "case-study",
    caseStudy: {
      id: "cs_fabrikam",
      title: "Étude de Cas : Fabrikam Inc. (Q2 sur 5)",
      text: `<h3>Contexte de l'entreprise</h3>
<p>Fabrikam Inc. est un fabricant de pièces industrielles qui compte 5 000 employés répartis sur deux sites principaux (Paris et Chicago). L'infrastructure actuelle utilise un domaine Active Directory local (fabrikam.com) fonctionnant au niveau fonctionnel Windows Server 2016. L'entreprise prévoit de migrer toutes les charges de travail vers Microsoft 365.</p>

<h3>Contraintes du projet</h3>
<ul>
  <li><strong>Sécurité :</strong> Respecter strictement le principe du moindre privilège.</li>
  <li><strong>Licences :</strong> L'entreprise utilise des licences Microsoft 365 E3 pour la majorité des utilisateurs et a acheté 100 licences Microsoft 365 E5 pour l'équipe de direction.</li>
  <li><strong>Continuité de service :</strong> Aucune interruption du flux de messagerie pendant la phase de migration de 100 boîtes aux lettres pilotes du département des ventes.</li>
  <li><strong>Authentification :</strong> Les utilisateurs doivent pouvoir s'authentifier même en cas de panne de la liaison réseau locale.</li>
</ul>`
    },
    q: "Vous devez concevoir la stratégie d'authentification hybride pour répondre aux exigences de Fabrikam Inc. La solution doit assurer que les utilisateurs se connectent automatiquement (SSO) lorsqu'ils sont sur le réseau local, et qu'ils puissent s'authentifier dans le cloud même si l'infrastructure Active Directory locale est totalement indisponible.<br><br>Quels <strong>deux</strong> composants devez-vous implémenter ? (Choisissez deux réponses)",
    options: [
      "La synchronisation des hachages de mots de passe (Password Hash Synchronization - PHS)",
      "L'authentification directe (Pass-through Authentication - PTA)",
      "Les services de fédération Active Directory (ADFS)",
      "L'authentification unique transparente (Seamless SSO)"
    ],
    correct: [0, 3],
    exp: {
      correct: "La synchronisation des hachages de mots de passe (PHS) copie les hachages de mots de passe dans Entra ID, permettant l'authentification des utilisateurs directement depuis le cloud en cas de panne de l'AD local (plan B). L'authentification unique transparente (Seamless SSO) permet aux utilisateurs sur le réseau de ne pas ressaisir leurs informations d'identification.",
      incorrect: {
        "B": "L'authentification directe (PTA) nécessite que l'AD local soit accessible pour valider les connexions. Si la liaison réseau locale tombe en panne, personne ne peut s'authentifier.",
        "C": "Les services de fédération ADFS nécessitent une infrastructure lourde et dépendent entièrement de la disponibilité locale de l'AD, ce qui contredit la tolérance aux pannes réseau demandée."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/entra/identity/hybrid/connect/choose-ad-authn",
    powershellCmd: "Set-MsolDomainAuthentication -DomainName fabrikam.com -Authentication Managed",
    estTime: 150,
    points: 10
  },
  {
    id: "q_cs_003",
    cat: "Compliance",
    subcat: "Purview",
    difficulty: "Moyen",
    type: "case-study",
    caseStudy: {
      id: "cs_fabrikam",
      title: "Étude de Cas : Fabrikam Inc. (Q3 sur 5)",
      text: `<h3>Contexte de l'entreprise</h3>
<p>Fabrikam Inc. est un fabricant de pièces industrielles qui compte 5 000 employés répartis sur deux sites principaux (Paris et Chicago). L'infrastructure actuelle utilise un domaine Active Directory local (fabrikam.com) fonctionnant au niveau fonctionnel Windows Server 2016. L'entreprise prévoit de migrer toutes les charges de travail vers Microsoft 365.</p>

<h3>Contraintes du projet</h3>
<ul>
  <li><strong>Sécurité :</strong> Respecter strictement le principe du moindre privilège.</li>
  <li><strong>Licences :</strong> L'entreprise utilise des licences Microsoft 365 E3 pour la majorité des utilisateurs et a acheté 100 licences Microsoft 365 E5 pour l'équipe de direction.</li>
  <li><strong>Continuité de service :</strong> Aucune interruption du flux de messagerie pendant la phase de migration de 100 boîtes aux lettres pilotes du département des ventes.</li>
  <li><strong>Authentification :</strong> Les utilisateurs doivent pouvoir s'authentifier même en cas de panne de la liaison réseau locale.</li>
</ul>`
    },
    q: "Un administrateur nommé User1 doit recevoir le rôle requis pour créer et gérer des étiquettes de rétention et des stratégies de prévention des pertes de données (DLP) dans le portail Microsoft Purview. La solution doit respecter le principe du moindre privilège.<br><br>Quel rôle devez-vous attribuer à User1 ?",
    options: [
      "Global Administrator",
      "Compliance Administrator",
      "Security Administrator",
      "Compliance Data Administrator"
    ],
    correct: 1,
    exp: {
      correct: "Le rôle de Compliance Administrator permet de gérer la conformité, y compris les politiques DLP et de rétention dans Purview, tout en respectant le principe du moindre privilège par rapport à Global Administrator.",
      incorrect: {
        "A": "Le rôle de Global Administrator donne un accès illimité et complet à tout le tenant, violant gravement le principe du moindre privilège.",
        "C": "Security Administrator permet de gérer la sécurité (Defender, pare-feu, etc.) mais n'a pas les droits requis pour configurer les stratégies de conformité et de rétention de données dans Purview.",
        "D": "Le Compliance Data Administrator peut lire les données sous-jacentes mais n'a pas les droits complets requis pour concevoir et publier des stratégies globales."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/purview/microsoft-365-compliance-center-permissions",
    powershellCmd: "Add-RoleGroupMember -Identity \"Compliance Administrator\" -Member \"User1\"",
    estTime: 120,
    points: 10
  },
  {
    id: "q_cs_004",
    cat: "Identité",
    subcat: "Entra ID",
    difficulty: "Moyen",
    type: "drag-drop",
    caseStudy: {
      id: "cs_fabrikam",
      title: "Étude de Cas : Fabrikam Inc. (Q4 sur 5)",
      text: `<h3>Contexte de l'entreprise</h3>
<p>Fabrikam Inc. est un fabricant de pièces industrielles qui compte 5 000 employés répartis sur deux sites principaux (Paris et Chicago). L'infrastructure actuelle utilise un domaine Active Directory local (fabrikam.com) fonctionnant au niveau fonctionnel Windows Server 2016. L'entreprise prévoit de migrer toutes les charges de travail vers Microsoft 365.</p>

<h3>Contraintes du projet</h3>
<ul>
  <li><strong>Sécurité :</strong> Respecter strictement le principe du moindre privilège.</li>
  <li><strong>Licences :</strong> L'entreprise utilise des licences Microsoft 365 E3 pour la majorité des utilisateurs et a acheté 100 licences Microsoft 365 E5 pour l'équipe de direction.</li>
  <li><strong>Continuité de service :</strong> Aucune interruption du flux de messagerie pendant la phase de migration de 100 boîtes aux lettres pilotes du département des ventes.</li>
  <li><strong>Authentification :</strong> Les utilisateurs doivent pouvoir s'authentifier même en cas de panne de la liaison réseau locale.</li>
</ul>`
    },
    q: "Vous devez déléguer des tâches d'administration à plusieurs employés de Fabrikam Inc. Associez chaque rôle administratif Microsoft Entra ID à la tâche correspondante afin de respecter le principe du moindre privilège.",
    dragItems: [
      "User Administrator",
      "Helpdesk Administrator",
      "Billing Administrator"
    ],
    dropZones: [
      "Acheter des licences supplémentaires et consulter les factures d'achat Microsoft 365.",
      "Réinitialiser le mot de passe de l'administrateur Exchange et des utilisateurs non-administrateurs.",
      "Créer des utilisateurs, gérer les propriétés de leurs profils et modifier les appartenances aux groupes non-sécurisés."
    ],
    correct: [2, 1, 0], // User Admin -> index 2, Helpdesk Admin -> index 1, Billing Admin -> index 0
    exp: {
      correct: "User Administrator permet de créer des utilisateurs et de modifier les profils de façon globale. Helpdesk Administrator a les permissions pour réinitialiser les mots de passe des non-administrateurs et de certains administrateurs comme l'administrateur Exchange. Billing Administrator gère les achats et la facturation sans accès aux identités.",
      incorrect: {
        "General": "L'utilisation de rôles trop génériques comme Global Admin doit être proscrite au profit de ces rôles spécialisés."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/entra/identity/role-based-access-control/permissions-reference",
    powershellCmd: "Add-MgDirectoryRoleMember -DirectoryRoleId <Id> -DirectoryObjectMemberId <UserId>",
    estTime: 180,
    points: 10
  },
  {
    id: "q_cs_005",
    cat: "Tenant",
    subcat: "Migration",
    difficulty: "Difficile",
    type: "ordering",
    caseStudy: {
      id: "cs_fabrikam",
      title: "Étude de Cas : Fabrikam Inc. (Q5 sur 5)",
      text: `<h3>Contexte de l'entreprise</h3>
<p>Fabrikam Inc. est un fabricant de pièces industrielles qui compte 5 000 employés répartis sur deux sites principaux (Paris et Chicago). L'infrastructure actuelle utilise un domaine Active Directory local (fabrikam.com) fonctionnant au niveau fonctionnel Windows Server 2016. L'entreprise prévoit de migrer toutes les charges de travail vers Microsoft 365.</p>

<h3>Contraintes du projet</h3>
<ul>
  <li><strong>Sécurité :</strong> Respecter strictement le principe du moindre privilège.</li>
  <li><strong>Licences :</strong> L'entreprise utilise des licences Microsoft 365 E3 pour la majorité des utilisateurs et a acheté 100 licences Microsoft 365 E5 pour l'équipe de direction.</li>
  <li><strong>Continuité de service :</strong> Aucune interruption du flux de messagerie pendant la phase de migration de 100 boîtes aux lettres pilotes du département des ventes.</li>
  <li><strong>Authentification :</strong> Les utilisateurs doivent pouvoir s'authentifier même en cas de panne de la liaison réseau locale.</li>
</ul>`
    },
    q: "Pour la migration hybride des boîtes aux lettres, ordonnez chronologiquement les étapes de configuration à réaliser pour synchroniser et migrer les comptes en toute sécurité.",
    options: [
      "Installer et configurer Microsoft Entra Connect sur un serveur local.",
      "Vérifier le domaine personnalisé fabrikam.com dans le portail d'administration.",
      "Configurer le point de terminaison de migration Exchange Online (Migration Endpoint).",
      "Créer un lot de migration (Migration Batch) et lancer la synchronisation initiale."
    ],
    correct: [1, 0, 2, 3], // 1. Vérifier le domaine -> 2. Installer Entra Connect -> 3. Configurer Endpoint -> 4. Créer Lot de migration
    exp: {
      correct: "L'ordre logique est le suivant : 1. Valider la propriété du domaine (TXT DNS) ; 2. Synchroniser les objets locaux AD vers le cloud (Entra Connect) pour créer les comptes 'mail-enabled' ; 3. Établir la connectivité hybride (Migration Endpoint) ; 4. Créer le lot de migration pour transférer le contenu des boîtes aux lettres.",
      incorrect: {
        "General": "Tenter de lancer une synchronisation Entra Connect avant d'avoir vérifié le domaine personnalisé résultera en la synchronisation des utilisateurs avec le suffixe par défaut @tenant.onmicrosoft.com."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/exchange/hybrid-deployment/move-mailboxes",
    powershellCmd: "New-MigrationBatch -Name \"SalesBatch\" -SourceEndpoint \"OnPremEndpoint\" -Local",
    estTime: 150,
    points: 15
  },

  // CATEGORY: IDENTITY
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
    correct: [1, 2, 0], // Access Reviews -> index 1, PIM -> index 2, Entra ID Protection -> index 0
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

  // CATEGORY: EXCHANGE ONLINE
  {
    id: "q_009",
    cat: "Exchange Online",
    subcat: "Migration",
    difficulty: "Difficile",
    type: "single-choice",
    q: "Vous préparez une migration hybride Exchange minimale. Vous devez vous assurer que les utilisateurs du cloud disposent d'un accès aux informations de calendrier Libre/Occupé (Free/Busy) des utilisateurs locaux pendant la transition.<br><br>Quelle fonctionnalité devez-vous configurer pour activer cet échange d'informations ?",
    options: [
      "Une relation d'organisation (Organization Relationship) configurée des deux côtés",
      "Un connecteur de flux de messagerie SMTP sécurisé",
      "La synchronisation complète de la liste d'adresse globale (GALSync)",
      "Un domaine de messagerie distant (Remote Domain) avec l'attribut TargetAddress configuré"
    ],
    correct: 0,
    exp: {
      correct: "L'accès aux données Libre/Occupé (Free/Busy) partagé entre Exchange local et Exchange Online nécessite la configuration d'une Organization Relationship. Cette relation définit le niveau de partage de calendrier autorisé.",
      incorrect: {
        "B": "Les connecteurs de flux de messagerie sécurisent le transport des messages, mais ne permettent pas d'interroger les détails de calendrier Libre/Occupé en temps réel.",
        "C": "GALSync permet de synchroniser les objets de contact, mais ne gère pas les requêtes de disponibilité de calendrier.",
        "D": "Le Remote Domain contrôle les formats de message sortants mais pas le partage calendaire."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/exchange/shared-free-busy",
    powershellCmd: "New-OrganizationRelationship -Name \"HybridRelationship\" -FreeBusyAccessLevel LimitedDetails",
    estTime: 120,
    points: 10
  },
  {
    id: "q_010",
    cat: "Exchange Online",
    subcat: "Tenant",
    difficulty: "Moyen",
    type: "boolean",
    q: "Dans Exchange Online, les boîtes aux lettres partagées (Shared Mailboxes) n'ont pas besoin de licence Microsoft 365 affectée, à condition que leur taille totale ne dépasse pas 50 Go.<br><br>Cette affirmation est-elle correcte ?",
    options: [
      "Vrai (True)",
      "Faux (False)"
    ],
    correct: 0,
    exp: {
      correct: "Vrai. Les boîtes aux lettres partagées ne nécessitent pas de licence si elles font moins de 50 Go. Au-delà de 50 Go (jusqu'à 100 Go), il est obligatoire de leur attribuer une licence (comme Exchange Online Plan 2 ou M365 E3) ou une archive en ligne.",
      incorrect: {
        "1": "C'est incorrect, car la règle de licence Microsoft stipule bien cette franchise gratuite de 50 Go pour les comptes partagés sans licence."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits",
    powershellCmd: "Get-Mailbox -RecipientTypeDetails SharedMailbox",
    estTime: 60,
    points: 5
  },

  // CATEGORY: MICROSOFT DEFENDER
  {
    id: "q_011",
    cat: "Microsoft Defender",
    subcat: "Defender for Endpoint",
    difficulty: "Difficile",
    type: "single-choice",
    q: "Vous implémentez Microsoft Defender for Endpoint dans votre entreprise. Vous devez intégrer (onboarder) 250 ordinateurs portables fonctionnant sous Windows 11 Enterprise.<br><br>Quelle méthode d'intégration est recommandée par Microsoft pour ce volume d'appareils afin d'assurer un déploiement centralisé et automatisé ?",
    options: [
      "Déployer le script d'intégration local via Microsoft Intune (MDM).",
      "Exécuter manuellement le script d'intégration local sur chaque ordinateur portable.",
      "Configurer une règle de partage de fichiers réseau via un script de démarrage GPO.",
      "Importer manuellement les adresses MAC des appareils dans le centre de conformité."
    ],
    correct: 0,
    exp: {
      correct: "Pour les parcs de taille moyenne à grande gérés dans le cloud, l'intégration via Microsoft Intune est la méthode native, la plus automatisée et la plus facile à maintenir et monitorer.",
      incorrect: {
        "B": "L'exécution manuelle est réservée aux phases de test sur moins de 10 machines, elle est totalement inefficace pour 250 ordinateurs.",
        "C": "La GPO (Stratégie de groupe) fonctionne uniquement en environnement on-premises Active Directory traditionnel, mais n'est pas la méthode recommandée pour les terminaux modernes mobiles qui ne sont pas toujours connectés au domaine local.",
        "D": "L'import de MAC n'effectue aucun onboarding d'agent de sécurité Defender for Endpoint."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/defender-endpoint/configure-endpoints-mde",
    powershellCmd: "Get-MpComputerStatus",
    estTime: 120,
    points: 10
  },
  {
    id: "q_012",
    cat: "Microsoft Defender",
    subcat: "Defender for Office 365",
    difficulty: "Moyen",
    type: "powershell-complete",
    q: "Vous devez configurer Microsoft Defender for Office 365. Vous souhaitez utiliser PowerShell pour créer une stratégie de liens sécurisés (Safe Links) qui s'applique à tous les utilisateurs du domaine <code>contoso.com</code>.<br><br>Complétez la commande PowerShell suivante pour définir le filtre de destinataire correct :<br><code>New-SafeLinksRule -Name \"GlobalSafeLinks\" -SafeLinksPolicy \"DefaultPolicy\" ___________________</code>",
    options: [
      "-RecipientDomainIs contoso.com",
      "-RecipientDomain contoso.com",
      "-DomainIs contoso.com",
      "-RecipientAddress contoso.com"
    ],
    correct: 0,
    exp: {
      correct: "Le paramètre correct pour cibler un domaine entier dans une règle de sécurité Safe Links est <code>-RecipientDomainIs</code>, suivi du nom du domaine.",
      incorrect: {
        "B": "Le paramètre <code>-RecipientDomain</code> n'existe pas pour cette cmdlet ; il manque le suffixe 'Is'.",
        "C": "Le paramètre <code>-DomainIs</code> est syntaxiquement incorrect dans ce module de sécurité Exchange Online.",
        "D": "-RecipientAddress s'attend à une adresse email d'utilisateur complète (ex: user@contoso.com), pas à un domaine de messagerie."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/powershell/module/exchange/new-safelinksrule",
    powershellCmd: "New-SafeLinksRule -Name \"GlobalSafeLinksRule\" -SafeLinksPolicy \"DefaultPolicy\" -RecipientDomainIs contoso.com",
    estTime: 120,
    points: 10
  },

  // CATEGORY: INTUNE
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
    correct: [1, 3, 0, 2], // Hash upload -> Profile assign -> User login -> Intune applies config
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

  // CATEGORY: COMPLIANCE
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

  // CATEGORY: POWERSHELL
  {
    id: "q_016",
    cat: "PowerShell",
    subcat: "Entra ID",
    difficulty: "Moyen",
    type: "single-choice",
    q: "Vous suspectez qu'un administrateur a désactivé par inadvertance la synchronisation des annuaires locaux via Entra Connect.<br><br>Quelle commande PowerShell devez-vous exécuter pour vérifier si la synchronisation d'annuaire (DirSync) est actuellement activée pour votre locataire Microsoft 365 ?",
    options: [
      "Get-MsolCompanyInformation | Select-Object DirectorySynchronizationEnabled",
      "Get-MgSubscribedSku",
      "Get-ADSyncScheduler",
      "Get-MgOrganization | Select-Object DirSyncEnabled"
    ],
    correct: 0,
    exp: {
      correct: "La cmdlet <code>Get-MsolCompanyInformation</code> renvoie les détails globaux du tenant, dont la propriété <code>DirectorySynchronizationEnabled</code> indiquant si la synchronisation d'annuaire hybride est activée au niveau du cloud.",
      incorrect: {
        "B": "Get-MgSubscribedSku renvoie la liste des abonnements de licences acquis par le tenant.",
        "C": "Get-ADSyncScheduler vérifie le statut du scheduler local sur le serveur de synchronisation, mais pas l'état global activé/désactivé côté cloud de l'identité.",
        "D": "Get-MgOrganization ne contient pas la propriété DirSyncEnabled sous cette forme exacte de propriété."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/powershell/module/msonline/get-msolcompanyinformation",
    powershellCmd: "Get-MsolCompanyInformation",
    estTime: 90,
    points: 10
  },
  {
    id: "q_017",
    cat: "PowerShell",
    subcat: "Exchange Online",
    difficulty: "Difficile",
    type: "powershell-complete",
    q: "Vous devez accorder à un utilisateur nommé <code>User1@contoso.com</code> la permission d'envoyer des emails au nom d'une boîte aux lettres partagée nommée <code>SalesInfo@contoso.com</code> (permission SendOnBehalf).<br><br>Quelle commande PowerShell est appropriée pour cette opération ?<br><code>___________________ -Identity \"SalesInfo@contoso.com\" -GrantSendOnBehalfTo \"User1@contoso.com\"</code>",
    options: [
      "Set-Mailbox",
      "Add-MailboxPermission",
      "Set-Recipient",
      "Set-MgUser"
    ],
    correct: 0,
    exp: {
      correct: "La permission 'Send on Behalf' (Envoyer de la part de) se configure via la cmdlet <code>Set-Mailbox</code> avec le paramètre <code>-GrantSendOnBehalfTo</code>. C'est une distinction clé par rapport aux permissions 'Send As' ou 'Full Access' qui requièrent <code>Add-MailboxPermission</code>.",
      incorrect: {
        "B": "Add-MailboxPermission est utilisé pour 'FullAccess' et 'SendAs', mais pas pour 'SendOnBehalf'.",
        "C": "Set-Recipient configure des attributs génériques de destinataire mais ne gère pas le paramètre -GrantSendOnBehalfTo.",
        "D": "Set-MgUser appartient au module Microsoft Graph et n'interagit pas directement de cette manière avec les boîtes aux lettres Exchange Online."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/powershell/module/exchange/set-mailbox",
    powershellCmd: "Set-Mailbox -Identity \"SalesInfo@contoso.com\" -GrantSendOnBehalfTo \"User1@contoso.com\"",
    estTime: 120,
    points: 10
  },

  // CATEGORY: LICENSING
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

  // CATEGORY: ZERO TRUST / CONDITIONAL ACCESS
  {
    id: "q_019",
    cat: "Zero Trust",
    subcat: "Conditional Access",
    difficulty: "Difficile",
    type: "single-choice",
    q: "Vous configurez des politiques d'Accès Conditionnel pour appliquer le modèle Zero Trust. Vous souhaitez analyser l'impact potentiel d'une nouvelle politique de restriction géographique avant d'en forcer l'application stricte sur vos 10 000 utilisateurs.<br><br>Quel état (state) de politique d'Accès Conditionnel devez-vous utiliser ?",
    options: [
      "Report-only (Rapport seul)",
      "On (Activé)",
      "Off (Désactivé)",
      "Audit"
    ],
    correct: 0,
    exp: {
      correct: "L'état 'Report-only' permet d'évaluer les résultats de la politique dans les logs de connexion sans bloquer ni contraindre les connexions des utilisateurs en temps réel. C'est l'outil recommandé pour la mise en place de politiques de sécurité à grande échelle.",
      incorrect: {
        "B": "L'état 'On' applique immédiatement la règle, ce qui pourrait engendrer des interruptions d'accès majeures.",
        "C": "L'état 'Off' désactive complètement la règle et n'effectue aucune évaluation dans les journaux.",
        "D": "L'état 'Audit' n'est pas un état de politique d'Accès Conditionnel officiel de Microsoft (seuls existent On, Off et Report-only)."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/entra/identity/conditional-access/concept-conditional-access-report-only",
    powershellCmd: "Get-MgBetaConditionalAccessPolicy",
    estTime: 90,
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
  },
  {
    id: "q_021",
    cat: "Microsoft Defender",
    subcat: "Defender for Identity",
    difficulty: "Difficile",
    type: "single-choice",
    q: "Vous déployez des capteurs (sensors) Microsoft Defender for Identity sur vos contrôleurs de domaine Active Directory locaux.<br><br>Quel type de trafic ce capteur doit-il analyser en priorité pour détecter les mouvements latéraux et les attaques par force brute (Brute Force) ?",
    options: [
      "Le trafic réseau local et les requêtes Kerberos / NTLM à destination du contrôleur de domaine.",
      "Le trafic SMTP sortant du serveur de messagerie IIS.",
      "Les connexions d'accès à distance VPN SSL gérées par Microsoft Azure.",
      "Le trafic HTTPS d'administration du portail Microsoft Purview."
    ],
    correct: 0,
    exp: {
      correct: "Defender for Identity analyse le trafic réseau de vos contrôleurs de domaine (via les protocoles Kerberos, NTLM, DNS, etc.) ainsi que les événements Windows pour détecter les anomalies de connexion, les comportements suspects et les techniques d'attaque réseau locales.",
      incorrect: {
        "B": "Le trafic SMTP sortant est géré par Defender for Office 365, pas par Defender for Identity.",
        "C": "Bien que Defender for Identity puisse s'intégrer avec des serveurs VPN via RADIUS, sa tâche principale est l'écoute directe des flux d'authentification des contrôleurs de domaine locaux.",
        "D": "Le trafic HTTPS d'administration du cloud Purview relève des logs d'audit d'Entra ID ou de Defender for Cloud Apps."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/defender-for-identity/what-is",
    powershellCmd: "Get-Service -Name \"AATSensor\"",
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
