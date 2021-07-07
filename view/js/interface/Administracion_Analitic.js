
var urlbase = "http://localhost/PhpProjec/";

fetch(urlbase + "api/ApiManager.php?ob=Analic&A=list"
    + "&id=3")
    .then(response => response.json())
    .catch(Error => console.log(Error))
    .then(data => {
        let names = [];
        let valor = [];
        var content = "";
        var cont = 0;
        data.forEach(Iten => {
            cont = cont + 1;
            names.push(Iten.Nombre);
            valor.push(Iten.monto);
            content = content + '<div class="row">' +
                '<div class="col">' +
                '<font style="color:' + colorget(cont) + ';">●</font> Prod: ' + Iten.Nombre + ' -> $' + Iten.monto + ' -  Uni' + Iten.canti + ' '
            '</div>' +
                '</div>';
        });
        document.getElementById("ContentProGana").innerHTML = content;
        var ctx = document.getElementById('myChart3');
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: valor,
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: names,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ]
                }],
                labels: names,
            },
            options: {
                legend: {
                    display: false,
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        });
    }).catch(Error => console.log(Error));

fetch(urlbase + "api/ApiManager.php?ob=Analic&A=list"
    + "&id=2")
    .then(response => response.json())
    .catch(Error => console.log(Error))
    .then(data => {
        let names = [];
        let valor = [];
        var content = "";
        var cont = 0;
        data.forEach(Iten => {
            names.push(Iten.Nombre);
            valor.push(Iten.canti);
            cont = cont + 1;
            content = content + '<div class="row">' +
                '<div class="col">' +
                '<font style="color:' + colorget(cont) + ';">●</font> Prod: ' + Iten.Nombre + ' -> $' + Iten.monto + ' - ' + Iten.canti + ' Uni' +
                '</div>' +
                '</div>';
        });
        document.getElementById("ContentProCom").innerHTML = content;
        var ctx = document.getElementById('myChart');
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: valor,
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: names,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ]
                }],
                labels: names,
            },
            options: {
                legend: {
                    display: false,
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        });
    }).catch(Error => console.log(Error));

fetch(urlbase + "api/ApiManager.php?ob=Analic&A=list"
    + "&id=1")
    .then(response => response.json())
    .catch(Error => console.log(Error))
    .then(data => {
        let names = [];
        let valor = [];
        var content = "";
        data.forEach(Iten => {
            names.push(Iten.dia);
            valor.push(Iten.monto);
            content = content + '<div class="row">' +
                '<div class="col">' +
                '⚪ Fecha : ' + Iten.FechaVenta + ' Dia ' + Iten.dia + ' : $' + Iten.monto + ' - ' + Iten.canti + ' Uni' +
                '</div>' +
                '</div>';
        });
        document.getElementById("ContVentReal").innerHTML = content;
        var ctx = document.getElementById('myChart2');
        var myDoughnutChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    data: valor,
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        'Proyecto'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ]
                }],
                labels: names
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }]
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }

        });
    }).catch(Error => console.log(Error));


function colorget(idCOLR) {
    var color = '';
    switch (idCOLR) {
        case 1: color = '#FF6384'; break;
        case 2: color = 'rgba(54, 162, 235, 1)'; break;
        case 3: color = 'rgba(255, 206, 86, 1)'; break;
        default:
            break;
    }
    return color;
}


