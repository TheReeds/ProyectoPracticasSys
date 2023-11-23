<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');

});
<<<<<<< HEAD
Auth::routes();

Route::get('/home', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::resource('/convocatorias21', App\Http\Controllers\Convocatorias21Controller::class);
Auth::routes();

Route::get('/home', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::resource('/tablaejemplo', App\Http\Controllers\TablaEjemploController::class);
=======
Route::get('/empresas/create',[EmpresaController::class, 'create'])->name('empresas.create');
Route::post('/empresas',[EmpresaController::class, 'store'])->name('empresas.store');

>>>>>>> 3568d749fa72ee6763ebc8437b32f57e267dd19e
