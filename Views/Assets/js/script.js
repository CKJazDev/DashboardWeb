document.addEventListener("DOMContentLoaded", function() {
    // Recuperar las cantidades y precios desde localStorage
    const precios = [20.00, 30.00, 40.00, 50.00];
    let totalProductos = 0;
    let totalPagado = 0;
    let cantidadProductos = [];
    let totalPagadoPorProducto = [];

    for (let i = 1; i <= 4; i++) {
        const cantidad = parseInt(localStorage.getItem('product_' + i + '_quantity')) || 0;
        totalProductos += cantidad;
        totalPagado += cantidad * precios[i - 1];
        cantidadProductos.push(cantidad);
        totalPagadoPorProducto.push(cantidad * precios[i - 1]);
    }

    // Agregar el total general de productos a las cantidades
    cantidadProductos.push(totalProductos);
    // Agregar el total general de pago a los pagos por producto
    totalPagadoPorProducto.push(totalPagado);

    // Crear la gráfica para la cantidad de productos
    const data1 = [{
        x: ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Total General'],
        y: cantidadProductos,
        type: 'bar'
    }];

    const layout1 = {
        title: 'Cantidad de Productos Comprados',
        xaxis: {
            title: 'Producto'
        },
        yaxis: {
            title: 'Cantidad'
        }
    };

    Plotly.newPlot('chart1', data1, layout1);

    // Crear la gráfica para el total pagado por producto
    const data2 = [{
        x: ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Total General'],
        y: totalPagadoPorProducto,
        type: 'bar'
    }];

    const layout2 = {
        title: 'Total Pagado por Producto',
        xaxis: {
            title: 'Producto'
        },
        yaxis: {
            title: 'Total Pagado ($)'
        }
    };

    Plotly.newPlot('chart2', data2, layout2);
    
});
