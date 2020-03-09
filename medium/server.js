const express=require('express');
const express_graphtql=require('express-graphql');
const {buildSchema}=require('graphql');

//GraphQL Schema
let schema=buildSchema(
    `type Query {
        message:String
    }`
);

// Root resolver
let root={
    message:()=>'Hello World'
};

// Create an express server and a GraphQL endpoint
const app=express();
app.use('/graphql',express_graphtql({
    schema:schema,
    rootValue:root,
    graphiql: true  
}));


app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));


//Execute Query then use below code


// query getCourseWithFragments($courseID1: Int!, $courseID2: Int!,$courseID3:Int!) {
//     course1: course(id: $courseID1) {
//       ...courseFields
//     }
//     course2: course(id: $courseID2) {
//       ...courseFields
//     }
//     course3:course(id:$courseID3){
//       ...courseFields
//     }
//   }
  
//   fragment courseFields on Course {
//     title
//     author
//     description
//     topic
//     url
//   }
  

// Query Variable

// { 
//     "courseID1":1,
//     "courseID2":2,
//    "courseID3":3
  	
// }

