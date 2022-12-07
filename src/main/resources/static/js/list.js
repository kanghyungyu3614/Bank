alert( 'list')


let page = 1;



blist(1)


function blist( re ) {
    alert( 'list12')
$.ajax({
     url: "/blist",
     type: "post",
     data: { "page" : page},
     success : function( re ){
           alert('dddd')
           console.log ( re )

          let html = ' <tr> <th>번호</th><th>제목 </th> <th>날짜</th> <th> 조회수 </th> </tr>'

          re.forEach((m) => {
             html +=
                '<tr><td>'+m.bno+'</td><td>'+m.btitle+'</td><td>'+m.bdate+'</td><td>'+m.bview+'</td></tr>'
               })

             document.querySelector('.blist').innerHTML = html;


       	let pagehtml = '';

       				//  이전 버튼  // 만일 현재페이지가 첫페이지이면 이전페이지 불가
       				if( re <= 1 ) { pagehtml += '<button onclick="blist( '+(re)+')">이전</button>'; }
       				else { pagehtml += '<button onclick="blist( '+(re-1)+')">이전</button>'; }

       				// 페이지번호 버튼 [ 시작버튼 ~ 마지막버튼 ]
       				for( let re = re.startbtn ; page<= re.endbtn ; page++ ){
       					pagehtml += '<button type="button" onclick="blist('+re+')">'+re+'</button>'
       				}
       				// 3. 다음 버튼 // 만일 현재페이지가 마지막페이지이면 다음페이지 불가
       				if( re >= boards.totalpage ){ pagehtml += '<button onclick="blist( '+(re)+')">다음</button>'; }
       				else{ pagehtml += '<button onclick="blist( '+(re+1)+')">다음</button>'; }

       			document.querySelector('.page').innerHTML = pagehtml;

   }

  })
}

function bdetail() {

   $.ajax({





   })





}

