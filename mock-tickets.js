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
        userId: 1,  
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
        userId: 2,
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
        userId: 3,
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
        userId: 4,
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
        userId: 5,
        created: new Date()
    }
];

module.exports = tickets