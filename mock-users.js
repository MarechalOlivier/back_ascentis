const users = [
    {
        id: 1,
        username: "remi@hotmail.fr",
        password: "mdp",
        firstName: "Remi",
        lastName: "Secq",
        address: { "address": "45 rue Albert", "postCode": 33000, "city": "Bordeaux" },
        phoneNumber: "0556565656",
        
        created: new Date()
    },
    {
        id: 2,
        username: "julie@gmail.com",
        password: "mdp",
        firstName: "Julie",
        lastName: "Martin",
        address: { address: "18 avenue Charles", postCode: 75001, city: "Paris" },
        phoneNumber: "0123456789",
        
        created: new Date()
    },
    {
        id: 3,
        username: "john.doe@yahoo.com",
        password: "mdp",
        firstName: "John",
        lastName: "Doe",
        address: { address: "25 Main Street", postCode: 10001, city: "New York" },
        phoneNumber: "1234567890",
        
        created: new Date()
    }
];

module.exports = users