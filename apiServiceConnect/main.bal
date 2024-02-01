import apiServiceConnect.db;
import ballerina/http;

type UserDto record {
    string id;
    string name;
    string email;
};

configurable string apiServiceEndpoint = "https://a1e2c832-3205-42a5-ba03-4441268b25aa-dev.e1-us-east-azure.choreoapis.dev/ikll/apiservice/user-294/v1";
configurable string consumerKey = "f0H4ftyWPJ0gzl5FJzfZZVS6_0Ia";
configurable string apiServiceConsumerSecret = "G4SFysvITDQyrhf5jEkeWVYx_WJS2AIVYFlwP2TIlw4a";
configurable string tokenEndpoint = "https://api.asgardeo.io/t/sborg/oauth2/token";


service /email on new http:Listener(9090) {
    private final db:Client dbClient;

    function init() returns error? {
        self.dbClient = check new ();
    }
    resource function post users(UserDto newUser) returns error|http:Response{
        http:Client apiServiceClient = check new (apiServiceEndpoint,
         auth = {
                tokenUrl: tokenEndpoint,
                clientId: consumerKey,
                clientSecret: apiServiceConsumerSecret,
                clientConfig: {
                    secureSocket: {
                        disable: true
                    }
                }
            }
        );
        string[]|http:Error result = apiServiceClient->/users.post([newUser]);
        if (result is string[]) {
            http:Response response = new;
            response.statusCode = 201;
            response.setPayload("User created successfully");
            return response;
        } else {
            http:Response response = new;
            response.statusCode = 409;
            response.setPayload("User already exists");
            return response;
        }
    }



}
