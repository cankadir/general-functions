let data = [
    {'year': 2000, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 72.31259800000001}, {'year': 2000, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 72.00882220095693}, {'year': 2000, 'wb': 'East River & Harlem River', 'tempF': 72.00683883333332}, {'year': 2000, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 73.3532021}, {'year': 2000, 'wb': 'Lower Bay', 'tempF': 70.89328800000001}, {'year': 2000, 'wb': 'Lower Hudson River', 'tempF': 72.12609}, {'year': 2000, 'wb': 'Upper New York Bay', 'tempF': 71.3321525}, {'year': 2001, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 75.74181866666667}, {'year': 2001, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 72.08538285714286}, {'year': 2001, 'wb': 'East River & Harlem River', 'tempF': 72.91714200000001}, {'year': 2001, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 74.02359285714286}, {'year': 2001, 'wb': 'Lower Bay', 'tempF': 73.465172}, {'year': 2001, 'wb': 'Lower Hudson River', 'tempF': 73.970381}, {'year': 2001, 'wb': 'Upper New York Bay', 'tempF': 72.0590677142857}, {'year': 2002, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 76.44760000000002}, {'year': 2002, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 73.55369696969697}, {'year': 2002, 'wb': 'East River & Harlem River', 'tempF': 74.71810454545454}, {'year': 2002, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 76.24807142857144}, {'year': 2002, 'wb': 'Lower Bay', 'tempF': 73.9748}, {'year': 2002, 'wb': 'Lower Hudson River', 'tempF': 75.2835}, {'year': 2002, 'wb': 'Upper New York Bay', 'tempF': 74.02672727272727}, {'year': 2003, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 73.91999999999999}, {'year': 2004, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 73.80325806451613}, {'year': 2004, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 71.22710000000001}, {'year': 2004, 'wb': 'East River & Harlem River', 'tempF': 72.88442424242425}, {'year': 2004, 'wb': 'Hackensack River', 'tempF': 75.33958181818181}, {'year': 2004, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 73.51027777777779}, {'year': 2004, 'wb': 'Lower Bay', 'tempF': 72.70621176470588}, {'year': 2004, 'wb': 'Lower Hudson River', 'tempF': 74.64803636363638}, {'year': 2004, 'wb': 'Lower Raritan River', 'tempF': 72.67183333333334}, {'year': 2004, 'wb': 'Passaic River & Newark Bay', 'tempF': 72.67822857142858}, {'year': 2004, 'wb': 'Upper New York Bay', 'tempF': 72.4121212121212}, {'year': 2005, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 77.32194428152494}, {'year': 2005, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 73.38350000000001}, {'year': 2005, 'wb': 'East River & Harlem River', 'tempF': 74.89350000000002}, {'year': 2005, 'wb': 'Hackensack River', 'tempF': 79.24868181818181}, {'year': 2005, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 76.87489568515883}, {'year': 2005, 'wb': 'Lower Bay', 'tempF': 75.53825}, {'year': 2005, 'wb': 'Lower Hudson River', 'tempF': 76.95157142857144}, {'year': 2005, 'wb': 'Lower Raritan River', 'tempF': 78.4898}, {'year': 2005, 'wb': 'Passaic River & Newark Bay', 'tempF': 78.03457242236024}, {'year': 2005, 'wb': 'Upper New York Bay', 'tempF': 74.57045}, {'year': 2006, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 73.4006129032258}, {'year': 2006, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 71.40056}, {'year': 2006, 'wb': 'East River & Harlem River', 'tempF': 72.11275641025641}, {'year': 2006, 'wb': 'Hackensack River', 'tempF': 76.1213781512605}, {'year': 2006, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 74.31146957279861}, {'year': 2006, 'wb': 'Lower Bay', 'tempF': 71.54905714285715}, {'year': 2006, 'wb': 'Lower Hudson River', 'tempF': 74.47272000000001}, {'year': 2006, 'wb': 'Lower Raritan River', 'tempF': 74.531}, {'year': 2006, 'wb': 'Passaic River & Newark Bay', 'tempF': 73.80259362859363}, {'year': 2006, 'wb': 'Upper New York Bay', 'tempF': 71.63925}, {'year': 2007, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 75.96490689655172}, {'year': 2007, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 71.9947012987013}, {'year': 2007, 'wb': 'East River & Harlem River', 'tempF': 73.59530769230768}, {'year': 2007, 'wb': 'Hackensack River', 'tempF': 75.22325000000001}, {'year': 2007, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 75.35448370288248}, {'year': 2007, 'wb': 'Lower Bay', 'tempF': 72.81928571428571}, {'year': 2007, 'wb': 'Lower Hudson River', 'tempF': 75.24696323529412}, {'year': 2007, 'wb': 'Lower Raritan River', 'tempF': 74.55799999999999}, {'year': 2007, 'wb': 'Passaic River & Newark Bay', 'tempF': 74.68464285714285}, {'year': 2007, 'wb': 'Upper New York Bay', 'tempF': 73.31714545454545}, {'year': 2008, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 74.9797323037323}, {'year': 2008, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 72.72149999999999}, {'year': 2008, 'wb': 'East River & Harlem River', 'tempF': 73.84433333333334}, {'year': 2008, 'wb': 'Hackensack River', 'tempF': 76.92013961038961}, {'year': 2008, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 75.88048}, {'year': 2008, 'wb': 'Lower Bay', 'tempF': 73.18682352941175}, {'year': 2008, 'wb': 'Lower Hudson River', 'tempF': 75.81422419685578}, {'year': 2008, 'wb': 'Lower Raritan River', 'tempF': 76.50450000000001}, {'year': 2008, 'wb': 'Passaic River & Newark Bay', 'tempF': 74.86821333333333}, {'year': 2008, 'wb': 'Upper New York Bay', 'tempF': 73.12655}, {'year': 2009, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 73.76829487179486}, {'year': 2009, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 71.74185714285714}, {'year': 2009, 'wb': 'East River & Harlem River', 'tempF': 72.47823333333332}, {'year': 2009, 'wb': 'Hackensack River', 'tempF': 74.71729278074866}, {'year': 2009, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 74.83727000000002}, {'year': 2009, 'wb': 'Lower Bay', 'tempF': 72.51140928792569}, {'year': 2009, 'wb': 'Lower Hudson River', 'tempF': 74.59461833333333}, {'year': 2009, 'wb': 'Lower Raritan River', 'tempF': 73.862}, {'year': 2009, 'wb': 'Passaic River & Newark Bay', 'tempF': 73.53269142857141}, {'year': 2009, 'wb': 'Upper New York Bay', 'tempF': 72.59346184210526}, {'year': 2010, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 75.64905482625483}, {'year': 2010, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 73.34385714285713}, {'year': 2010, 'wb': 'East River & Harlem River', 'tempF': 73.78390909090909}, {'year': 2010, 'wb': 'Hackensack River', 'tempF': 76.43410695187166}, {'year': 2010, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 75.44802616407983}, {'year': 2010, 'wb': 'Lower Bay', 'tempF': 73.24104838709678}, {'year': 2010, 'wb': 'Lower Hudson River', 'tempF': 75.77462842105264}, {'year': 2010, 'wb': 'Lower Raritan River', 'tempF': 76.70366666666666}, {'year': 2010, 'wb': 'Passaic River & Newark Bay', 'tempF': 75.52147111111111}, {'year': 2010, 'wb': 'Upper New York Bay', 'tempF': 73.58030000000001}, {'year': 2011, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 74.6081141141141}, {'year': 2011, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 72.76685}, {'year': 2011, 'wb': 'East River & Harlem River', 'tempF': 73.12326363636365}, {'year': 2011, 'wb': 'Hackensack River', 'tempF': 76.91771818181819}, {'year': 2011, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 76.15369090909093}, {'year': 2011, 'wb': 'Lower Bay', 'tempF': 72.95522855571848}, {'year': 2011, 'wb': 'Lower Hudson River', 'tempF': 74.98537706043956}, {'year': 2011, 'wb': 'Lower Raritan River', 'tempF': 74.4987619047619}, {'year': 2011, 'wb': 'Passaic River & Newark Bay', 'tempF': 74.8045766590389}, {'year': 2011, 'wb': 'Upper New York Bay', 'tempF': 73.34670909090909}, {'year': 2012, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 76.90584347915276}, {'year': 2012, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 74.88275}, {'year': 2012, 'wb': 'East River & Harlem River', 'tempF': 75.59716666666667}, {'year': 2012, 'wb': 'Hackensack River', 'tempF': 77.92664335664335}, {'year': 2012, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 76.64468847979576}, {'year': 2012, 'wb': 'Lower Bay', 'tempF': 74.23554395161291}, {'year': 2012, 'wb': 'Lower Hudson River', 'tempF': 76.83368141416159}, {'year': 2012, 'wb': 'Lower Raritan River', 'tempF': 75.39133333333334}, {'year': 2012, 'wb': 'Passaic River & Newark Bay', 'tempF': 76.62840384615384}, {'year': 2012, 'wb': 'Upper New York Bay', 'tempF': 75.03597368421053}, {'year': 2013, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 73.52079750733138}, {'year': 2013, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 72.53367105263158}, {'year': 2013, 'wb': 'East River & Harlem River', 'tempF': 72.80244755244755}, {'year': 2013, 'wb': 'Hackensack River', 'tempF': 74.95871428571428}, {'year': 2013, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 74.85897444717445}, {'year': 2013, 'wb': 'Lower Bay', 'tempF': 71.1726361450611}, {'year': 2013, 'wb': 'Lower Hudson River', 'tempF': 74.96949464285714}, {'year': 2013, 'wb': 'Lower Raritan River', 'tempF': 72.66990476190476}, {'year': 2013, 'wb': 'Passaic River & Newark Bay', 'tempF': 73.92057444168734}, {'year': 2013, 'wb': 'Upper New York Bay', 'tempF': 72.08440000000002}, {'year': 2014, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 73.41087463939155}, {'year': 2014, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 72.69495945945945}, {'year': 2014, 'wb': 'East River & Harlem River', 'tempF': 72.476}, {'year': 2014, 'wb': 'Hackensack River', 'tempF': 73.93204278074866}, {'year': 2014, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 74.67682626262626}, {'year': 2014, 'wb': 'Lower Bay', 'tempF': 71.96247981900451}, {'year': 2014, 'wb': 'Lower Hudson River', 'tempF': 73.64504886699507}, {'year': 2014, 'wb': 'Lower Raritan River', 'tempF': 73.241}, {'year': 2014, 'wb': 'Passaic River & Newark Bay', 'tempF': 73.094}, {'year': 2014, 'wb': 'Upper New York Bay', 'tempF': 72.558425}, {'year': 2015, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 75.85340849673202}, {'year': 2015, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 74.30345}, {'year': 2015, 'wb': 'East River & Harlem River', 'tempF': 74.4772857142857}, {'year': 2015, 'wb': 'Hackensack River', 'tempF': 77.31173636363636}, {'year': 2015, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 77.26152757760534}, {'year': 2015, 'wb': 'Lower Bay', 'tempF': 74.59176373626374}, {'year': 2015, 'wb': 'Lower Hudson River', 'tempF': 76.46725142857142}, {'year': 2015, 'wb': 'Lower Raritan River', 'tempF': 77.732}, {'year': 2015, 'wb': 'Passaic River & Newark Bay', 'tempF': 76.34113422459893}, {'year': 2015, 'wb': 'Upper New York Bay', 'tempF': 74.17154545454545}, {'year': 2016, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 76.87533707264959}, {'year': 2016, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 74.2806}, {'year': 2016, 'wb': 'East River & Harlem River', 'tempF': 74.82220000000001}, {'year': 2016, 'wb': 'Hackensack River', 'tempF': 77.8504645550528}, {'year': 2016, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 77.00863636363636}, {'year': 2016, 'wb': 'Lower Bay', 'tempF': 74.90067857142859}, {'year': 2016, 'wb': 'Lower Hudson River', 'tempF': 77.06239809523808}, {'year': 2016, 'wb': 'Lower Raritan River', 'tempF': 77.798}, {'year': 2016, 'wb': 'Passaic River & Newark Bay', 'tempF': 76.95362518740629}, {'year': 2016, 'wb': 'Upper New York Bay', 'tempF': 74.9111}, {'year': 2017, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 74.39343914956012}, {'year': 2017, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 73.16128663793104}, {'year': 2017, 'wb': 'East River & Harlem River', 'tempF': 73.3088181818182}, {'year': 2017, 'wb': 'Hackensack River', 'tempF': 75.23949999999999}, {'year': 2017, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 75.65750000000001}, {'year': 2017, 'wb': 'Lower Bay', 'tempF': 73.53224387096775}, {'year': 2017, 'wb': 'Lower Hudson River', 'tempF': 75.03084755760369}, {'year': 2017, 'wb': 'Lower Raritan River', 'tempF': 75.22666666666666}, {'year': 2017, 'wb': 'Passaic River & Newark Bay', 'tempF': 74.08685406698565}, {'year': 2017, 'wb': 'Upper New York Bay', 'tempF': 73.19825}, {'year': 2018, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 76.14643347826087}, {'year': 2018, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 74.15481249999999}, {'year': 2018, 'wb': 'East River & Harlem River', 'tempF': 75.2418}, {'year': 2018, 'wb': 'Hackensack River', 'tempF': 77.11730769230769}, {'year': 2018, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 78.88198181818181}, {'year': 2018, 'wb': 'Lower Bay', 'tempF': 75.10431139130435}, {'year': 2018, 'wb': 'Lower Hudson River', 'tempF': 77.12539999999998}, {'year': 2018, 'wb': 'Lower Raritan River', 'tempF': 76.46166666666667}, {'year': 2018, 'wb': 'Passaic River & Newark Bay', 'tempF': 75.38947368421054}, {'year': 2018, 'wb': 'Upper New York Bay', 'tempF': 75.124585}, {'year': 2019, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 75.50106008403361}, {'year': 2019, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 73.5191}, {'year': 2019, 'wb': 'East River & Harlem River', 'tempF': 73.31936915584416}, {'year': 2019, 'wb': 'Hackensack River', 'tempF': 76.83411764705883}, {'year': 2019, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 77.27957105340565}, {'year': 2019, 'wb': 'Lower Bay', 'tempF': 74.42811178571428}, {'year': 2019, 'wb': 'Lower Hudson River', 'tempF': 76.00866405201245}, {'year': 2019, 'wb': 'Lower Raritan River', 'tempF': 77.38}, {'year': 2019, 'wb': 'Passaic River & Newark Bay', 'tempF': 75.55964426877472}, {'year': 2019, 'wb': 'Upper New York Bay', 'tempF': 73.676383}, {'year': 2020, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 77.536}, {'year': 2020, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 75.94803571428571}, {'year': 2020, 'wb': 'East River & Harlem River', 'tempF': 75.28283333333334}, {'year': 2020, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 75.38803896103897}, {'year': 2020, 'wb': 'Lower Bay', 'tempF': 74.7379}, {'year': 2020, 'wb': 'Lower Hudson River', 'tempF': 77.69300000000001}, {'year': 2020, 'wb': 'Upper New York Bay', 'tempF': 75.85671428571428}, {'year': 2021, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 74.635}, {'year': 2021, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 74.3699553125}, {'year': 2021, 'wb': 'East River & Harlem River', 'tempF': 74.05828}, {'year': 2021, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 76.28246436046513}, {'year': 2021, 'wb': 'Lower Bay', 'tempF': 73.16341596638657}, {'year': 2021, 'wb': 'Lower Hudson River', 'tempF': 75.83090187500001}, {'year': 2021, 'wb': 'Upper New York Bay', 'tempF': 73.74534090909091}, {'year': 2022, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 76.27952}, {'year': 2022, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 73.8030693548387}, {'year': 2022, 'wb': 'East River & Harlem River', 'tempF': 74.1427}, {'year': 2022, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 77.10629886363637}, {'year': 2022, 'wb': 'Lower Bay', 'tempF': 74.19345709090909}, {'year': 2022, 'wb': 'Lower Hudson River', 'tempF': 75.873275}, {'year': 2022, 'wb': 'Upper New York Bay', 'tempF': 73.9958}, {'year': 2023, 'wb': 'Arthur Kill & Kill van Kull', 'tempF': 76.2853733882353}, {'year': 2023, 'wb': 'Bronx River & Western Long Island Sound', 'tempF': 74.38428305}, {'year': 2023, 'wb': 'East River & Harlem River', 'tempF': 74.92069818181818}, {'year': 2023, 'wb': 'Jamaica Bay & Tributaries', 'tempF': 77.95007885714286}, {'year': 2023, 'wb': 'Lower Bay', 'tempF': 74.56538884615384}, {'year': 2023, 'wb': 'Lower Hudson River', 'tempF': 76.89735300000001}, {'year': 2023, 'wb': 'Upper New York Bay', 'tempF': 74.67822500000001}
];

// This is the class name of the clicked element. I am using it to make sure, on mouse leave things keep on working as expected for the clicked object/group
let clickedState;

// Set the dimensions and margins of the graph
const margin = { top: 20, right: 20, bottom: 30, left: 50 };
let width = 800;
let height = 600;

width = width + margin.left + margin.right;
height = height + margin.top + margin.bottom;

// Select the SVG container
const svg = d3.select(".chart")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

// Group the data by "wb" column
const nestedData = Array.from(d3.group(data, d => d.wb), ([key, values]) => ({ key, values }));

// ---- FUNCTIONS ----
// Function to calculate linear regression
function linearRegression(data) {
    const n = data.length;
    const sumX = d3.sum(data, d => d.year);
    const sumY = d3.sum(data, d => d.tempF);
    const sumXY = d3.sum(data, d => d.year * d.tempF);
    const sumX2 = d3.sum(data, d => d.year * d.year);
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    
    return { slope, intercept };
}

// This is the function that changes colors and text on mouse enter
function swapColor (event, d) {
    let swapClass = event.target.className.baseVal  
    let dataIndex = event.target.getAttribute("data-index");

    let swapGroup = document.getElementById(swapClass).childNodes

    // change circle fill colors to colorScale(d.wb)
    swapGroup.forEach( function (element) {
            element.style.fill = colorScale(swapClass);
            element.style.fillOpacity = 1;
            element.style.zIndex = 4;
        });
    
    // select the path object with same class
    let swapPath = document.querySelector( "."+swapClass );
    swapPath.style.stroke = colorScale(swapClass);
    swapPath.style.strokeWidth = 3;
    swapPath.style.strokeOpacity = 1;
    swapPath.style.zIndex = 5;
    
    // Water Temperature Change in New York and New Jersey
    // get the p element in the .chart div
    let pElement = document.querySelector(".subtitle");
    pElement.innerHTML = `${dataIndex}`;
    pElement.style.color = colorScale(swapClass);
}

// THis is the function that converts everything back to grey and title to NY & NJ
function makeGrey( event ) {
    let swapClass = event.target.className.baseVal
    let swapGroup = document.getElementById(swapClass).childNodes
    document.getElementById(swapClass).style.zIndex = 1;

    if (swapClass !== clickedState) {
        console.log( "making things grey")
        // change circle fill colors to colorScale(d.wb)
        swapGroup.forEach( function (element) {
                element.style.fill = "grey";
                element.style.fillOpacity = 0.3;
                element.style.zIndex = 1;
            });
        
        // select the path object with same class
        let swapPath = document.querySelector("."+swapClass);
        swapPath.style.stroke = "grey";
        swapPath.style.strokeWidth = 3;
        swapPath.style.zIndex = 2;
        swapPath.style.strokeOpacity = .5;

        console.log( clickedState );
        if (!clickedState) {
            let pElement = document.querySelector(".subtitle");
            pElement.innerHTML = "New York and New Jersey";
            pElement.style.color = "grey";
        }else{
            let clickedObj = document.querySelector( `.${clickedState}` );
            let dataIndex = clickedObj.getAttribute("data-index");
            let pElement = document.querySelector(".subtitle");
            pElement.innerHTML = `${dataIndex}`;
            pElement.style.color = colorScale(clickedState);
        }
        

    }
}

// Lock selection on clicks
function lockColor( event, d ) {
    
    let swapClass = event.target.className.baseVal
    document.getElementById(swapClass).style.zIndex = 1;
    clickedState = swapClass;

    // select all circles
    let allCircles = document.querySelectorAll("circle");
    allCircles.forEach( function (element) {
        element.style.fill = "grey";
        element.style.fillOpacity = 0.3;
        element.style.zIndex = 1;
    });

    let allPaths = document.querySelectorAll("path");
    allPaths.forEach( function (element) {
        element.style.stroke = "grey";
        element.style.strokeWidth = 3;
        element.style.zIndex = 2;
        element.style.strokeOpacity = .5;
    });

    swapColor(event,d);

}

function reset(){
    // gel all cirlces
    let allCircles = document.querySelectorAll("circle");
    
    allCircles.forEach( function (element) {
        element.style.fill = "grey";
        element.style.fillOpacity = 0.3;
        element.style.zIndex = 1;
    });

    // select the path object with same class
    let allPaths = document.querySelectorAll("path");
    allPaths.forEach( function (e) {
        e.style.stroke = "grey";
        e.style.strokeWidth = 3;
        e.style.zIndex = 2;
        e.style.strokeOpacity = .5;
    });

    let pElement = document.querySelector(".subtitle");
    pElement.innerHTML = "New York and New Jersey";
    pElement.style.color = "grey";

    clickedState = undefined;
}

// ---- SET UP ----
// Define an ordinal scale for colors, change order of either to change it
let colors = ['#4990CD'];
let wbs = ['Arthur Kill & Kill van Kull','Bronx River & Western Long Island Sound','East River & Harlem River', 'Jamaica Bay & Tributaries','Lower Bay', 'Lower Hudson River', 'Upper New York Bay','Hackensack River', 'Lower Raritan River','Passaic River & Newark Bay']
const colorScale = d3.scaleOrdinal().domain( wbs ).range( colors );

// ---- TICKS and LABELS ----
// Create scales min/max for x and y axes
const min_year = Math.min( ...data.map(d => d.year) );
const max_year = Math.max( ...data.map(d => d.year) );
const min_temp = Math.min( ...data.map(d => d.tempF) );
const max_temp = Math.max( ...data.map(d => d.tempF) );

const xScale = d3.scaleLinear().domain([min_year-1, max_year+1]).range([margin.left, width - margin.right]);
const yScale = d3.scaleLinear().domain([min_temp-0.5,max_temp+0.5]).range([height - margin.bottom, margin.top]);

// Format x and y tick labels. 
const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d")); 
const yAxis = d3.axisLeft(yScale).tickFormat(d => `${d}°F`);

// Add x and y axes
const xAxisG = svg.append("g")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call(xAxis);

const yAxisG = svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(yAxis);

//  Remove Y-axis zeroline
yAxisG.selectAll(".domain").remove();

// Convert tick lines to grids. 
yAxisG.selectAll(".tick")
    .attr('stroke-width',0)
    .append("line")
    .attr("class", "grid-line")
    .attr("x1", 0)
    .attr("x2", width-margin.left-margin.right)
    .attr("y1", 0)
    .attr("y2", 0)
    .attr("stroke", "lightgray")
    .attr("stroke-width", 2)
    .attr("opacity", 0.5);

// assign class name to tick labels to control over css
let yTickLabels = yAxisG.selectAll(".tick text")
yTickLabels
    .attr("x", "2em")
    .attr("dy", "-0.5em")
    .attr("class" , "tick-labels y-tick-labels");

let xTickLabels = xAxisG.selectAll(".tick text")
xTickLabels.attr("class" , "tick-labels x-tick-labels");

// Generates the regression line
const lineGenerator = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.tempF));

// svg watch for click on an empty area
svg.on("click", (event) => {
    console.log(event.target.tagName);
    if ( event.target.tagName === "svg" ) {
        clickedState = undefined;
        reset();
    };
});


// Iterate over the Grouped data to draw the lines and circles
nestedData.forEach(group => {

    let values = group.values
    let keyname = group.key
    keyname = keyname.replace(/\s+/g, '-').replace(/&/g, '').toLowerCase(); // replace spaces with -, remove & signs and make all lower key

    const { slope, intercept } = linearRegression(group.values);
    const xMin = d3.min(values, d => d.year);
    const xMax = d3.max(values, d => d.year);
    const regressionLine = [
        { year: xMin, tempF: slope * xMin + intercept },
        { year: xMax, tempF: slope * xMax + intercept }
    ];

    // regression lines
    svg.append("path")
        .datum(regressionLine)
        .attr("fill", "none")
        .attr("class", keyname)
        .attr("stroke", "grey")
        .attr("stroke-width", 3.5)
        .attr("d", lineGenerator)
        .attr("stroke-opacity", 0.5) 
        .attr("data-index" , group.key ) // this is for writing the title   
            .on("click" , lockColor )     
            .on("mouseenter", swapColor )
            .on("mouseleave", makeGrey );

    // scatter dots
    svg.append("g")
        .attr("id" , keyname )
        .selectAll("circle")
            .data(values)
            .enter()
            .append("circle")
            .attr("class", keyname )
            .attr("cx", d => xScale(d.year))
            .attr("cy", d => yScale(d.tempF))
            .attr("r", 4)
            .attr( "fill-opacity", 0.3 )
            .attr("fill","grey")
            .attr("stroke", "white")
            .attr( "stroke-width", 0.25)
            .attr("data-index" , group.key ) // this is for writing the title
                .on("click" , lockColor )
                .on("mouseenter", swapColor )
                .on("mouseleave", makeGrey )
});