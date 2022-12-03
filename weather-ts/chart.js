
async function drawLineChart() {

    // load data 
    const dataset = await d3.json("weather_data.json");
    console.table(dataset[0])

    // use accessor functions to obtain relevant points
    const yAccessor = d => d.temperatureMax
    // use d3 to parse date
    const dateParser = d3.timeParse("%Y-%m-%d") 
    const xAccessor = d => dateParser(d.date)
}  

drawLineChart()