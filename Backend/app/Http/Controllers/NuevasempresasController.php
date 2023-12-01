<?php

namespace App\Http\Controllers;

use App\Models\nuevasempresas;
use App\Http\Controllers\Controller;
use App\Models\Alumno;
use Illuminate\Http\Request;

class NuevasempresasController extends Controller
{
    public function index()
    {
        $nuevasEmpresas = NuevasEmpresas::all();
        return response()->json($nuevasEmpresas);
    }

    public function show($id)
    {
        $nuevaEmpresa = NuevasEmpresas::find($id);

        if (!$nuevaEmpresa) {
            return response()->json(['error' => 'Empresa no encontrada'], 404);
        }

        return response()->json($nuevaEmpresa);
    }

    public function store(Request $request)
    {
        // Obtener un ID aleatorio de la tabla alumnos
        $randomAlumnoId = Alumno::inRandomOrder()->value('id');

        // Asignar el ID aleatorio como alumno_id
        $data = $request->all();
        $data['alumno_id'] = $randomAlumnoId;

        // Crear la nueva empresa
        $nuevaEmpresa = NuevasEmpresas::create($data);

        return response()->json($nuevaEmpresa, 201);
    }

    public function update(Request $request, $id)
    {
        $nuevaEmpresa = NuevasEmpresas::find($id);

        if (!$nuevaEmpresa) {
            return response()->json(['error' => 'Empresa no encontrada'], 404);
        }

        $nuevaEmpresa->update($request->all());

        return response()->json($nuevaEmpresa);
    }

    public function destroy($id)
    {
        $nuevaEmpresa = NuevasEmpresas::find($id);

        if (!$nuevaEmpresa) {
            return response()->json(['error' => 'Empresa no encontrada'], 404);
        }

        $nuevaEmpresa->delete();

        return response()->json(['message' => 'Empresa eliminada con éxito']);
    }
}
