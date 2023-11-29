<?php

use App\Http\Controllers\AlumnoController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ConvocatoriasController;
use App\Http\Controllers\EmpresaController;
use App\Http\Controllers\EspecialidadController;
use App\Http\Controllers\SolicitudCartaController;
use App\Http\Controllers\PlanPracticasController;
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
Route::apiResource('solicitudcartas', SolicitudCartaController::class);
Route::apiResource('empresas', EmpresaController::class);
Route::apiResource('especialidades', EspecialidadController::class);


Route::apiResource('convocatorias', ConvocatoriasController::class);


Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers'], function(){


    Route::post('convocatorias/bulk', ['uses'=>'ConvocatoriasController@bulkStore']);
});

Route::apiResource('planpracticas',PlanPracticasController::class);


/// LOGIN NO BORRAR
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('logout', [AuthController::class, 'logout']);
});



