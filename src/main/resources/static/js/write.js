alert( 'cc')

/* 썸머노트 실행 */
$(document).ready(function() {
  $('#summernote').summernote( {

		plasceholder : '내용 입력 해주세요' ,
		maxHeight : null ,
		minHeight : 300,
		lang: 'ko-KR' // default: 'en-US'
		callbacks: {
        			onImageUpload : function(files){
        				sendFile(files[0],this);
        			}
        		}
	});
});

function sendFile(file  ){
		var data = new FormData();
		data.append("file", file);

		console.log(file);

$.ajax({
			data : data,
			type : "POST",
			url : "SummerNoteImageFile",
			contentType : false,
			processData : false,
			success : function(data){
				console.log(data);
				console.log(editor);
				$(editor).summernote("insertImage",data.url);
			}
		});
}

function bwrite() {

  let form = document.querySelector('form') 	// 1. form 태그 호출
  console.log( form )

  let formdata = new FormData( form )	// 2. 객체화된 form 정보 호출
  	 console.log( formdata )		// [ form안에 입력받은 데이터 input 모두 가져오기 ]

       $.ajax({
  	    url : "/bank/setboard",
  	   	data : formdata ,
  		type : 'POST' , // http메소드 [ get(첨부파일x) vs post ]
  		contentType : false ,
  		processData : false , // string : 기본값 vs   전송시 사용되는 타입
  		success : function( re ){
  			if( re === 'true'){
  				alert('글등록');
  				location.href="list.jsp"
  			}
  			else{ alert('글등록실패') }
  		}
  	})

}
