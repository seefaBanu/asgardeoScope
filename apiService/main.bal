import apiService.db;
import ballerina/http;
import ballerina/persist;

type UserDto record {|
    readonly string id;
    string name;
    string email;
|};



service /user on new http:Listener(9090) {
    private final db:Client dbClient;

    function init() returns error? {
        self.dbClient = check new ();
    }
    resource function get users() returns db:UserOptionalized[]|error? {
        stream<db:UserOptionalized,persist:Error?> users = self.dbClient->/users();
        
        return from db:UserOptionalized user in users select user;
    }

    resource function post users(UserDto user) returns http:InternalServerError|http:Created |http:Conflict  {
        db:UserInsert newUser={id:user.id,name:user.name,email:user.email};
        string[]|persist:Error result = self.dbClient->/users.post([newUser]);
        
        if result is persist:Error {
            if result is persist:AlreadyExistsError {
                return http:CONFLICT;
            }
            return http:INTERNAL_SERVER_ERROR;
        }
        return http:CREATED;
    }

    resource function get hello() returns string {
        return "Hello, World!"; 
    }

    function mapUserToDto(db:UserOptionalized user) returns UserDto {
    return {
        id: user.id.toString(),
        name: <string>user.name,
        email: <string>user.email
    };
}

}
