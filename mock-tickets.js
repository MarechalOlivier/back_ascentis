const tickets = [
    {
        id: 1,        
        client_name: "NovoTech",
        client_number: 323456,      
        type: "Incident",
        urgency: "Haute",
        category: "Logiciel",
        subject: "Problème de connexion",
        description: "Nous n'arrivons pas à nous connecter à l'application de comptabilité",
        // address: { "address": "45 rue Albert", "postCode": 33000, "city": "Bordeaux" },
        // phone: "0556565656",
        created: new Date()
    },
    {
        id: 2,     
        client_name: "Zenith Innovations",
        client_number: 654321,
        type: "Demande de service",
        urgency: "Basse",
        category: "Matériel",
        subject: "Problème d'allumage",
        description: "Ordinateur portable ne s'allume plus",
        // address: { "address": "12 rue de la Paix", "postCode": 75000, "city": "Paris" },
        // phone: "0101010101",
        created: new Date()
    },
    {
        id: 3,    
        client_name: "NexusWorks",
        client_number: 789456,
        type: "Demande de service",
        urgency: "Moyenne",
        category: "Réseau",
        subject: "Problème de connexion",
        description: "Impossible d'accéder à internet",
        // address: { "address": " 1 rue de la Liberté", "postCode": 69000, "city": "Lyon" },
        // phone: "0404040404",
        created: new Date()
    },
    {
        id: 4,      
        client_name: "Veritas Industries",
        client_number: 456789,
        type: "Incident",
        urgency: "Haute",
        category: "Sécurité",
        subject: "Attaque par ransomware",
        description: "Nous avons été victime d'une attaque par ransomware",
        // address: { "address": "2 rue de la Victoire", "postCode": 59000, "city": "Lille" },
        // phone: "0303030303",
        created: new Date()
    },
    {
        id: 5,        
        client_name: "FusionX Solutions",
        client_number: 987654,
        type: "Demande de service",
        urgency: "Basse",
        category: "Impression",
        subject: "Problème d'impression",
        description: "L'imprimante ne fonctionne plus",
        // address: { "address": "3 rue de la République", "postCode": 13000, "city": "Marseille" },
        // phone: "0202020202",
        created: new Date()
    }
];

module.exports = tickets