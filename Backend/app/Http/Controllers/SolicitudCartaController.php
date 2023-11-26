<?php

namespace App\Http\Controllers;
use App\Models\SolicitudCarta;
use App\Http\Requests\StoreSolicitudCartaRequest;
use App\Http\Requests\UpdateSolicitudCartaRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class SolicitudCartaController extends Controller
{
    public function index()
    {
        return SolicitudCarta::all();
    }

    public function show($id)
    {
        return SolicitudCarta::findOrFail($id);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'estudiante' => 'required|string',
            'estado' => 'string', // Ajusta esto según tus necesidades
            'cartapdfs_id' => 'required|integer', // Ajusta esto según tus necesidades
        ], [
            'estudiante.required' => 'El campo estudiante es obligatorio.',
            'cartapdfs_id.required' => 'El campo cartapdfs id es obligatorio.',
        ]);

        return SolicitudCarta::create($data);
    }

    public function update(Request $request, $id)
    {
        $solicitudCarta = SolicitudCarta::findOrFail($id);
        $solicitudCarta->update($request->all());
        return $solicitudCarta;
    }

    public function destroy($id)
    {
        $solicitudCarta = SolicitudCarta::findOrFail($id);
        $solicitudCarta->delete();
        return 204;
    }
}
