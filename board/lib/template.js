module.exports={
  frame:function(_list , path_herf){
    return `<!doctype html>
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

        ${_list}

      </table>
      <a href = "${path_herf}/write">글쓰기</a>

    </body>
    </html>`;
  },
  list:function (result , path_herf){
    var list = '';
    var i = 0;
    while(i < result.length){
      list = list + `
      <tr>
      <th>${result[i].id}</th>
      <th><a href="${path_herf}/view?index=${result[i].id}">${result[i].title}</a></th>
      <th>${result[i].author_id}</th>
      <th>${result[i].created}</th>
      <th>${result[i].views}</th>
      </tr>`;
      i = i + 1;
    }
    return list;
  },
  writeform:function(path_herf){
    return `<!doctype html>
    <html>
    <head>
    <title>board 입력폼</title>
    <meta charset="utf-8">
    </head>
    <body>

      <form action="${path_herf}_process" method="post" >
        제목:<input type="text" name="title"/><br/>
        작성자:<input type="text" name="writer"/><br/>
        내용:<textarea name="description" placeholder="description"></textarea>
        <input type="submit"/>
      </form>

    </body>
    </html>
    `;
  },
  formCheck:function(post)
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
  },
  detailview:function(id , author_id , date , title , description , path_herf){
    return `<!doctype html>
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
      <a href="${path_herf}/update?index=${id}">update</a>

      <form action="${path_herf}/delete" method="post">
          <input type="hidden" name="id" value="${id}">
          <input type="submit" value="delete">
      </form>

      <a href = "${path_herf}">목록</a>

    </body>
    </html>`;
  },
  updateview:function(id , author_id , title , description , path_herf){
    return `<!doctype html>
    <html>
    <head>
    <title>board update</title>
    <meta charset="utf-8">
    </head>
    <body>

      <form action="${path_herf}/update_process" method="post" >
      <input type="hidden" name="id" value="${id}">
        제목:<input type="text" name="title" value=${title}><br/>
        작성자:<input type="text" name="writer" value=${author_id}><br/>
        내용:<textarea name="description" >${description}</textarea>
        <input type="submit"/>
      </form>

    </body>
    </html>
    `;
  }
}
