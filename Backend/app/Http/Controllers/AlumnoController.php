<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use App\Http\Requests\StoreAlumnoRequest;
use App\Http\Requests\UpdateAlumnoRequest;
use Illuminate\Http\Request;

class AlumnoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Alumno::all();
    }

    public function show($id)
    {
        return Alumno::findOrFail($id);
    }

    public function store(Request $request)
    {
        return Alumno::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $estudiante = Alumno::findOrFail($id);
        $estudiante->update($request->all());

        return $estudiante;
    }

    public function destroy($id)
    {
        $estudiante = Alumno::findOrFail($id);
        $estudiante->delete();

        return 204;
    }
}
