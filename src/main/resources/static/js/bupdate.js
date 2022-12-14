


update()
function update(){

$.ajax({
   url : "/bupdate",
   type : "get",
   data : { "bno": bno},
   success : function( re ) { console.log(re)}
})
}

// . 수정 버튼 클릭시 호출 되는 메소드
function upboard(){
      let data = {
          btitle : document.querySelector('.btitle').value ,
          bcontent : document.querySelector('.bcontent').value,
          bfile : document.querySelector('.bfile').value,
          bno : bno
      }

      /* const formData = new FormData();
            formData.append("file", file);
            formData.append("key", new Blob([JSON.stringify(data)] , {type: "application/json"}));*/

      $.ajax({
          url : "/board/upboard",
          data : JSON.stringify(data) ,
          type : "put" ,
          contentType : false,
          processData : false ,
          success : function(re) {
                      if( re == true){
                          alert('글 수정 성공');
                          location.href="/board/view";
                      }
                      else{ alert("글 수정 실패"); }
                  }

      })
  }
