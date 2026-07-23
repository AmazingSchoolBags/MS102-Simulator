window.questionsCaseStudies = [
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
    correct: [2, 1, 0],
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
    correct: [1, 0, 2, 3],
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
  }
];
