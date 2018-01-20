var data = [
    {
        id: 0,
        title: "CIS,M.S", 
        start_date: "08/20/2017", 
        end_date: "09/30/2019",
        value: 100,
        term: "GVSU",
        completion_percentage: 100,
        color: "#770051",
      },
    {
        id: 4,
        title: "Business Intelligence Intern", 
        start_date: "08/20/2017", 
        end_date: "09/30/2019",
        value: 100,
        term: "Family Futures",
        completion_percentage: 100,
        color: "#05f20c",
    },
    {
      id: 1,
      title: "Senior Business Intelligence Supervisor", 
      start_date: "08/01/2013", 
      end_date: "09/30/2016",
      value: 100,
      term: "Eisai Inc.",
      completion_percentage: 100,
      color: "#770051",
    },
    {
      id: 2,
      title: "CRM Supervisor", 
      start_date: "4/01/2010", 
      end_date: "07/30/2013",
      value: 100,
      term: "Boehringer-ingelheim Inc",
      completion_percentage: 100,
      color: "#05f20c",
    },
    {
      id: 3,
      title: "CoE Business Intelligence Consultant", 
      start_date: "6/30/2007", 
      end_date: "3/15/2010",
      value:100,
      term: "IMS Health",
      completion_percentage: 100,
      color: "#914ae1",
    }
  ];
  
  // data = [];
  
  var cycles = [
    {
      id: 1,
      name: "Cycle 1", 
      start_date: "01/01/2017", 
      end_date: "02/28/2017",
    },
    {
      id: 2,
      name: "Cycle 2", 
      start_date: "05/01/2017", 
      end_date: "06/30/2017",
    },
    {
      id: 3,
      name: "Cycle 3", 
      start_date: "07/01/2017", 
      end_date: "10/30/2017",
    },
    {
      id: 3,
      name: "Cycle 4", 
      start_date: "10/01/2017", 
      end_date: "12/30/2017",
    }
  ]
  
  var config = {
    data: data, // Your actuall data
    element: "#Chart", // The element for rendering the chart
    box_padding: 10, // Padding for the blocks
     metrics: {type: "overall", years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016, 2017,2018,2019]}, // Type of gantt
    // metrics: {type: "sprint", year: 2017, cycles: cycles}, // Type of gantt
    //metrics: {type: "yearly", year: [2016, 2017, 2018]}, // Type of gantt
    // metrics: {type: "monthly", month: 'March 2017'}, // For Monthly Data
    // metrics: {type: "quarterly", months: ['January 2017','February 2017','March 2017', 'April 2017', 'May 2017', 'June 2017']}, // For quarterly or half yearly data
    onClick: function(data) {
      console.log(data); // Onclick of each node
    },
    onEmptyButtonClick: function() {
      console.log("Empty Clicked");
    },
    onAreaClick: function(location) {
      console.log("Clicked On" + location);
    }
  }
  ganttChart(config);