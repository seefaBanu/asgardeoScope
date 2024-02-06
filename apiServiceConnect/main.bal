import apiServiceConnect.db;
import ballerina/http;

type UserDto record {
    string id;
    string name;
    string email;
};

 string apiServiceEndpoint = "https://a1e2c832-3205-42a5-ba03-4441268b25aa-dev.e1-us-east-azure.choreoapis.dev/ikll/apiservice/user-294/v1.0";
 string consumerKey = "di8wWWQgbKYJTNKlIV399GRkyTQa";
 string apiServiceConsumerSecret = "QmHeTRJdfz0q4IgA2G1SXp9yf4Aa";
 string tokenEndpoint = "https://sts.choreo.dev/oauth2/token";

// configurable string apiServiceEndpoint = ?;
// configurable string consumerKey = ?;
// configurable string apiServiceConsumerSecret = ?;
// configurable string tokenEndpoint = ?;


service /email on new http:Listener(9090) {
    private final db:Client dbClient;

    function init() returns error? {
        self.dbClient = check new ();
    }
    // resource function post users(UserDto newUser) returns error|http:Response{
    //     http:Client apiServiceClient = check new (apiServiceEndpoint,
    //      auth = {
    //             tokenUrl: tokenEndpoint,
    //             clientId: consumerKey,
    //             clientSecret: apiServiceConsumerSecret,
    //             clientConfig: {
    //                 secureSocket: {
    //                     disable: true
    //                 }
    //             }
    //         }
    //     );
    //     string[]|http:Error result = apiServiceClient->/users.post([newUser]);
    //     if (result is string[]) {
    //         http:Response response = new;
    //         response.statusCode = 201;
    //         response.setPayload("User created successfully");
    //         return response;
    //     } else {
    //         http:Response response = new;
    //         response.statusCode = 409;
    //         response.setPayload("User already exists");
    //         return response;
    //     }
    // }

    resource function get hi() returns string|http:Error {
        http:Client apiServiceClient = check new (apiServiceEndpoint,
         auth = {
                tokenUrl: tokenEndpoint,
                clientId: consumerKey,
                clientSecret: apiServiceConsumerSecret,
                clientConfig: {
                    secureSocket: {
                        disable: true
                    }
                },
                scopes: ["urn:sborg:apiserviceuser:test"]
            }
        );

        string|http:Error result = apiServiceClient->/hello();
        return result;

    }
}

