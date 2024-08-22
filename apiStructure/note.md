                            REST(Representaional state Transfer)
When a user makes a request, information is passed through the server, which is then filtered by the rest to give the user the information requested.
Stateless means that the server has nothing to do with the users

HTTP VERBS
GET-this gets information using ID
PUT-This updates information selecrted
POST-This creates information  
PATCH- This updates partially
DELETE-this deletes selected information permanently.
CRUD-Create Read Update Delete
    a) Create serves the same function as POST 
    b) Read serves the same function as GET
    c) Update serves the same function as PUT
    d) Delete serves the same fucntion as DELETE

Headers: In the header of the request, the client sends the type of content that is able to receive from the server. This is called the accept field and it insures that server does not send data or information that  cannot be processed by the client. This type is called MIME(Multipurpose Internet Mail Extension). It consists of type and subtype, they are separated by '/'.

Paths: Request must contain a path to a resource that the operation should be performed on. In RESTful API's, path should be designed to help the client know what is happening or going on.

Note:The first part of the path should be the plural form of the resource. This makes it easy to read and understand.This keeps the PATH neccessary for better understanding.

Content Types: if the server sends a data payload to the client,The server must include a content type in the header of the response. This content header field alerts the client the type of data it is sending to the response body.
This content types are the MIME that the server sends back in the response should be one of the options that the client specifies in their accept field of the request. 

Status/Response code: This are specific codes that tell the client the status of their request.



GraphQL
SOAP