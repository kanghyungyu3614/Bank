alert( 'cc')
/*

$('#summernote').summernote({
		height: 300,
		minHeight: null,
		maxHeight: null,
		focus: true,
		lang: "ko-KR",
		//callbacks: {
		//	onImageUpload : function(files){
		//		sendFile(files[0],this);
		//	}
	//	}

	});
*/


/*function sendFile(file ){
		var data = new FormData();
		data.append("file", file);

		console.log(file);

$.ajax({    data : data,
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
}*/

function bwrite() {
   alert('cc')
  let ss = document.querySelector( '.bbord' )
  console.log( ss )

  let formdata = new FormData( ss )
  	 console.log( formdata )		// [ form안에 입력받은 데이터 input 모두 가져오기 ]

       $.ajax({
  	    url: "/bwrtie",
  	   	data: formdata ,
  		type : 'post' , // http메소드 [ get(첨부파일x) vs post ]
  		contentType : false ,
  		processData : false , // string : 기본값 vs   전송시 사용되는 타입
  		success : function( re ){
  		   alert('dd')
  			if( re == true){
  				alert('글등록');
  				location.href= "/board"
  			}
  			else{ alert('글등록실패') }
  		}
  	})

}
