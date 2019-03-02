function randomScalingFactor() {
    return Math.abs((Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100));
};
window.chartColors = {
    Red: 'rgb(255, 99, 132)',
    Blue: 'rgb(54, 162, 235)',
    Yellow: 'rgb(255, 206, 86)',
    Green: 'rgb(75, 192, 192)',
    Purple: 'rgb(153, 102, 255)',
    Orange: 'rgb(255, 159, 64)'
};
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var config_line = {
    type: 'bar',
    data: {
        labels: ['Feb 24', 'Mar 3', 'Mar 10', 'Mar 17', 'Mar 24', 'Mar 31', 'Apr 7'],
        datasets: [{
            label: 'Total Value of Your Cooked Meals',
            backgroundColor: chartColors.Blue,
            borderColor: chartColors.Blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            fill: false,
            type: "line",
        },
        {
            label: 'Total Value of Same Meals Retail',
            fill: '-1',
            backgroundColor: chartColors.Yellow,
            borderColor: chartColors.Red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            type:"line",

        },
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Total Spent'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Week'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Money'
                }
            }]
        }
    }
};

var config_bar = {
    type: 'bar',
    data: {
        labels: ['Feb 24', 'Mar 3', 'Mar 10', 'Mar 17', 'Mar 24', 'Mar 31', 'Apr 7'],
        datasets: [
        {
            label: 'Accumulated Savings',
            fill: false,
            backgroundColor: chartColors.Green,
            borderColor: chartColors.Green,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],

        },
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Total Saved'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Week'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Money'
                }
            }]
        }
    }
};

function init_graphs() {
    var ctx = document.getElementById('linecanvas').getContext('2d');
    var ctx_bar = document.getElementById('barcanvas').getContext('2d');
    window.myLine = new Chart(ctx, config_line);
    window.myBar = new Chart(ctx_bar,config_bar);

    renderShopping();
};
window.onload = init_graphs();

function send(){
    document.querySelector(".alert").textContent = "Email has been sent!";
}
$(document).ready(function(){
    $('button').click(function(){
        $('.alert').show()
    }) 
});
/*
//reference code for how to do certain things to the graph
document.getElementById('randomizeData').addEventListener('click', function () {
    config.data.datasets.forEach(function (dataset) {
        dataset.data = dataset.data.map(function () {
            return randomScalingFactor();
        });
    });
    window.myLine.update();
});
var colorNames = Object.keys(window.chartColors);
document.getElementById('addDataset').addEventListener('click', function () {
    var colorName = colorNames[config.data.datasets.length % colorNames.length];
    var newColor = window.chartColors[colorName];
    var newDataset = {
        label: 'Dataset ' + config.data.datasets.length,
        backgroundColor: newColor,
        borderColor: newColor,
        data: [],
        fill: false
    };
    for (var index = 0; index < config.data.labels.length; ++index) {
        newDataset.data.push(randomScalingFactor());
    }
    config.data.datasets.push(newDataset);
    window.myLine.update();
});
document.getElementById('addData').addEventListener('click', function () {
    if (config.data.datasets.length > 0) {
        var month = MONTHS[config.data.labels.length % MONTHS.length];
        config.data.labels.push(month);
        config.data.datasets.forEach(function (dataset) {
            dataset.data.push(randomScalingFactor());
        });
        window.myLine.update();
    }
});
document.getElementById('removeDataset').addEventListener('click', function () {
    config.data.datasets.splice(0, 1);
    window.myLine.update();
});
document.getElementById('removeData').addEventListener('click', function () {
    config.data.labels.splice(-1, 1); // remove the label first
    config.data.datasets.forEach(function (dataset) {
        dataset.data.pop();
    });
    window.myLine.update();
});*/