// var AWS = require('aws-sdk');
// var AWSIoTData = require('aws-iot-device-sdk');
// var AWSConfiguration = require('./config.js');
//
//
// AWS.config.region = 'us-east-1'; // Region
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-east-1:163ccd04-2ace-4d53-a833-e9cab57ba84a',
// });
//
//
// var cognitoIdentity = new AWS.CognitoIdentity();
// AWS.config.credentials.get(function(err, data) {
//     if (!err) {
//         console.log('retrieved identity: ' + AWS.config.credentials.identityId);
//         var params = {
//             IdentityId: AWS.config.credentials.identityId
//         };
//         cognitoIdentity.getCredentialsForIdentity(params, function(err, data) {
//             if (!err) {
//
//                 let options = {
//                     accessKeyId: data.Credentials.AccessKeyId,
//                     secretKey: data.Credentials.SecretKey,
//                     sessionToken: data.Credentials.SessionToken,
//                     debug:true,
//                     region: 'us-east-1',
//                     host: 'anfllcph4xftj.iot.us-east-1.amazonaws.com',
//                     protocol: 'wss'
//                 };
//
//                 let client = AWSIoTData.device(options)
//
//             } else {
//                 console.log('error retrieving credentials: ' + err);
//                 alert('error retrieving credentials: ' + err);
//             }
//         });
//     } else {
//         console.log('error retrieving identity:' + err);
//         alert('error retrieving identity: ' + err);
//     }
// });
//
