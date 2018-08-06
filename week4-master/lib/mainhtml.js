module.exports={
  html:function (mainlist){
    return `<!doctype html>
    <html>
    <head>
    <title>OpenMajor Welcome!</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="/home">Open Major</a></h1>
    ${mainlist}
    </body>
    </html>`;
  },
  list:function (result){
    var mainlist=''
    var i = 0;
    while(i < result.length){
      mainlist += `
      <h1><a href="/home/${result[i].nickname}">${result[i].fullname}</a></h1>
      `;
      i = i + 1;
    }
    return mainlist;
  },
  Major:function (Major){
    return `<!doctype html>
    <html>
    <head>
    <title>OpenMajor ${Major}</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1><a href="/home/${Major}/issue">${Major} main issue</a></h1>
    <h1><a href="/home/${Major}/professor">${Major} Professor</a></h1>
    <h1><a href="/home/${Major}/board">${Major} board</a></h1>
    </body>
    </html>`;
  }
}