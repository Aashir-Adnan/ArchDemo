global.ListUsers_object = {
  "versions": {
    "versionData": [{
      "=1.0": {
        "config": {
          "features": {
            "multistep": false,
            "parameters": true,
            "pagination": true
          },
          "communication": {
            "encryption": false,
          },
          "verification": {
            "otp": false,
            "accessToken": false
          }
        },
        "data": {
          "parameters": {
            "fields": [
              [
                {
                  "name": "userId",
                  "validations": [],
                  "required": true,
                  "source": "req.query"
                }
              ]
            ]
          },
          "apiInfo": [
            {
              "query": {
                "queryNature": "SELECT",
                "queryPayload": "select * from users where userId = {{userId}}",
                "database": "projectDB"
              },
              "utilityFunctions": {
                "callbackFunction": null,
                "payloadFunction": []
              }
            }
          ],
          "requestMetaData": {
            "requestMethod": "GET",
            "permission": null,
            "pagination": {
              "pageSize": 10,
              "options": {
                "pageSizeOptions": [
                  5,
                  10,
                  25,
                  50,
                  100,
                  "All"
                ]
              }
            }
          }
        },
        "response": {
          "successMessage": "Users retrieved successfully!",
          "errorMessage": "Failed to retrieve users."
        }
      },
    }]
  }
}
