define({ "api": [
  {
    "type": "post",
    "url": "/api/login",
    "title": "Authenticate the user",
    "name": "Login",
    "group": "Authenticate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of LCCs.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of LCCs.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token, valid for 20 minutes .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucess",
          "content": "HTTP/1.1 200 OK\n{\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhbmllbHJjIiwiaWF0IjoxNTI3MTY1NTg2LCJleHAiOjE1MjcxNjY3ODZ9.VEvOcyPa-LKSr0kJXTa6TvpCqyKmenJRbEgdxNKJjik\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidJSON",
            "description": "<p>The fields &quot;username&quot; and &quot;password&quot; are required.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentials",
            "description": "<p>The credentials are invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InvalidJSON",
          "content": "HTTP/1.1 422 BadRequest\n{\n   \"error\": \"Invalid JSON\"\n}",
          "type": "json"
        },
        {
          "title": "InvalidCredentials",
          "content": "HTTP/1.1 401 Unauthorized\n{\n   \"error\": \"Invalid Credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/login.js",
    "groupTitle": "Authenticate"
  }
] });