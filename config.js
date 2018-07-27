/**
 * Creating and export configuration variables
 * 
 */

// Container for all environments
var environments = {};


//Stagigng (default) environments
environments.staging = {
    'httpPort': 7777,
    'httpsPort': 7771,
    'envName': 'staging'
}

//Production environment
environments.production = {
    'httpPort': 8888,
    'httpsPort': 8881,
    'envName': 'production'
}

//Detwermine which environment was passed as command-line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLocaleLowerCase() : '';


//Check that current environment is one of the environments above, if not, default to stage
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

//Export the module
module.exports = environmentToExport;