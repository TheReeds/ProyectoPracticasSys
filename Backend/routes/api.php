<?php

use App\Http\Controllers\AlumnoController;
use App\Http\Controllers\ConvocatoriasController;
use App\Http\Controllers\EmpresaController;
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
Route::apiResource('alumnos', AlumnoController::class);
Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers'], function(){
    Route::apiResource('empresas', EmpresaController::class);
    Route::apiResource('convocatorias', ConvocatoriasController::class);
    Route::post('convocatorias/bulk', ['uses'=>'ConvocatoriasController@bulkStore']);
});
