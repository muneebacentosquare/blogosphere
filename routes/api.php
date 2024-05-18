<?php

use App\Http\Controllers\Api\V1\Auth\LoginController;
use App\Http\Controllers\Api\V1\Auth\LogoutController;
use App\Http\Controllers\Api\V1\Auth\RegisterController;
use App\Http\Controllers\Api\V1\Auth\UserController;
use App\Http\Controllers\Api\V1\Category\AllCategoriesController;
use App\Http\Controllers\Api\V1\Category\CreateCategoryController;
use App\Http\Controllers\Api\V1\Category\DeleteCategoryController;
use App\Http\Controllers\Api\V1\Category\FilterCategoryController;
use App\Http\Controllers\Api\V1\Category\UpdateCategoryController;
use App\Http\Controllers\Api\V1\Comment\CreateCommentController;
use App\Http\Controllers\Api\V1\Comment\DeleteCommentController;
use App\Http\Controllers\Api\V1\Like\CreateLikeController;
use App\Http\Controllers\Api\V1\Like\DeleteLikeController;
use App\Http\Controllers\Api\V1\Post\AllPostsController;
use App\Http\Controllers\Api\V1\Post\CreatePostController;
use App\Http\Controllers\Api\V1\Post\DeletePostController;
use App\Http\Controllers\Api\V1\Post\FilterPostController;
use App\Http\Controllers\Api\V1\Post\UpdatePostController;
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

Route::prefix('v1/category/')->group(function () {
    Route::get('all', AllCategoriesController::class);
    Route::post('create', CreateCategoryController::class);
    Route::get('show/{category:slug}', FilterCategoryController::class);
    Route::post('update/{category:slug}', UpdateCategoryController::class);
    Route::get('delete/{category:slug}', DeleteCategoryController::class);
});

Route::prefix('v1/post/')->group(function () {
    Route::get('all', AllPostsController::class);
    Route::post('create', CreatePostController::class);
    Route::get('show/{post}', FilterPostController::class);
    Route::post('update/{post}', UpdatePostController::class);
    Route::get('delete/{post}', DeletePostController::class);
});

Route::prefix('v1/comment/')->group(function () {
    Route::post('create', CreateCommentController::class);
    Route::get('delete/{comment}', DeleteCommentController::class);
});

Route::prefix('v1/like')->group(function () {
    Route::post('create', CreateLikeController::class);
    Route::get('delete/{like}', DeleteLikeController::class);
});
