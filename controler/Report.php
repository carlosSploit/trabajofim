<?php

include_once ("../module/bd/BDreporte.php");


//----------------------------------------------------
if(isset($_GET['Action'])){
    $action=$_GET['Action'];
    switch ($action) {
        case "list":
                $objdesde = $_GET['desde'];
                $objhasta = $_GET['hasta'];
                echo json_encode(code($objdesde,$objhasta));
            break;
        default:
            break;
    }    
}

//------------ METODOS ---------------
function listar($var) {
    $bdoj = new ReportDAO();
    return $bdoj->listar($var);
}

function code($desde,$hasta) {
    
    return '<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>

            <body>
                <style>
                    table,
                    th,
                    td {
                        border: 1px solid black;
                        width: 70%;
                    }

                    td {
                        text-align: center;
                    }

                    table {
                        margin-left: auto;
                        margin-right: auto
                    }

                    th {
                        background-color: #546e7a;
                        color: aliceblue;
                    }
                </style>
                <section>
                    <center>
                        <div style="justify-content: center;align-items: center;display: grid;grid-template-columns: auto">
                            <div style="width: 100%;">
                                <img src="../view/resorces/logo.png" style="width: 400px; height: 60px;">
                            </div>
                        </div>
                    </center>
                    <div>
                        <center>
                            <div
                                style="width: 100%;justify-content: left;align-items: center;display: grid;grid-template-columns: 230px 100px;padding-left: 100px;">
                                <h3>Monto total de ventas : '.MontoT($desde, $hasta).'</h3>
                            </div>
                        </center>
                    </div>
                    <div>
                        <center>
                            <h3>Reporte general de ventas</h3>
                            <table>
                                <tr>
                                    <th>Año</th>
                                    <th>Mes</th>
                                    <th>Cantidad</th>
                                    <th>Ganacia</th>
                                </tr>
                                '.  listed1($desde, $hasta).'
                            </table>
                        </center>
                    </div>
                    <div style="display: grid;grid-template-columns: auto auto;">
                        <div>
                            <center>
                                <h3>Reporte de los productos segun las unidades</h3>
                            </center>
                            <table>
                                <tr>
                                    <th>Productos</th>
                                    <th>Cantidad</th>
                                </tr>
                                '.  listed2($desde, $hasta).'
                            </table>
                        </div>
                        <div>
                            <center>
                                <h3>Reporte de los productos segun las ganancias:</h3>
                            </center>
                            <table>
                                <tr>
                                    <th>Productos</th>
                                    <th>Ganancias</th>
                                </tr>
                                '.listed3($desde, $hasta).'
                            </table>
                        </div>
                    </div>
                </section>
            </body>

            </html>';
}

function MontoT($desde,$hasta) {
    $objtip = 1;
    $objdesde = $desde;
    $objhasta = $hasta;
    $MontoTo = 0 ;
    $obj = array("tip"=>$objtip,'desde'=>$objdesde,'hasta'=>$objhasta);
    $list1 = listar($obj);
    foreach ($list1 as $value) {
        $MontoTo = $MontoTo + $value['monto'];
    }
    return $MontoTo;
}

function listed1($desde,$hasta) {
    $objtip = 1;
    $objdesde = $desde;
    $objhasta = $hasta;
    $obj = array("tip"=>$objtip,'desde'=>$objdesde,'hasta'=>$objhasta);
    $list1 = listar($obj);
    $conte = '';
    foreach ($list1 as $value) {
        $conte = $conte. '<tr>
                <td>'.$value['ANO'].'</td>
                <td>'.$value['mes'].'</td>
                <td>'.$value['canti'].'</td>
                <td>'.$value['monto'].'</td>
            </tr>';
    }
    return $conte;
}

function listed2($desde,$hasta) {
    $objtip = 2;
    $objdesde = $desde;
    $objhasta = $hasta;
    $obj = array("tip"=>$objtip,'desde'=>$objdesde,'hasta'=>$objhasta);
    $list1 = listar($obj);
    $conte = '';
    foreach ($list1 as $value) {
        $conte = $conte. '<tr>
                <td>'.$value['Nombre'].'</td>
                <td>'.$value['canti'].'</td>
            </tr>';
    }
    return $conte;
}

function listed3($desde,$hasta) {
    $objtip = 3;
    $objdesde = $desde;
    $objhasta = $hasta;
    $obj = array("tip"=>$objtip,'desde'=>$objdesde,'hasta'=>$objhasta);
    $list1 = listar($obj);
    $conte = '';
    foreach ($list1 as $value) {
        $conte = $conte. '<tr>
                <td>'.$value['Nombre'].'</td>
                <td>'.$value['monto'].'</td>
            </tr>';
    }
    return $conte;
}


