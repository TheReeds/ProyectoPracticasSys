<?php

namespace App\Http\Controllers;

use App\Models\Especialidad;
use App\Http\Requests\StoreEspecialidadRequest;
use App\Http\Requests\UpdateEspecialidadRequest;
use Illuminate\Http\Request;

class EspecialidadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
 // Método para mostrar el formulario de creación
 public function index()
 {
     $especialidades = Especialidad::all();
     return response()->json($especialidades);
 }

 // Obtener una especialidad por ID
 public function show($id)
 {
     $especialidad = Especialidad::findOrFail($id);
     return response()->json($especialidad);
 }

 // Crear una nueva especialidad
 public function store(Request $request)
 {
     $request->validate([
         'name' => 'required',
         // ... otras reglas de validación ...
     ]);

     $especialidad = Especialidad::create($request->all());
     return response()->json($especialidad, 201);
 }

 // Actualizar una especialidad por ID
 public function update(Request $request, $id)
 {
     $request->validate([
         'name' => 'required',
         // ... otras reglas de validación ...
     ]);

     $especialidad = Especialidad::findOrFail($id);
     $especialidad->update($request->all());

     return response()->json($especialidad, 200);
 }

 // Eliminar una especialidad por ID
 public function destroy($id)
 {
     $especialidad = Especialidad::findOrFail($id);
     $especialidad->delete();

     return response()->json(null, 204);
 }



}
