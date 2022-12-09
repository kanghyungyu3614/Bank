

detail()

function detail() {

   $.ajax({
       url:"/detail",
       type : "get",
       data : {"bno" : bno},
       success : function( re) {

       document.querySelector('#bnumber').innerHTML = re.bno;
       document.querySelector('#btitle').innerHTML = re.btitle;
       document.querySelector('#bcontent').innerHTML = re.bcontent;

 }

})

}
