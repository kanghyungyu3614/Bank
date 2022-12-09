alert( 'list')


let page = 1;


blist(1)

function blist( page ) {
$.ajax({
     url: "/blist",
     type: "post",
     data: { "page" : page},
     success : function( bboard ){

          let html = ' <tr> <th>번호</th><th>제목 </th> <th>날짜</th> <th> 조회수 </th> </tr>'

          bboard.forEach((m) => {
             html +=
                '<tr><td>'+m.bno+'</td><td onclick=bdetail('+m.bno+')>'+m.btitle+'</td><td>'+m.bdate+'</td><td>'+m.bview+'</td></tr>'
               })

             document.querySelector('.blist').innerHTML = html;


       	let pagehtml = '';

       				//  이전 버튼  // 만일 현재페이지가 첫페이지이면 이전페이지 불가
       				if( page <= 1 ) { pagehtml += '<button onclick="blist( '+(page)+')">이전</button>'; }
       				else { pagehtml += '<button onclick="blist( '+(page-1)+')">이전</button>'; }

       				// 페이지번호 버튼 [ 시작버튼 ~ 마지막버튼 ]
       				for( let page = bboard[0].startbtn ; page<= bboard[0].endbtn ; page++ ){
       					pagehtml += '<button type="button" onclick="blist('+page+')">'+page+'</button>'
       				}


       				// 3. 다음 버튼 // 만일 현재페이지가 마지막페이지이면 다음페이지 불가
       				if( page >= bboard.totalpage ){ pagehtml += '<button onclick="blist( '+(page)+')">다음</button>'; }
       				else{ pagehtml += '<button onclick="blist( '+(page+1)+')">다음</button>'; }

       			document.querySelector('.page').innerHTML = pagehtml;

   }

  })
}

function bdetail ( bno ){
	$.ajax({
		url : "/detail" ,
		data : { "bno" : bno },
		success : function( re ){
			location.href = "/bdlist"
		}
	})
}

