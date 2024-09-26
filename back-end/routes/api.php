<?php

use App\Http\Controllers\BookingController;
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

Route::middleware(['auth:sanctum'])->group(function ()
{
    Route::get("/get-bookings", [BookingController::class, "index"]);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

// Route::get('/menu', [MenuController::class, 'index']);

Route::middleware(['auth:sanctum', 'role:user'])->group(function ()
{
    Route::post("/register-book", [BookingController::class, "store"]);
});

Route::middleware(['auth:sanctum', 'role:admin'])->group(function ()
{
    Route::post("/accept-booking/{id}", [BookingController::class, "accept"]);
    Route::post("/reject-booking/{id}", [BookingController::class, "reject"]);
});