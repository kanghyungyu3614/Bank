alert( 'list')

blist()


function blist() {

  $.ajax({
     url: '/blist',
     type:'get' ,
     success: function(re) {
           console.log ( re )
          let html = ' <tr> <th>번호</th><th>제목 </th> <th>날짜</th> <th> 조회수 </th> </tr>'

          re.forEach((m) => {
             html +=
                '<tr><td>'+m.bno+'</td><td onclick="bdetail()">'+m.btitle+'</td><td>'+m.bdate+'</td><td>'+m.bview+'</td></tr>'
               })

             document.querySelector(".blist").innerHTML = html;
             }
  })

}

function bdetail() {

   $.ajax({
      url:'',
      type:'get',




   })





}

