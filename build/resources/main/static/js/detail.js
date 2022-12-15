

detail()

function detail() {

   $.ajax({
       url:"/bdetail",
       type : "get",
       data : {"bno" : bno},
       success : function( re) {

       document.querySelector('#bnumber').innerHTML = re.bno;
       document.querySelector('#btitle').innerHTML = re.btitle;
       document.querySelector('#bcontent').innerHTML = re.bcontent;

 }

})

}


function del( bno ) {
 	$.ajax({
 		url : "/bdelete", ,
 		data : { "bno" : bno } , // 삭제할 게시물의 식별번호[pk->bno]
 		success : function( re ){
 			if( re === 'true'){
 				alert('글삭제 성공 ');
 				location.href="/blist"
 			}
 			else{ alert('글삭제 실패') }
 		}
 	})
 }




}
