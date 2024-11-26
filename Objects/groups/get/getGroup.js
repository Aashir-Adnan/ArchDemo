global.ListGroupsAll_object = {
    "versions": {
      "versionData": [{
        "=1.0": {
          "steps": [{
            "config": {
              "features": {
                "multistep": false,
                "parameters": false, // No parameters needed to list all groups
                "pagination": true   // Optionally add pagination if needed
              },
              "communication": {
                "encryption": {
                  "platformEncryption": true,
                  "accessTokenEncryption": false
                }
              },
              "verification": {
                "otp": false,
                "accessToken": false
              }
            },
            "data": {
              "parameters": {
                "fields": [] // No specific fields for the list, will return all groups
              },
              "apiInfo": {
                "query": {
                  "queryNature": "select",
                  "queryPayload": "SELECT * FROM groups WHERE entryStatus != 'inactive'", // Exclude inactive groups
                  "database": "projectDB"
                },
                "utilityFunctions": {
                  "callbackFunction": null,
                  "payloadFunction": []
                }
              },
              "requestMetaData": {
                "requestMethod": "GET", // GET method is used for listing resources
                "permission": null,
                "pagination": {
                  "pageSize": 10, // Default page size, can be customized
                  "options": {
                    "pageSizeOptions": [5, 10, 25, 50, 100, "All"]
                  }
                }
              }
            },
            "response": {
              "successMessage": "Groups retrieved successfully!",
              "errorMessage": "Error retrieving groups."
            }
          }]
        }
      }]
    }
  };
  