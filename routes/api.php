<?php

use App\Http\Controllers\Api\V1\Auth\LoginController;
use App\Http\Controllers\Api\V1\Auth\LogoutController;
use App\Http\Controllers\Api\V1\Auth\RegisterController;
use App\Http\Controllers\Api\V1\Auth\UserController;
use App\Http\Controllers\Api\V1\Category\AllCategoriesController;
use App\Http\Controllers\Api\V1\Category\CreateCategoryController;
use App\Http\Controllers\Api\V1\Category\FilterCategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1/auth/')->group(function () {
    Route::post('register', RegisterController::class);
    Route::post('login', LoginController::class);
    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::get('user', UserController::class);
        Route::get('logout', LogoutController::class);
    });
});

Route::prefix('v1/category')->group(function () {
    Route::get('all', AllCategoriesController::class);
    Route::get('show/{category}', FilterCategoryController::class);
    Route::post('create', CreateCategoryController::class);
});
