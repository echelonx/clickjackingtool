// This script is created by Thami @blvck3ch3l0n
function frameIt() {
   var url = document.getElementById("url").value;
   var iframe = document.getElementById("iframe");

   iframe.src = url;

} 

document.addEventListener('DOMContentLoaded', function () {
   document.getElementById('submit-test').addEventListener('click',
       function() {
          frameIt();
       }
   );
});