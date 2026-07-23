window.questionsPowershell = [
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
  }
];
