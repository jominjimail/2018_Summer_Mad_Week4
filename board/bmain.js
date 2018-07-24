var http = require('http');
var url = require('url');
var qs = require('querystring');
//var db = require('./lib/db');
var mysql = require('mysql');
var path = require('path');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '025987',
  database : 'madcamp'
});

db.connect();

var app = http.createServer(function(request , response){
  var _url = request.url;
  console.log('url@@   '+_url);
  var queryData = url.parse(_url , true).query;
  console.log(queryData);
  var pathname = url.parse(_url , true).pathname;
  console.log(pathname);
  //console.log(queryData , pathname , queryData.id);

  if(pathname === '/'){
    console.log(queryData);
    if(queryData.id === undefined){
      //메인 페이지
      //console.log(queryData);
      var html = `<!doctype html>
      <html>
      <head>
      <title>OpenMajor Welcome!</title>
      <meta charset="utf-8">
      </head>
      <body>

      <h1><a href="/">Open Major</a></h1>
      <h1><a href="/CSE">CSE</a></h1>
      <h1><a href="/ELEC">ELEC</a></h1>

      </body>
      </html>`;
      response.writeHead(200);
      response.end(html);
    }else{
      //console.log('?????????????????'+queryData.id);
      //console.log(queryData);
      //메인 페이지 세분화 할때 필요함
      //console.log('doggo deska');

    }
  }else if(pathname === '/CSE'){
    console.log(queryData);
    var html = `<!doctype html>
    <html>
    <head>
    <title>OpenMajor CSE</title>
    <meta charset="utf-8">
    </head>
    <body>

    <h1><a href="/CSE/issue">main issue</a></h1>
    <h1><a href="/CSE/professor">CES Professor</a></h1>
    <h1><a href="/CSE/board">board</a></h1>

    </body>
    </html>`;
    response.writeHead(200);
    response.end(html);

  }else if(pathname === '/CSE/issue'){

    //이슈 게시판
    db.query(`SELECT * FROM cse_issue` , function(error , result){
      if(error){
        throw error;
      }
      //console.log(result);

      var list = '';
      var i = 0;
      while(i < result.length){
        list = list + `
        <tr>
        <th>${result[i].id}</th>
        <th><a href="/CSE/issue/view?index=${result[i].id}">${result[i].title}</a></th>
        <th>${result[i].author_id}</th>
        <th>${result[i].created}</th>
        <th>${result[i].views}</th>
        </tr>`;
        i = i + 1;
      }

      var html = `<!doctype html>
      <html>
      <head>
      <title>Main issue CSE</title>
      <meta charset="utf-8">
      </head>
      <body>

      <h1>게시글 리스트</h1>
        <table>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
            <th>조회수</th>
          </tr>

          ${list}

        </table>
        <a href = "/CSE/issue/write">글쓰기</a>

      </body>
      </html>`;
      response.writeHead(200);
      response.end(html);
    });


  }else if(pathname === '/CSE/issue/write'){
    //여기 접근할때 아마 user 의 major 정보를 확인하고 접근권한같은거 추가할듯
    var html = `<!doctype html>
    <html>
    <head>
    <title>board 입력폼</title>
    <meta charset="utf-8">
    </head>
    <body>

      <form action="/CSE/issue/write_process" method="post" >
        제목:<input type="text" name="title"/><br/>
        작성자:<input type="text" name="writer"/><br/>
        내용:<textarea name="description" placeholder="description"></textarea>
        <input type="submit"/>
      </form>

    </body>
    </html>
    `;
    //console.log(html);
    response.writeHead(200);
    response.end(html);

  }else if(pathname === '/CSE/issue/write_process'){
    var body = '';
    request.on('data', function (data) { // post 방식으로 웹브라우저를 전송할때 너무 많은 데이터를 전송하면 , 무리데스
            body += data; // 콜백이 실행될때마다 실행됨 정보가 조각조각 들어오다가
    });

    request.on('end', function (){
      var post = qs.parse(body);
      console.log(post);

      var check =function formCheck()
      {
        //console.log('여기까지는 옴?');
        if (post.title == null || post.title == ""){      // null인지 비교한 뒤
          //alert('제목을 입력하세요');           // 경고창을 띄우고
          //title.focus();    // 해당태그에 포커스를 준뒤
          return false;                       // false를 리턴합니다.
        }
        if (post.writer == null ||  post.writer  == ""){
          //alert('작성자를 입력하세요');
          //writer.focus();
          return false;
        }

        if (post.description == null ||  post.description == ""){
          //alert('내용을 입력하세요');
          //description.focus();
          return false;
        }
      }

      if(check() != false){
        // 여기서 DB 연결해서 list 추가해주면 될듯
        db.query(`INSERT INTO cse_issue (title , description , created , author_id , views) VALUES (? , ? , NOW() , ? , ?)`,
        [post.title , post.description ,1, 1],
        function(error1 , result){
          if(error1){
            throw error1;
          }
          response.writeHead(302, {Location: `/CSE/issue`});
          response.end();
        })

      }else{
        //글쓰기 실패 즉 다시 ㄱㄱ , 생코에서 update하는거 참고하면 좋을듯
        response.writeHead(200);
        response.end("fail");
      }
    });

  }else if(pathname === '/CSE/issue/view'){
    console.log('isseue veiw sidghk?');
    var filteredId = path.parse(queryData.index).base;
    console.log('filterid 라는데?'+filteredId);
    //console.log( 'dfdfdfdfdfdf'+queryData.index);
    if(filteredId === undefined){
      //console.log( 'dfdfdfdfdfdf'+queryData.index);
      response.writeHead(200);
      response.end();
    }else{
      console.log(filteredId);
      db.query(`SELECT * FROM cse_issue` , function(error , result){
          if(error){
            throw error;
          }
          db.query(`SELECT * FROM cse_issue WHERE id=?`,[filteredId] , function(error2 , result){
            if(error2){
              throw error2;
            }

            console.log(result);
            var id=result[0].id;
            var title = result[0].title;
            var description = result[0].description;
            var author_id=result[0].author_id;
            var date=result[0].created;

            var html =`<!doctype html>
            <html>
            <head>
            <title>타이틀?</title>
            <meta charset="utf-8">
            </head>
            <body>

            <h1>게시글 조회</h1>
              <table border="1">
                <tr>
                  <th>번호</th>
                  <td>${id}</td>

                  <th>작성자</th>
                  <td>${author_id}</td>

                  <th>날짜</th>
                  <td>${date}</td>

                </tr>

                <tr>
                  <th>제목</th>
                  <td>${title}</td>
                </tr>

                <tr>
                  <th>내용</th>
                  <td>${description}</td>
                </tr>

              </table>
              <a href="/CSE/issue/update?index=${id}">update</a>

              <form action="/CSE/issue/delete" method="post">
                  <input type="hidden" name="id" value="${id}">
                  <input type="submit" value="delete">
                </form>

              <a href = "/CSE/issue">목록</a>

            </body>
            </html>
            `
            response.writeHead(200);
            response.end(html);
          })

    })

  }//inner else

}else if(pathname === '/CSE/issue/update'){
  var filteredId = path.parse(queryData.index).base;
  console.log('update 라인 filterid 라는데?'+filteredId);
  if(filteredId === undefined){
    response.writeHead(200);
    response.end();
  }else{
    console.log('here?'+filteredId);
    db.query(`SELECT * FROM cse_issue` , function(error , result){
        if(error){
          throw error;
        }
        db.query(`SELECT * FROM cse_issue WHERE id=?`,[filteredId] , function(error2 , result){
          if(error2){
            throw error2;
          }
          var id=result[0].id;
          var title = result[0].title;
          var description = result[0].description;
          var author_id=result[0].author_id;
          var date=result[0].created;
          console.log(description);

          var html = `<!doctype html>
          <html>
          <head>
          <title>board update</title>
          <meta charset="utf-8">
          </head>
          <body>

            <form action="/CSE/issue/update_process" method="post" >
            <input type="hidden" name="id" value="${id}">
              제목:<input type="text" name="title" value=${title}><br/>
              작성자:<input type="text" name="writer" value=${author_id}><br/>
              내용:<textarea name="description" >${description}</textarea>
              <input type="submit"/>
            </form>

          </body>
          </html>
          `;

          response.writeHead(200);
          response.end(html);


        })
      })//query



  }//innerelse
}//ekse if
else if(pathname === '/CSE/issue/update_process'){
  var body = '';
  request.on('data', function (data) { // post 방식으로 웹브라우저를 전송할때 너무 많은 데이터를 전송하면 , 무리데스
          body += data; // 콜백이 실행될때마다 실행됨 정보가 조각조각 들어오다가
  });

  request.on('end', function (){
    var post = qs.parse(body);

    var id = post.id;
    var title = post.title;
    var description = post.description;
    console.log(id  , title , description);

    var check =function formCheck()
    {
      //console.log('여기까지는 옴?');
      if (post.title == null || post.title == ""){      // null인지 비교한 뒤
        //alert('제목을 입력하세요');           // 경고창을 띄우고
        //title.focus();    // 해당태그에 포커스를 준뒤
        return false;                       // false를 리턴합니다.
      }
      if (post.writer == null ||  post.writer  == ""){
        //alert('작성자를 입력하세요');
        //writer.focus();
        return false;
      }

      if (post.description == null ||  post.description == ""){
        //alert('내용을 입력하세요');
        //description.focus();
        return false;
      }
    }

    if(check() != false){
      // 여기서 DB 연결해서 list 추가해주면 될듯
      /*
      `INSERT INTO cse_issue (title , description , created , author_id , views) VALUES (? , ? , NOW() , ? , ?)`,
      [post.title , post.description ,1, 1],
      function(error1 , result){
        if(error1){
          throw error1;
        }
        response.writeHead(302, {Location: `/CSE/issue`});
        response.end();
      }
      */
      db.query(`UPDATE cse_issue set title=? , description=?, created=NOW() where id=?` ,
      [post.title , post.description , post.id],
      function(error2 , result){
        if(error2){
          throw error2;
        }
        response.writeHead(302, {Location: `/CSE/issue/view?index=${post.id}`});
        response.end();

      }

    )//query

    }else{
      //글쓰기 실패 즉 다시 ㄱㄱ , 생코에서 update하는거 참고하면 좋을듯
      response.writeHead(200);
      response.end("fail");
    }
  });

}else if(pathname === '/CSE/issue/delete'){
  var body = '';
  request.on('data', function (data) { // post 방식으로 웹브라우저를 전송할때 너무 많은 데이터를 전송하면 , 무리데스
          body += data; // 콜백이 실행될때마다 실행됨 정보가 조각조각 들어오다가
  });

  request.on('end', function (){
    var post = qs.parse(body);
    var filteredId = post.id;
    console.log('delete 라인 게시글 id 라는데?'+filteredId);


    //user 가 이 게시글을 삭제할 권리가 있는지 체크가 필요하다.
    db.query(`DELETE FROM cse_issue WHERE id=${filteredId}` , function(error , result){
        if(error){
          throw error;
        }
        response.writeHead(302, {Location: `/CSE/issue`});
        response.end();
      })//query

  });

}
  else{
      response.writeHead(404);
      response.end('Not founddfdfdf');
  }

}); // app

app.listen(4000);
