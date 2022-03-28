# practice-server-SM-fe

- clone down this repo
- npm i
-  node server.js
-  endpoint: http://localhost:4000/graphql

- query: 
`  query {
    queryUsers {
      id
      name
      email
      phone
      bio
      location
    }
  }
  `

- mutation: 
` mutation createUser($name: String, $email: String, $phone: String, $bio: String, $location: String) {
    createUser(name: $name, email: $email, phone: $phone, bio: $bio, location: $location) 
    {
      id
    }
  }
  `
  
 - for a mutation, you will need to add this object to the query variables in the GraphiQL interface to test
 - `{
    "name": "username",
    "email": "hey@gmail.com",
    "phone": "555-555-5555",
    "bio": "mom",
    "location": "Test"
  }`

