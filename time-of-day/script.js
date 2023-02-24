
async function drawBarChart() {

    // load data
    const dataset = await d3.json("dow_hour_summary_tod.json");
    console.table(dataset[0])

}

drawBarChart()