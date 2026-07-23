window.questionsExchange = [
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
  }
];
