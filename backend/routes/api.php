<?php

use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::get('products', [ProductController::class, 'index']);
Route::post('order/store', [OrderController::class, 'store']);
Route::post('order/pay', [OrderController::class, 'payByStripe']);