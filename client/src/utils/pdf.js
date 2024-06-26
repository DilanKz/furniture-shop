import jsPDF from 'jspdf';

export const generatePDF = (order) => {
    const doc = new jsPDF();

    doc.text('Order Details', 10, 10);
    doc.text(`Order ID: ${order.orderId}`, 10, 20);
    // doc.text(`Order Date: ${new Date(order.createdAt).toLocaleDateString()}`, 10, 30);
    doc.text(`Customer Email: ${order.email}`, 10, 40);
    doc.text(`Customer Name: ${order.name}`, 10, 50);

    doc.text('Items:', 10, 60);
    order.items.forEach((item, index) => {
        doc.text(`- SKU: ${item.sku}, Count: ${item.count}, Price: ${item.price}`, 10, 70 + (index * 10));
    });

    doc.text(`Total: ${order.total}`, 10, 100);

    doc.save(`order-${order.orderId}.pdf`);
};
