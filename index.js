const express = require('express');
const app = express();

// Dummy data representing orders for an e-commerce store
const dummyOrders = [
    {
        "order_number": "1234",
        "tracking_updates": [
            {
                "carrier": "China Post",
                "status": "Shipped",
                "location": "Shanghai, China",
                "timestamp": "2023-07-29T09:15:00"
            },
            {
                "carrier": "China Post",
                "status": "In Transit",
                "location": "Hong Kong",
                "timestamp": "2023-07-30T14:30:00"
            },
            {
                "carrier": "China Post",
                "status": "Out for Delivery",
                "location": "Los Angeles, USA",
                "timestamp": "2023-08-02T08:45:00"
            },
            {
                "carrier": "China Post",
                "status": "Delivered",
                "location": "New York, USA",
                "timestamp": "2023-08-03T13:10:00"
            }
        ]
    },
    {
        "order_number": "5678",
        "tracking_updates": [
            {
                "carrier": "DHL",
                "status": "Shipped",
                "location": "Berlin, Germany",
                "timestamp": "2023-07-28T11:30:00"
            },
            {
                "carrier": "DHL",
                "status": "In Transit",
                "location": "Paris, France",
                "timestamp": "2023-07-29T16:45:00"
            },
            {
                "carrier": "DHL",
                "status": "Out for Delivery",
                "location": "Madrid, Spain",
                "timestamp": "2023-07-31T09:20:00"
            },
            {
                "carrier": "DHL",
                "status": "Delivered",
                "location": "Lisbon, Portugal",
                "timestamp": "2023-08-01T14:05:00"
            }
        ]
    }
    // Add more orders with tracking updates here
]

app.get('/orders', (req, res) => {
    res.json(dummyOrders);
});

app.get('/orders/:id', (req, res) => {
    const orderId = req.params.id;
    const order = dummyOrders.find(order => order.order_number === orderId);

    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});