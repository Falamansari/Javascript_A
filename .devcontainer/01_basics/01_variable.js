const accountId = 144324
let accountEmail = "firoj@google.com"
var accountPassword = "12345"
accountCity = "Bangalore"

// accountId = 2 not allowed

accountEmail = "HDFC@google.com"
accountPassword = "243433445"
accountCity = "bangalore1"

/*
prefer not to use var
because of issue in block scope and function scope
*/

// This will display all variables in a nice table format:
console.table([accountId, accountEmail, accountPassword, accountCity]);