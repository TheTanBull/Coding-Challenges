// Code by Jeff "Tan" Bullock 
// @TheTanBull

function convertHTML(str) {
    var map = {
        '"': '&quot;',
        "'": '&apos;',
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'

      };
    
    return str.replace(/["'&<>]/g, function(k) { return map[k]; });
  }
  
  convertHTML("Dolce & Gabbana");