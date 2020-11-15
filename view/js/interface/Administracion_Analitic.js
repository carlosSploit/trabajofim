        
        var ctx = document.getElementById('myChart');
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [10, 20, 30],
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        'Red',
                        'Yellow',
                        'Blue'
                    ],
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
                labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                ],
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

        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Analic&A=list"
            +"&id=2")
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
                let names = [];
                let valor = [];
                data.forEach(Iten => {
                    names.push(Iten.Nombre);
                    valor.push(Iten.canti);
                });

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

        fetch("http://localhost/PhpProjec/api/ApiManager.php?ob=Analic&A=list"
            +"&id=1")
            .then(response => response.json())
            .catch(Error => console.log(Error))
            .then(data => {
                let names = [];
                let valor = [];
                data.forEach(Iten => {
                    names.push(Iten.dia);
                    valor.push(Iten.monto);
                });

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

        
