// AUTO-GENERATED FILE. DO NOT MODIFY.

// This file is an auto-generated file by Ballerina persistence layer for model.
// It should not be modified by hand.

public type UserCheck record {|
    readonly string id;
    string email;
    boolean isEmailVerified;
|};

public type UserCheckOptionalized record {|
    string id?;
    string email?;
    boolean isEmailVerified?;
|};

public type UserCheckTargetType typedesc<UserCheckOptionalized>;

public type UserCheckInsert UserCheck;

public type UserCheckUpdate record {|
    string email?;
    boolean isEmailVerified?;
|};

