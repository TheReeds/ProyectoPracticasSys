<?php

namespace App\Http\Controllers;

use App\Http\Resources\ConvocatoriaResource;
use App\Models\Convocatorias;
use App\Models\empresa;
use App\Models\especialidad;
use Illuminate\Http\Request;

class ConvocatoriaController extends Controller
{
    public function index()
    {
        // Obtener todas las convocatorias
        $convocatorias = Convocatorias::with('empresa', 'especialidad')->get();
        return view('convocatorias.index', compact('convocatorias'));
    }

    public function create()
    {
        $empresas = empresa::all();
        $especialidades = especialidad::all();
        return view('convocatorias.create', compact('empresas', 'especialidades'));
    }

    public function store(Request $request)
    {
        // Validar y almacenar la nueva convocatoria
        $request->validate([
            'titulo' => 'required',
            'descripcion' => 'required',
            'imagen' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Validar el tipo de archivo y el tamaño de la imagen
            'empresa_id' => 'required',
            'especialidad_id' => 'required',
        ]);

        $convocatoria = Convocatorias::create($request->all());

        // Subir la imagen y asociarla a la convocatoria
        $convocatoria->agregarImagen($request->file('imagen'));

        return redirect()->route('convocatorias.index')->with('success', 'Convocatoria creada exitosamente.');
    }

    public function edit(Convocatorias $convocatoria)
    {
        $empresas = Empresa::all();
        $especialidades = Especialidad::all();
        return view('convocatorias.edit', compact('convocatoria', 'empresas', 'especialidades'));
    }

    public function update(Request $request, Convocatorias $convocatoria)
    {
        // Validar y actualizar la convocatoria
        $request->validate([
            'titulo' => 'required',
            'descripcion' => 'required',
            'imagen' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Puedes permitir que la imagen sea opcional al editar
            'fecha_inicio' => 'required',
            'fecha_fin' => 'required',
            'empresa_id' => 'required',
            'especialidad_id' => 'required',
        ]);

        $convocatoria->update($request->all());

        if ($request->hasFile('imagen')) {
            $convocatoria->agregarImagen($request->file('imagen'));
        }

        return redirect()->route('convocatorias.index')->with('success', 'Convocatoria actualizada exitosamente.');
    }
    public function show($id)
    {
        $convocatoria = Convocatorias::with('empresa', 'especialidad', 'imagenes')->find($id);
        return new ConvocatoriaResource($convocatoria);
    }

    public function destroy(Convocatorias $convocatoria)
    {
        // Eliminar la convocatoria y sus imágenes relacionadas
        $convocatoria->imagenes()->delete();
        $convocatoria->delete();

        return redirect()->route('convocatorias.index');
    }
}
