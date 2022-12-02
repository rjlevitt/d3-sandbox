
async function drawLineChart() {

    // load data 
    const dataset = await d3.json("weather_data.json");
    console.table(dataset[0])
}  

drawLineChart()