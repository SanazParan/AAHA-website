
//function initViz() {
 // var containerDiv = document.getElementById("pie"),
//  url = "https://public.tableau.com/views/AAHAWebProject-Vizstory1and2/Story1-WhatsHappening?:embed=y&:display_count=yes&:origin=viz_share_link"
//  var viz = new tableau.Viz(pie, url);
//}

//initViz();

function initializeViz() {
    var placeholderDiv = document.getElementById("pie");
    var url = "https://public.tableau.com/views/AAHAWebProject-Vizstory1and2/Story1-WhatsHappening?:embed=y&:display_count=yes&:origin=viz_share_link";
    var options = {
      width: placeholderDiv.offsetWidth,
      height: placeholderDiv.offsetHeight,
      hideTabs: true,
      hideToolbar: true,
      onFirstInteractive: function () {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
      }
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
  }   

  initializeViz();



  <div class='tableauPlaceholder' id='viz1571500007895' style='position: relative'><noscript><a href='#'>
      <img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;AA&#47;AAHAWebProject-Vizstory1and2&#47;Story1-WhatsHappening&#47;1_rss.png' style='border: none' /></a>
  </noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> 
  <param name='site_root' value='' /><param name='name' value='AAHAWebProject-Vizstory1and2&#47;Story1-WhatsHappening' /><param name='tabs' value='yes' />
  <param name='toolbar' value='yes' />
  <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;AA&#47;AAHAWebProject-Vizstory1and2&#47;Story1-WhatsHappening&#47;1.png' /> 
  <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' />
  <param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                
  <script type='text/javascript'>                    
  var divElement = document.getElementById('viz1571500007895');                    
  var vizElement = divElement.getElementsByTagName('object')[0];                    
  vizElement.style.width='1000px';vizElement.style.height='850px';                    
  var scriptElement = document.createElement('script');                    
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                   
  vizElement.parentNode.insertBefore(scriptElement, vizElement);                
  </script>