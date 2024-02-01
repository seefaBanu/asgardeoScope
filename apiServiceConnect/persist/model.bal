import ballerina/persist as _;

type UserCheck record {|
    readonly string id;
    string email;
    boolean isEmailVerified;
|};
