const tickets = [
    {
        id: 1,
        client_number: 323456,
        client_name: "NovoTech",       
        type: "Incident",
        urgency: "Haute",
        category: "Logiciel",
        description: "Nous n'arrivons pas à nous connecter à l'application de comptabilité",
        address: { "number": "45", "street": "rue Albert", "postCode": 33000, "city": "Bordeaux" },
        created: new Date()
    },
    {
        id: 2,
        client_number: 654321,
        client_name: "Zenith Innovations",
        type: "Demande de service",
        urgency: "Basse",
        category: "Matériel",
        description: "Ordinateur portable ne s'allume plus",
        address: { "number": "12", "street": "rue de la Paix", "postCode": 75000, "city": "Paris" },
        created: new Date()
    },
    {
        id: 3,
        client_number: 789456,
        client_name: "NexusWorks",
        type: "Demande de service",
        urgency: "Moyenne",
        category: "Réseau",
        description: "Impossible d'accéder à internet",
        address: { "number": "1", "street": "rue de la Liberté", "postCode": 69000, "city": "Lyon" },
        created: new Date()
    },
    {
        id: 4,
        client_number: 456789,
        client_name: "Veritas Industries",
        type: "Incident",
        urgency: "Haute",
        category: "Sécurité",
        description: "Nous avons été victime d'une attaque par ransomware",
        address: { "number": "2", "street": "rue de la Victoire", "postCode": 59000, "city": "Lille" },
        created: new Date()
    },
    {
        id: 5,
        client_number: 987654,
        client_name: "FusionX Solutions",
        type: "Demande de service",
        urgency: "Basse",
        category: "Impression",
        description: "L'imprimante ne fonctionne plus",
        address: { "number": "3", "street": "rue de la République", "postCode": 13000, "city": "Marseille" },
        created: new Date()
    }
];

module.exports = tickets