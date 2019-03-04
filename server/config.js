var configJson = {
   
    apis : [
        "/quiz/apis/sample",
        "/quiz/apis/test",
        '/quiz/apis/hello' 
    ],

    maps : {
        '/quiz/apis/sample' : './apis/sample.json',
        '/quiz/apis/test' : './apis/hello.json',
        '/quiz/apis/hello' : './apis/sample.json'
    }
}

exports.configJson = configJson;
