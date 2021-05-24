<?php

use App\Http\Controllers\PersonalInformationUserController;
use App\Http\Controllers\UsersController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [UsersController::class, 'login']);

Route::group(['middleware' => ['cors']],function(){
    Route::post('register', [UsersController::class, 'register']);
});
Route::Resource('personalInformation', PersonalInformationUserController::class)->except(['create', 'edit']);
Route::post('getPersonalInformation',[PersonalInformationUserController::class,'getPersonalDataByUserId']);
