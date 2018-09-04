
(function ($) {
    $('#menuToggle').click(function() {
        var pageWrapper = $('#page-wrapper');
        if (pageWrapper.hasClass('menuActive')) {
            $(pageWrapper).removeClass('menuActive');
        } else {
            $(pageWrapper).addClass('menuActive');
        }
    });
})($);

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: 'Light Value Trending',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        'hover': {
            'animationDuration': 0
        },
        'animation': {
            'duration': 1,
            'onComplete': function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                
                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';

                this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function (bar, index) {
                        var data = dataset.data[index];                            
                        ctx.fillText(data + '%', bar._model.x, bar._model.y - 5);
                    });
                });
            }
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                fontColor: '#000',
                fontSize: 16
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
