<?php

namespace App\Http\Controllers\Api;

use Stripe\Stripe;
use ErrorException;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    //
    public function payByStripe(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_KEY'));
 
        try {

            $checkout_session = Session::create([
                'line_items' => [[
                    'price_data' => [
                        'currency' => 'usd',
                        'product_data' => [
                            'name' => 'Vue Shop Orders'
                        ],
                        'unit_amount' => $this->calculateOrderTotal($request->cartItems),
                    ],
                    'quantity' => 1,
                ]],
                'mode' => 'payment',
                'success_url' => $request->success_url
            ]);

            return response()->json(['url' => $checkout_session->url]);

        } catch (ErrorException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    /**
     * Calculate the orders total amount
     */
    public function calculateTotal($price, $qty) 
    {
        $total = $price * $qty;
        return $total;
    }


    /**
     * Calculate the amount for stripe
     */
    public function calculateOrderTotal($items)
    {
        $total = 0;
        //calculate the total amount of cart items
        foreach ($items as $item) {
            $total += $this->calculateTotal($item['product_price'], $item['quantity']);
        }
        return $total * 100;
    }
}
