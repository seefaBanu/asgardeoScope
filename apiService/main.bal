import apiService.db;
import ballerina/http;
import ballerina/persist;


# Description.
#
# + id - field description  
# + name - field description  
# + email - field description
type UserDto record {|
    readonly string id;
    string name;
    string email;
|};

// service /app on new http:Listener(9090) {

//     private final db:Client dbClient;

//     function init() returns error? {
//         self.dbClient = check new ();
//     }

//     resource function post users(db:UserInsert user) returns http:InternalServerError & readonly|http:Created & readonly|http:Conflict & readonly {
//         string[]|persist:Error result = self.dbClient->/users.post([user]);
//         if result is persist:Error {
//             if result is persist:AlreadyExistsError {
//                 return http:CONFLICT;
//             }
//             return http:INTERNAL_SERVER_ERROR;
//         }
//         return http:CREATED;
//     }

// }

service /user on new http:Listener(9090) {
    private final db:Client dbClient;

    function init() returns error? {
        self.dbClient = check new ();
    }
    resource function get users() returns db:UserOptionalized[]|error? {
        stream<db:UserOptionalized,persist:Error?> users = self.dbClient->/users();
        return from db:UserOptionalized user in users select user;
    }

    resource function post users(db:UserInsert user) returns http:InternalServerError|http:Created |http:Conflict  {
        
        string[]|persist:Error result = self.dbClient->/users.post([user]);
        
        if result is persist:Error {
            if result is persist:AlreadyExistsError {
                return http:CONFLICT;
            }
            return http:INTERNAL_SERVER_ERROR;
        }
        return http:CREATED;
    }
}
