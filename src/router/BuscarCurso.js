const url = require('url');
const querystring = require('querystring');

let rawUrl = 'https://BuscarCurso.com/?titulo=JavaScript';
let rawUrl = 'https://BuscarCurso.com/?titulo=Kotlin';
let rawUrl = 'https://BuscarCurso.com/?titulo=Java';

let parsedUrl = url.parse(rawUrl);
let parsedQs = querystring.parse(parsedUrl.query);

let server = app.listen(8080, function() {
    console.log('titulo')
});

BuscarCurso.find({ Titulo: 'JavaScript' }).
  then(BuscarCurso => {              
    console.log(BuscarCurso[0].Titulo); 
    return BuscarCurso.find({ Titulo: 'Java' });
  }).
  then(BuscarCurso => {
    console.log(BuscarCurso[0].Titulo); 
  });

  BuscarCurso.find({ age: 'Não tem numero' }).
  catch(err => console.log('Java:', err.message));

  var query = BuscarCurso.find({ Titulo: /JavaScript/i }, null, { skip: 10 });
  var promise = query.exec();
  promise.addBack(function (err, docs) {});