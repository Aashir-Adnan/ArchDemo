/* API Objects for table: task_flow_steps */

      global.ListTask_flow_stepsAll_object = {
        "versions": {
          "versionData": [{
            "=1.0": {
              "steps": [{
                "config": {
                  "features": {
                    "multistep": false,
                    "parameters": true,
                    "pagination": true
                  },
                  "communication": {
                    //"encryption" : false
                    "encryption": {
                      "platformEncryption" : true,
                    }
                  },
                  "verification": {
                    "otp": false,
                    "accessToken": false
                  }
                },
                "data": {
                  "parameters": {
                    "fields": []
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "SELECT",
                      "queryPayload": "SELECT task_flow_step_id as Task_flow_steps_taskFlowStepId, task_flow_id as Task_flow_steps_taskFlowId, step_title as Task_flow_steps_stepTitle, step_description as Task_flow_steps_stepDescription, step_order as Task_flow_steps_stepOrder, is_cross_department as Task_flow_steps_isCrossDepartment, step_assigned_to_role_department_id as Task_flow_steps_stepAssignedToRoleDepartmentId, created_by_user_role_department_id as Task_flow_steps_createdByUserRoleDepartmentId, updated_at as Task_flow_steps_updatedAt, created_at as Task_flow_steps_createdAt, updated_by as Task_flow_steps_updatedBy, status as Task_flow_steps_status, COUNT(*) OVER () AS table_count FROM Task_flow_steps",
                      "database": "projectDB"
                    },
                    "utilityFunctions": {
                      "callbackFunction": null,
                      "payloadFunction": []
                    }
                  },
                  "requestMetaData": {
                    "requestMethod": "GET",
                    "permission": null,
                    "pagination": { "pageSize": 10 }
                  }
                },
                "response": {
                  "successMessage": "Task_flow_steps retrieved successfully!",
                  "errorMessage": "Failed to retrieve Task_flow_steps."
                }
              }]
            }
          }]
        }
      };


      global.ListTask_flow_steps_object = {
        "versions": {
          "versionData": [{
            "=1.0": {
              "steps": [{
                "config": {
                  "features": {
                    "multistep": false,
                    "parameters": true,
                    "pagination": true
                  },
                  "communication": {
                    //"encryption" : false
                    "encryption": {
                      "platformEncryption" : true,
                    }
                  },
                  "verification": {
                    "otp": false,
                    "accessToken": false
                  }
                },
                "data": {
                  "parameters": {
                    "fields": [
                      {
                        "name": "id",
                        "validations": [],
                        "required": true,
                        "source": "req.query"
                      }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "SELECT",
                      "queryPayload": "SELECT task_flow_step_id as Task_flow_steps_taskFlowStepId, task_flow_id as Task_flow_steps_taskFlowId, step_title as Task_flow_steps_stepTitle, step_description as Task_flow_steps_stepDescription, step_order as Task_flow_steps_stepOrder, is_cross_department as Task_flow_steps_isCrossDepartment, step_assigned_to_role_department_id as Task_flow_steps_stepAssignedToRoleDepartmentId, created_by_user_role_department_id as Task_flow_steps_createdByUserRoleDepartmentId, updated_at as Task_flow_steps_updatedAt, created_at as Task_flow_steps_createdAt, updated_by as Task_flow_steps_updatedBy, status as Task_flow_steps_status FROM Task_flow_steps WHERE task_flow_step_id = {{id}}",
                      "database": "projectDB"
                    },
                    "utilityFunctions": {
                      "callbackFunction": null,
                      "payloadFunction": []
                    }
                  },
                  "requestMetaData": {
                    "requestMethod": "GET",
                    "permission": null,
                    "pagination": { "pageSize": 10 }
                  }
                },
                "response": {
                  "successMessage": "Task_flow_steps entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve Task_flow_steps entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateTask_flow_steps_object = {
        "versions": {
          "versionData": [{
            "=1.0": {
              "steps": [{
                "config": {
                  "features": {
                    "multistep": false,
                    "parameters": true,
                    "pagination": false
                  },
                  "communication": {
                    //"encryption" : false
                    "encryption": {
                      "platformEncryption" : true,
                    }
                  },
                  "verification": {
                    "otp": false,
                    "accessToken": false
                  }
                },
                "data": {
                  "parameters": {
                    "fields": [
                        
                            {
                            "name": "Task_flow_steps_taskFlowId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Task_flow_steps_stepTitle",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Task_flow_steps_stepDescription",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Task_flow_steps_stepOrder",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Task_flow_steps_isCrossDepartment",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Task_flow_steps_stepAssignedToRoleDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Task_flow_steps_createdByUserRoleDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Task_flow_steps_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE Task_flow_steps SET task_flow_id = {{Task_flow_steps_taskFlowId}}, step_title = {{Task_flow_steps_stepTitle}}, step_description = {{Task_flow_steps_stepDescription}}, step_order = {{Task_flow_steps_stepOrder}}, is_cross_department = {{Task_flow_steps_isCrossDepartment}}, step_assigned_to_role_department_id = {{Task_flow_steps_stepAssignedToRoleDepartmentId}}, created_by_user_role_department_id = {{Task_flow_steps_createdByUserRoleDepartmentId}}, updated_by = {{Task_flow_steps_updatedBy}} WHERE task_flow_step_id = {{task_flow_step_id}}",
                      "database": "projectDB"
                    },
                    "utilityFunctions": {
                      "callbackFunction": null,
                      "payloadFunction": []
                    }
                  },
                  "requestMetaData": {
                    "requestMethod": "PUT",
                    "permission": null,
                    "pagination": {}
                  }
                },
                "response": {
                  "successMessage": "Task_flow_steps updated successfully!",
                  "errorMessage": "There was an error updating Task_flow_steps."
                }
              }]
            }
          }]
        }
      };


    global.DeleteTask_flow_steps_object = {
    "versions": {
        "versionData": [{
        "=1.0": {
            "steps": [{
            "config": {
                "features": {
                "multistep": false,
                "parameters": true,
                "pagination": false
                },
                "communication": {
                    //"encryption": false,
                    "encryption": {
                        "platformEncryption": true,
                    }
                },
                "verification": {
                "otp": false,
                "accessToken": false
                }
            },
            "data": {
                "parameters": {
                "fields": [
                    {
                    "name": "id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE Task_flow_steps SET status = 'inactive' WHERE task_flow_step_id = {{id}}",
                    "database": "projectDB"
                },
                "utilityFunctions": {
                    "callbackFunction": null,
                    "payloadFunction": []
                }
                },
                "requestMetaData": {
                "requestMethod": "DELETE",
                "permission": null,
                "pagination": {}
                }
            },
            "response": {
                "successMessage": "Task_flow_steps deleted successfully!",
                "errorMessage": "There was an error deleting Task_flow_steps."
            }
            }]
        }
        }]
    }
    };


      global.Addtask_flow_steps_object = {
        "versions": {
          "versionData": [{
            "=1.0": {
              "steps": [{
                "config": {
                  "features": {
                    "multistep": true,
                    "parameters": true,
                    "pagination": false
                  },
                  "communication": {
                    "encryption": {
                      "platformEncryption": true,
                      "accessTokenEncryption": false
                    }
                  },
                  "verification": {
                    "otp": false,
                    "accessToken": true
                  }
                },
                "data": {
                  "parameters": {
                    "fields": [
                        
                            {
                            "name": "task_flow_steps_taskFlowId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_flow_steps_stepTitle",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_flow_steps_stepDescription",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_flow_steps_stepOrder",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_flow_steps_isCrossDepartment",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_flow_steps_stepAssignedToRoleDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_flow_steps_createdByUserRoleDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_flow_steps_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO task_flow_steps (task_flow_id, step_title, step_description, step_order, is_cross_department, step_assigned_to_role_department_id, created_by_user_role_department_id, updated_by) VALUES ({{task_flow_step_id}}, {{task_flow_id}}, {{step_title}}, {{step_description}}, {{step_order}}, {{is_cross_department}}, {{step_assigned_to_role_department_id}}, {{created_by_user_role_department_id}}, {{updated_at}}, {{created_at}}, {{updated_by}}, {{status}})",
                      "database": "projectDB"
                    },
                    "utilityFunctions": {
                      "callbackFunction": null,
                      "payloadFunction": []
                    }
                  },
                  "requestMetaData": {
                    "requestMethod": "POST",
                    "permission": null,
                    "pagination": {}
                  }
                },
                "response": {
                  "successMessage": "task_flow_steps added successfully!",
                  "errorMessage": "There was an error adding task_flow_steps."
                }
              }]
            }
          }]
        }
      };