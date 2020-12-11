
$(function () {

   $("#icon").click(function () {
                         $("#nav").toggle()
                         $("#nav").css({"animation" : "nav"})
                         $("#nav").css({"transform" : "scale(1)"})
 })
   $("#hom").click(function () {
       $("#home").css({"display" : "block"})
       $("#cat").css({"display" : "none"})
    $("#recycle").css({"display" : "none"})
       $("#nav").toggle()
   })

   $("#cate").click(function () {
       $("#home").css({"display" : "none"})
       $("#cat").css({"display" : "block"})
  $("#recycle").css({"display" : "none"})
       $("#nav").toggle()
   })

   $("#bin").click(function () {
       $("#home").css({"display" : "none"})
       $("#cat").css({"display" : "none"})
   $("#recycle").css({"display" : "block"})
       $("#nav").toggle()
   })

   $("#ad").click(function () {
   $("#adform").toggle()
   $("#adform").css({"transform" : "scale(1)"})
   $("#adform").innerHtml("-")
   })

   var p = 1
   var w = 1
   var q = 1
   var s = 1
   var u = 1
   var l = 1

   $("#butt").click(function () {
       var title = $("#title").val()
       var main = $("#main").val()
       var sel = $("#sel").val()
       $("#adform").toggle()
       var all = "<div id = 'all'><i class = 'fas fa-trash' id = 'bim' onclick = 'clic()'></i><h3>" + title + "</h3><br>" + main + "<br><i id = 'foot'>" + sel + "</i>"
       if(main != "" && title != "") {
           var sel = $("#sel").val()



           if(sel == "Personal"){
               $("#homelist").append(all)
               var title = $("#title").val("")
       var main = $("#main").val("")
     document.getElementById("percount").textContent = "(" + p + ")"
       p++

       $("#perlist").append(all)
           }


          else if(sel == "Work"){
               $("#homelist").append(all)
               var title = $("#title").val("")
       var main = $("#main").val("")
     document.getElementById("workcount").textContent = "(" + w + ")"
       w++

       $("#worklist").append(all)
           }



           else if(sel == "Quote"){
               $("#homelist").append(all)
               var title = $("#title").val("")
       var main = $("#main").val("")
     document.getElementById("quotecount").textContent = "(" + q + ")"
       q++

       $("#quotelist").append(all)
           }



           else if(sel == "Study"){
               $("#homelist").append(all)
               var title = $("#title").val("")
       var main = $("#main").val("")
     document.getElementById("studycount").textContent = "(" + s + ")"
       s++

       $("#studylist").append(all)
           }




           else if(sel == "Leisure"){
               $("#homelist").append(all)
               var title = $("#title").val("")
       var main = $("#main").val("")
     document.getElementById("leisurecount").textContent = "(" + l + ")"
       l++

       $("#leislist").append(all)
           }




           else if(sel == "Uncategorised"){
               $("#homelist").append(all)
               var title = $("#title").val("")
       var main = $("#main").val("")
     document.getElementById("uncatcount").textContent = "(" + u + ")"
       u++

       $("#uncatlist").append(all)
           }
       }
   })

   $("#per").click(function () {
   if(document.getElementById("lock").className != "fas fa-lock") {
       $("#cats").toggle()
       $("#ca").toggle()
       $("#back").toggle()
       $("#personal").toggle()
   }
   else{
       var con = confirm("Do you want to unlock your Personal Notes")
   }

   if(con == true) {
       document.getElementById("lock").className = "fas fa-unlock"
   }
   })


   $("#work").click(function () {
       $("#cats").toggle()
       $("#ca").toggle()
       $("#back").toggle()
       $("#works").toggle()
   })


   $("#quote").click(function () {
       $("#cats").toggle()
       $("#ca").toggle()
       $("#back").toggle()
       $("#quotes").toggle()
   })


   $("#study").click(function () {
       $("#cats").toggle()
       $("#ca").toggle()
       $("#back").toggle()
       $("#studys").toggle()
   })


   $("#leisure").click(function () {
       $("#cats").toggle()
       $("#ca").toggle()
       $("#back").toggle()
       $("#leis").toggle()
   })


   $("#uncat").click(function () {
       $("#cats").toggle()
       $("#ca").toggle()
       $("#back").toggle()
       $("#uncategorised").toggle()
   })


   $("#back").click(function () {
       $("#cats").toggle()
       $("#ca").toggle()
       $("#back").toggle()
       $("#personal").css({"display" : "none"})
       $("#works").css({"display" : "none"})
       $("#uncategorised").css({"display" : "none"})
       $("#leis").css({"display" : "none"})
       $("#studys").css({"display" : "none"})
       $("#quotes").css({"display" : "none"})
       $("#personal").css({"display" : "none"})
   })


   $("#bim").click(function () {
       var note = $(this).parent().text()
       $("#recbin").append(note)
       alert("hi")
   })
})
