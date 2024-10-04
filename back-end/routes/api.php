<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\MenuItemsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/menu', [MenuItemsController::class , 'index']);

Route::middleware(['auth:sanctum'])->group(function ()
{
    Route::get('/bookings', [BookingController::class, "index"]);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

// Route::get('/menu', [MenuController::class, 'index']);

Route::middleware(['auth:sanctum', 'role:user'])->group(function ()
{
    Route::post('/bookings/store', [BookingController::class, "store"]);
});

Route::middleware(['auth:sanctum', 'role:admin'])->group(function ()
{
    Route::put('/bookings/confirm/{id}', [BookingController::class, "update"]);

    Route::post('/menu/store', [MenuItemsController::class , 'store']);
    Route::put('/menu/update/{id}', [MenuItemsController::class , 'update']);
    Route::delete('/menu/destroy/${id}', [MenuItemsController::class, 'destroy']);
});