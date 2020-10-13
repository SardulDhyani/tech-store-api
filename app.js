const express = require('express');
const { graphqlHTTP } = require('express-graphql');

// const auth = require();
// const graphqlSchema = require();
// const graphqlResolver = require();

const app = express();

// Avoid CORS

app.use( (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-control-Allow-Methods', '*');
  res.setHeader('Access-control-Allow-Headers', '*');
  if(req.method === 'OPTIONS'){
    return res.sendStatus(200);
  }
  next();
} );

// graphql

// app.use('/graphql', graphqlHTTP({
//   schema : graphqlSchema,
//   rootValue : graphqlResolver,
//   graphiql : true,
//   customFormatErrorFn(err){
//     if(!err.originalError){
//       return err;
//     }
//     const data = err.originalError.data;
//     const message = err.message || 'An Error Occured';
//     const code = err.originalError.code || 500;
    
//     return{
//       message,
//       data,
//       status : code
//     };
//   }
// }));

app.use((error, req, res, next) {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
});


app.listen(8080);