import ballerina/persist as _;

type User record {|
    readonly string id;
    string name;
    string email;
|};
