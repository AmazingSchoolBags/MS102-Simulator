window.questionsDefender = [
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
      correct: "Le paramètre correct pour cibler un domaine entier dans une règle de sécurité Safe Links is <code>-RecipientDomainIs</code>, suivi du nom du domaine.",
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
  }
];
