function buildMetadata(sample) {
  /* data route */
  console.log(sample);

  // get sample
  var url = `/metadata/${sample}`;

  // select panel
  var panel = d3.select('#sample-metadata');

  // clear it
  panel.html('');

  // append new tags for each key value
  d3.json(url).then(function (data) {
    Object.entries(data).forEach(([key, value]) => {
      panel.append('h6').text(`${key}: ${value}`)
    })
  });
};

function buildCharts(sample) {


  //console.log(sample);

  //start out with pie chart
  var url = `/samples/${sample}`;
  d3.json(url).then(function (response) {

    //console.log(response);

    var data = response;

    let trace = [{
      values: data.sample_values.slice(0, 10),
      labels: data.otu_ids.slice(0, 10),
      hovertext: data.otu_labels.slice(0, 10),
      type: 'pie',
    }]

    let layout = {
      title: {
        text: 'Pie Chart'
      },
      showlegend: true
    }


    Plotly.newPlot("pie", trace, layout);

    //start on bubble chart

    var trace1 = {
      x: data.otu_ids,
      y: data.sample_values,
      text: data.otu_labels,
      mode: 'markers',
      marker: {
        color: data.otu_ids,
        size: data.sample_values
      }
    };

    var data = [trace1];

    var layout2 = {
      title: 'Bubble Chart Hover Text',
      showlegend: false,
      height: 600,
      width: 600
    };

    Plotly.newPlot('bubble', data, layout2);


  })
};

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDatasetyearstory1");

  // Use the list of sample names to populate the select options
  d3.json("/census_income_to_rent_dataset/years").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

function initViz() {
 var containerDiv = document.getElementById("pie");
  url = "https://public.tableau.com/views/AAHAWebProject-Vizstory1and2/Story1-WhatsHappening?:embed=y&:display_count=yes&:origin=viz_share_link";
  
 var options = {
    width: 1000,//containerDiv.offsetWidth,
    height: 852,//containerDiv.offsetHeight,
    hideTabs: true,
    hideToolbar: true,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    }
  };
  viz = new tableau.Viz(pie, url,options);
}

initViz();

function selectSingleValue() {
  workbook.getActiveSheet().selectMarksAsync(
    "Income Groups",
    "Low income",
    tableau.SelectionUpdateType.REPLACE);
}

function filterSingleValue() {
  activeSheet.applyFilterAsync(
    "Income Groups",
    "Higher income",
    tableau.FilterUpdateType.REPLACE);
} 
// Initialize the dashboard
init();
