module.exports={
  frame:function(_list , path_herf){
    return `
    <!doctype html>
    <html>
    <head>
    <title>Main issue CSE</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.js"></script>
  <style type="text/css">
    


@import url(http://fonts.googleapis.com/earlyaccess/hanna.css);

@import url(http://fonts.googleapis.com/css?family=Open+Sans:600);
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
html {
  margin: 0px;
}

body {
  margin: 0px;
  font-family: 'Hanna';
  /*font-family: '맑은 고딕', 'Helvetica', 'Arial', 'lucida grande','tahoma','verdana','arial','sans-serif';*/
  color: white;
  /* 100% 배경  */
  background: url("https://lh5.googleusercontent.com/-JkLWSMovm_g/VJfbR3CFrrI/AAAAAAAAARE/gyflv9w2Kks/s700-no/backImage_700.png") center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /*-webkit-text-stroke: 1px;*/

  -webkit-text-stroke: 1px rgba(142, 128, 113, 0.5);
  -moz-text-stroke: 1px rgba(142, 128, 113, 0.5);
  -ms-text-shadow : 1px 1px 1px rgba(142,128,113, 0.3);
  -moz-text-shadow : 1px 1px 1px rgba(142,128,113, 0.3);
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
   
}

input {
  color: #bdbab4;
}

/* 레이아웃 */
/******************************************************/
.container {
  width: 1050px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
}





/* Commons */
#table_board a {
  text-decoration: none;
}

#board {
  width: 100%;
  float: left;
  margin-top: 0px !important;
  margin-bottom: 30px;
}

#table_board {
  width: 100%;
  border-radius: 15px;
  border-spacing: 0px;
  overflow: hidden;
  font-size: 21px;
  color: #8e8071;
}

#table_board th {
  background-color: #b1a599;
  color: white;
  height: 25px;
  font-size: 24px;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
  font-weight: 400;
  padding: 10px;
  padding-left: 15px;
}

#table_board tr td:nth-child(2), #table_board tfoot tr td {
  text-align: left;
  padding-left: 10px;
}

#table_board tbody td {
  padding: 10px;
  text-align: center;
  background-color: white;
  border-left: 1px solid gray;
  border-bottom: 1px solid gray;
}

#table_board tbody td:first-child {
  border-left: 0px;
}

#table_board tfoot tr td {
  /*background-color: #b1a599;*/
  background-color: #efe8e2;
  color: white;
  height: 50px;
  padding-left: 40px;
}

#table_board tfoot a {
  color: black;
}

#table_board tfoot a:hover {
  color: #0681ce;
}

}

/* List */
#table_board.list tbody a {
  color: #8e8071;
}

#table_board.list tbody a:link {
  color: #8e8071;
}

#table_board.list tbody a:visited {
  color: #8e8071;
}

#table_board.list tbody a:hover {
  color: #0681ce;
}

#table_board.list tbody a:active {
  color: #8e8071;
}

#table_board.list tbody tr:hover * {
  color: #0681ce !important;
}

/*  WriteFrom  */
#table_board.writeForm input[type=text], #table_board.writeForm textarea,
  #table_board.reply textarea {
  width: 90%;
  height: 100%;
  float: left;
  /* border: 0px; */
  padding-left: 5px;
  font-size: 1em;
  font-family: 'Hanna', sans-serif;
  color: black;
  -webkit-text-stroke: 1px rgba(142, 128, 113, 0.3);
}

#table_board.writeForm tfoot input[type=submit], #table_board.writeForm input[type=button],
  #table_board.reply input[type=button] {
  text-align: center;
  font-size: 1em;
  font-family: 'Hanna', sans-serif;
  width: 100px;
  background-color: black;
  height: 35px;
  color: white;
}

/*  Read  */
#table_board.read tbody tr td:nth-child(2) {
  color: black;
}

/* Reply */
#table_board.reply {
  background-color: white;
  width: 100%;
  /* border : 1px solid #EFE8E2; */
  margin-bottom: 20px;
}

#table_header {
  width: 100%;
  height: 25px;
  background-color: /* #B1A599; */#EFE8E2;
  color: black;
  text-align: center;
  font-size: 18px;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
  font-weight: 400;
  padding: 10px;
  padding-left: 15px;
}
#table_contents{
  padding: 25px;
}

#table_board.reply th {
  background-color: #efe8e2;
  border-top: 4px solid #ebc85e;
  color: #8e8071;
  padding: 30px;
  border-bottom: 1px solid gray;
}

#table_board.reply textarea {
  float: none;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  border: 1px solid gray;
}

#table_board.reply input[type=button] {
  background-color: #b1a599;
  margin-bottom: 15px;
  font-size: 20px;
}

#table_board.reply tbody div:first-child {
  float: left;
  width: 90%;
}

#table_board.reply tbody div:nth-child(2) {
  width: 10%;
  font-size: 12px;
  float: left;
}

#table_board.reply tbody span {
  font-size: 14px;
}
  </style>

    </head>
    <body>

    <div class="container">
    <div id="board">
  <table id="table_board" class="list">
    <colgroup>
      <col width="150">
      <col width="500">
      <col width="250">
      <col width="500">
      <col width="150">
    </colgroup>
    <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>닉네임</th>
        <th>날짜</th>
        <th>조회수</th>
      </tr>
    </thead>
    <tbody>     
        <tr>
          <td colspan="5">
            <p> 
              ${_list}
            </p>
          </td>     
        </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5">
          <a href = "/home${path_herf}/write">글쓰기</a>
        </td>
      </tr>
    </tfoot>
  </table>
</div>
    </body>
    </html>`;
    ////////////////////

    ///////////////
  },
  list:function (result , path_herf){
    var list = '';
    var i = 0;
    while(i < result.length){
      list = list + `
      <tr>
      <th>${result[i].id}</th>
      <th><a href="/home${path_herf}/view/${result[i].id}">${result[i].title}</a></th>
      <th>${result[i].name}</th>
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
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.js"></script>
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

html{    background:url(http://thekitemap.com/images/feedback-img.jpg) no-repeat;
  background-size: cover;
  height:100%;
}

#feedback-page{
  text-align:center;
}

#form-main{
  width:100%;
  float:left;
  padding-top:0px;
}

#form-div {
  background-color:rgba(72,72,72,0.4);
  padding-left:35px;
  padding-right:35px;
  padding-top:35px;
  padding-bottom:50px;
  width: 450px;
  float: left;
  left: 50%;
  position: absolute;
  margin-top:30px;
  margin-left: -260px;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
}

.feedback-input {
  color:#3c3c3c;
  font-family: Helvetica, Arial, sans-serif;
  font-weight:500;
  font-size: 18px;
  border-radius: 0;
  line-height: 22px;
  background-color: #fbfbfb;
  padding: 13px 13px 13px 54px;
  margin-bottom: 10px;
  width:100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  border: 3px solid rgba(0,0,0,0);
}

.feedback-input:focus{
  background: #fff;
  box-shadow: 0;
  border: 3px solid #3498db;
  color: #3498db;
  outline: none;
  padding: 13px 13px 13px 54px;
}

.focused{
  color:#30aed6;
  border:#30aed6 solid 3px;
}

/* Icons ---------------------------------- */
#name{
  background-image: url(http://rexkirby.com/kirbyandson/images/name.svg);
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

#name:focus{
  background-image: url(http://rexkirby.com/kirbyandson/images/name.svg);
  background-size: 30px 30px;
  background-position: 8px 5px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

#email{
  background-image: url(http://rexkirby.com/kirbyandson/images/email.svg);
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

#email:focus{
  background-image: url(http://rexkirby.com/kirbyandson/images/email.svg);
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

#comment{
  background-image: url(http://rexkirby.com/kirbyandson/images/comment.svg);
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

textarea {
    width: 100%;
    height: 150px;
    line-height: 150%;
    resize:vertical;
}

input:hover, textarea:hover,
input:focus, textarea:focus {
  background-color:white;
}

#button-blue{
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  float:left;
  width: 100%;
  border: #fbfbfb solid 4px;
  cursor:pointer;
  background-color: #3498db;
  color:white;
  font-size:24px;
  padding-top:22px;
  padding-bottom:22px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  margin-top:-4px;
  font-weight:700;
}

#button-blue:hover{
  background-color: rgba(0,0,0,0);
  color: #0493bd;
}
  
.submit:hover {
  color: #3498db;
}
  
.ease {
  width: 0px;
  height: 74px;
  background-color: #fbfbfb;
  -webkit-transition: .3s ease;
  -moz-transition: .3s ease;
  -o-transition: .3s ease;
  -ms-transition: .3s ease;
  transition: .3s ease;
}

b2{
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  float:left;
  width: 100%;
  cursor:pointer;
  color:white;
  font-size:30px;
  padding-top:22px;
  padding-bottom:22px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  margin-top:-4px;
  font-weight:700;
}

.submit:hover .ease{
  width:100%;
  background-color:white;
}

@media only screen and (max-width: 580px) {
  #form-div{
    left: 3%;
    margin-right: 3%;
    width: 88%;
    margin-left: 0;
    padding-left: 3%;
    padding-right: 3%;
  }
}
  </style>

    </head>
    <body>
    <div id="form-main">
  <div id="form-div">
    <form class="form" action="/home${path_herf}_process" method="post" id="form1">
      

      <p>
        <b2>게시글 작성</b2>
      </p>
      <p class="name">
        <input name="title" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="제목" id="name" />
      </p>
      
      <p class="text">
        <textarea name="description" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="내용"></textarea>
      </p>
      
      
      <div class="submit">
        <input type="submit" value="등록하기" id="button-blue"/>
        <div class="ease"></div>
      </div>
    </form>
  </div>

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
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.js"></script>
  <style type="text/css">
    


@import url(http://fonts.googleapis.com/earlyaccess/hanna.css);

@import url(http://fonts.googleapis.com/css?family=Open+Sans:600);
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
html {
  margin: 0px;
}

body {
  margin: 0px;
  font-family: 'Hanna';
  /*font-family: '맑은 고딕', 'Helvetica', 'Arial', 'lucida grande','tahoma','verdana','arial','sans-serif';*/
  color: white;
  /* 100% 배경  */
  background: url("https://lh5.googleusercontent.com/-JkLWSMovm_g/VJfbR3CFrrI/AAAAAAAAARE/gyflv9w2Kks/s700-no/backImage_700.png") center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /*-webkit-text-stroke: 1px;*/

  -webkit-text-stroke: 1px rgba(142, 128, 113, 0.5);
  -moz-text-stroke: 1px rgba(142, 128, 113, 0.5);
  -ms-text-shadow : 1px 1px 1px rgba(142,128,113, 0.3);
  -moz-text-shadow : 1px 1px 1px rgba(142,128,113, 0.3);
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
   
}

input {
  color: #bdbab4;
}

/* 레이아웃 */
/******************************************************/
.container {
  width: 1050px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
}





/* Commons */
#table_board a {
  text-decoration: none;
}

#board {
  width: 100%;
  float: left;
  margin-top: 0px !important;
  margin-bottom: 30px;
}

#table_board {
  width: 100%;
  border-radius: 15px;
  border-spacing: 0px;
  overflow: hidden;
  font-size: 21px;
  color: #8e8071;
}

#table_board th {
  background-color: #b1a599;
  color: white;
  height: 25px;
  font-size: 24px;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
  font-weight: 400;
  padding: 10px;
  padding-left: 15px;
}

#table_board tr td:nth-child(2), #table_board tfoot tr td {
  text-align: left;
  padding-left: 10px;
}

#table_board tbody td {
  padding: 10px;
  text-align: center;
  background-color: white;
  border-left: 1px solid gray;
  border-bottom: 1px solid gray;
}

#table_board tbody td:first-child {
  border-left: 0px;
}

#table_board tfoot tr td {
  /*background-color: #b1a599;*/
  background-color: #efe8e2;
  color: white;
  height: 50px;
  padding-left: 40px;
}

#table_board tfoot a {
  color: black;
}

#table_board tfoot a:hover {
  color: #0681ce;
}

}

/* List */
#table_board.list tbody a {
  color: #8e8071;
}

#table_board.list tbody a:link {
  color: #8e8071;
}

#table_board.list tbody a:visited {
  color: #8e8071;
}

#table_board.list tbody a:hover {
  color: #0681ce;
}

#table_board.list tbody a:active {
  color: #8e8071;
}

#table_board.list tbody tr:hover * {
  color: #0681ce !important;
}

/*  WriteFrom  */
#table_board.writeForm input[type=text], #table_board.writeForm textarea,
  #table_board.reply textarea {
  width: 90%;
  height: 100%;
  float: left;
  /* border: 0px; */
  padding-left: 5px;
  font-size: 1em;
  font-family: 'Hanna', sans-serif;
  color: black;
  -webkit-text-stroke: 1px rgba(142, 128, 113, 0.3);
}

#table_board.writeForm tfoot input[type=submit], #table_board.writeForm input[type=button],
  #table_board.reply input[type=button] {
  text-align: center;
  font-size: 1em;
  font-family: 'Hanna', sans-serif;
  width: 100px;
  background-color: black;
  height: 35px;
  color: white;
}

/*  Read  */
#table_board.read tbody tr td:nth-child(2) {
  color: black;
}

/* Reply */
#table_board.reply {
  background-color: white;
  width: 100%;
  /* border : 1px solid #EFE8E2; */
  margin-bottom: 20px;
}

#table_header {
  width: 100%;
  height: 25px;
  background-color: /* #B1A599; */#EFE8E2;
  color: black;
  text-align: center;
  font-size: 18px;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
  font-weight: 400;
  padding: 10px;
  padding-left: 15px;
}
#table_contents{
  padding: 25px;
}

#table_board.reply th {
  background-color: #efe8e2;
  border-top: 4px solid #ebc85e;
  color: #8e8071;
  padding: 30px;
  border-bottom: 1px solid gray;
}

#table_board.reply textarea {
  float: none;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  border: 1px solid gray;
}

#table_board.reply input[type=button] {
  background-color: #b1a599;
  margin-bottom: 15px;
  font-size: 20px;
}

#table_board.reply tbody div:first-child {
  float: left;
  width: 90%;
}

#table_board.reply tbody div:nth-child(2) {
  width: 10%;
  font-size: 12px;
  float: left;
}

#table_board.reply tbody span {
  font-size: 14px;
}
  </style>

    </head>
    <body>

    <div class="container">
    <div id="board">
  <table id="table_board" class="list">
    <colgroup>
      <col width="150">
      <col width="500">
      <col width="250">
      <col width="500">
      <col width="150">
    </colgroup>
    <thead>
      <tr>
        <th>번호</th>
        <td>${id}</td>
      </tr>
      <tr>
        <th>작성자</th>
        <td>${author_id}</td>
      </tr>
      <tr>
        <th>날짜</th>
        <td>${date}</td>
      </tr>
      <tr>
        <th>제목</th>
          <td>${title}</td>
      </tr>
    </thead>
    <tbody>     
        <tr>
          <th>내용</th>
          <td>${description}</td>
        </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5">
          <a href="/home${path_herf}/update/${id}">수정</a>
        </td>
      </tr>
      <form action="/home${path_herf}/delete" method="post">
      <tr>
        <td colspan="5">
      <input type="hidden" name="id" value="${id}">
      <input type="submit" value="삭제"></input>
        </td>
      </tr>
      </form>
      <tr>
        <td colspan="5">
      <a href = "/home${path_herf}">목록</a>
        </td>
      </tr>
    </tfoot>
  </table>
</div>

      

    </body>
    </html>`;
  },
  updateview:function(id , title , description , path_herf){
    return `<!doctype html>
    <html>
    <head>
    <title>board update</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.js"></script>
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

html{    background:url(http://thekitemap.com/images/feedback-img.jpg) no-repeat;
  background-size: cover;
  height:100%;
}

#feedback-page{
  text-align:center;
}

#form-main{
  width:100%;
  float:left;
  padding-top:0px;
}

#form-div {
  background-color:rgba(72,72,72,0.4);
  padding-left:35px;
  padding-right:35px;
  padding-top:35px;
  padding-bottom:50px;
  width: 450px;
  float: left;
  left: 50%;
  position: absolute;
  margin-top:30px;
  margin-left: -260px;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
}

.feedback-input {
  color:#3c3c3c;
  font-family: Helvetica, Arial, sans-serif;
  font-weight:500;
  font-size: 18px;
  border-radius: 0;
  line-height: 22px;
  background-color: #fbfbfb;
  padding: 13px 13px 13px 54px;
  margin-bottom: 10px;
  width:100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  border: 3px solid rgba(0,0,0,0);
}

.feedback-input:focus{
  background: #fff;
  box-shadow: 0;
  border: 3px solid #3498db;
  color: #3498db;
  outline: none;
  padding: 13px 13px 13px 54px;
}

.focused{
  color:#30aed6;
  border:#30aed6 solid 3px;
}

/* Icons ---------------------------------- */
#name{
  background-image: url(http://rexkirby.com/kirbyandson/images/name.svg);
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

#name:focus{
  background-image: url(http://rexkirby.com/kirbyandson/images/name.svg);
  background-size: 30px 30px;
  background-position: 8px 5px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

#email{
  background-image: url(http://rexkirby.com/kirbyandson/images/email.svg);
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

#email:focus{
  background-image: url(http://rexkirby.com/kirbyandson/images/email.svg);
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

#comment{
  background-image: url(http://rexkirby.com/kirbyandson/images/comment.svg);
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

textarea {
    width: 100%;
    height: 150px;
    line-height: 150%;
    resize:vertical;
}

input:hover, textarea:hover,
input:focus, textarea:focus {
  background-color:white;
}

#button-blue{
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  float:left;
  width: 100%;
  border: #fbfbfb solid 4px;
  cursor:pointer;
  background-color: #3498db;
  color:white;
  font-size:24px;
  padding-top:22px;
  padding-bottom:22px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  margin-top:-4px;
  font-weight:700;
}

#button-blue:hover{
  background-color: rgba(0,0,0,0);
  color: #0493bd;
}
  
.submit:hover {
  color: #3498db;
}
  
.ease {
  width: 0px;
  height: 74px;
  background-color: #fbfbfb;
  -webkit-transition: .3s ease;
  -moz-transition: .3s ease;
  -o-transition: .3s ease;
  -ms-transition: .3s ease;
  transition: .3s ease;
}

b2{
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  float:left;
  width: 100%;
  cursor:pointer;
  color:white;
  font-size:30px;
  padding-top:22px;
  padding-bottom:22px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  margin-top:-4px;
  font-weight:700;
}

.submit:hover .ease{
  width:100%;
  background-color:white;
}

@media only screen and (max-width: 580px) {
  #form-div{
    left: 3%;
    margin-right: 3%;
    width: 88%;
    margin-left: 0;
    padding-left: 3%;
    padding-right: 3%;
  }
}
  </style>

    </head>
    <body>

    <div id="form-main">
  <div id="form-div">
    <form class="form" action="/home${path_herf}/update_process" method="post" id="form1">
      <input type="hidden" name="id" value="${id}">

      <p>
        <b2>게시글 수정</b2>
      </p>
      <p class="name">
        <input name="title" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="제목" value=${title}/>
      </p>
      
      <p class="text">
        <textarea name="description" class="validate[required,length[6,300]] feedback-input" id="comment">${description}</textarea>
      </p>
      
      
      <div class="submit">
        <input type="submit" value="등록하기" id="button-blue"/>
        <div class="ease"></div>
      </div>
    </form>
  </div>

    </body>
    </html>
    `;
  },
  majordeny:function(Major , Major_board ){
    return `<!DOCTYPE html>
         <html>
         <head>
      <meta charset="utf-8" />
      <title>Openmajor</title>
      <script type="text/Javascript">
            alert('본인의 전공 게시판으로 가세요.');
            window.location.href="/home/${Major}/${Major_board}";
      </script>
         </head>
         <body>
         </body>
         </html>`;
  },
  updatedeny:function(Major , Major_board, updateId){
    return `<!DOCTYPE html>
         <html>
         <head>
      <meta charset="utf-8" />
      <title>Openmajor</title>
      <script type="text/Javascript">
            alert('게시글 수정 권한이 없습니다.');
            window.location.href="/home/${Major}/${Major_board}/view/${updateId}";
      </script>
         </head>
         <body>
         </body>
         </html>`;
  },
  deletedeny:function(Major , Major_board, deleteId){
    return `<!DOCTYPE html>
         <html>
         <head>
      <meta charset="utf-8" />
      <title>Openmajor</title>
      <script type="text/Javascript">
            alert('게시글 삭제 권한이 없습니다.');
            window.location.href="/home/${Major}/${Major_board}/view/${deleteId}";
      </script>
         </head>
         <body>
         </body>
         </html>`;
  }
}