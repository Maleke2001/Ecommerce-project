import { asyncWrapper } from '../middleware/asyncHandler.js';
import Order from '../models/Order.js';
import { HTTP_STATUS } from '../constants/apiConstants.js';
import { sendOrderConfirmation } from '../services/emailService.js';

export const createOrder = asyncWrapper(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, totalPrice } = req.body;

    if (!orderItems || orderItems.length === 0) {
        res.status(HTTP_STATUS.BAD_REQUEST);
        throw new Error('No order items');
    }

    const order = await Order.create({
        user: req.user._id,
        orderItems,
        shippingAddress,
        paymentMethod,
        totalPrice,
        isPaid: false
    });

    // Send order confirmation email
    await sendOrderConfirmation(order, req.user.email);

    res.status(HTTP_STATUS.CREATED).json(order);
});

export const updateOrderToPaid = asyncWrapper(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        res.status(HTTP_STATUS.NOT_FOUND);
        throw new Error('Order not found');
    }

    // Simple payment confirmation
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
        id: Date.now().toString(),
        status: 'completed',
        update_time: new Date().toISOString(),
        payment_method: order.paymentMethod
    };

    const updatedOrder = await order.save();
    res.status(HTTP_STATUS.OK).json(updatedOrder);
});

export const getOrderById = asyncWrapper(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    
    if (!order) {
        res.status(HTTP_STATUS.NOT_FOUND);
        throw new Error('Order not found');
    }
    res.json(order);
});

export const getMyOrders = asyncWrapper(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
});

export const getOrders = asyncWrapper(async (req, res) => {
    const orders = await Order.find({}).populate('user', 'id name');
    res.json(orders);
});

export const updateOrderToDelivered = asyncWrapper(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        res.status(HTTP_STATUS.NOT_FOUND);
        throw new Error('Order not found');
    }

    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
});