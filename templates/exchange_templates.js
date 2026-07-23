window.templatesExchange = [
  {
    id: "q_exchange_templated_001",
    cat: "Exchange Online",
    subcat: "Migration",
    difficulty: "Moyen",
    type: "single-choice",
    templated: true,
    variables: {
      company: ["Contoso Ltd", "Northwind Traders", "Tailspin Toys", "Fabrikam"],
      targetMBX: ["50 boîtes aux lettres", "150 boîtes aux lettres", "500 boîtes aux lettres"],
      domain: ["contoso.com", "northwindtraders.com", "tailspintoys.com", "fabrikam.com"]
    },
    q: "Dans le cadre d'un projet de migration pour <strong>{company}</strong>, vous planifiez le déplacement de <strong>{targetMBX}</strong> vers Exchange Online. Vous devez configurer un domaine de messagerie configuré comme faisant autorité (Authoritative) pour <strong>{domain}</strong>.<br><br>Quel type de domaine devez-vous configurer dans Exchange Online si tous les destinataires associés à ce domaine possèdent des comptes de messagerie dans votre tenant Microsoft 365 ?",
    options: [
      "Domaine faisant autorité (Authoritative)",
      "Relais interne (Internal Relay)",
      "Relais externe (External Relay)",
      "Domaine accepté distant (Remote Accepted Domain)"
    ],
    correct: 0,
    exp: {
      correct: "Pour {company}, puisque toutes les boîtes aux lettres du domaine {domain} résident dans Exchange Online, le domaine doit être configuré comme faisant autorité (Authoritative).",
      incorrect: {
        "A": "L'option Autoritaire est correcte.",
        "B": "Le relais interne (Internal Relay) est utilisé lorsque certaines boîtes aux lettres résident en local (on-premises) et d'autres dans le cloud, ce qui n'est pas le cas ici.",
        "C": "Le relais externe (External Relay) n'existe pas en tant que type de domaine accepté configurable directement dans Exchange Online.",
        "D": "Un domaine distant (Remote Domain) contrôle les paramètres de format d'e-mail sortant, mais n'est pas un type de domaine accepté (Accepted Domain)."
      }
    },
    learnRef: "https://learn.microsoft.com/fr-fr/exchange/mail-flow-best-practices/manage-accepted-domains/manage-accepted-domains",
    powershellCmd: "Set-AcceptedDomain -Identity \"{domain}\" -DomainType Authoritative",
    estTime: 120,
    points: 10
  }
];
