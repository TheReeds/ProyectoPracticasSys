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
        $solicitudesCartas = SolicitudCarta::all();
        return response()->json($solicitudesCartas, 200);
    }

    // Obtener una solicitud de carta por ID
    public function show($id)
    {
        $solicitudCarta = SolicitudCarta::find($id);

        if (!$solicitudCarta) {
            return response()->json(['error' => 'Solicitud de carta no encontrada'], 404);
        }

        return response()->json($solicitudCarta, 200);
    }

    // Crear una nueva solicitud de carta
    public function store(Request $request)
    {
        $request->validate([
            'estudiante_id' => 'required|exists:alumnos,id',
            'estado' => 'required',
            'comentarios' => 'string',
            'cartapdfs_id' => 'required|exists:cartapdfs,id',
            'empresa_id' => 'required|exists:empresas,id',
        ]);

        $solicitudCarta = SolicitudCarta::create($request->all());

        return response()->json($solicitudCarta, 201);
    }

    // Actualizar una solicitud de carta por ID
    public function update(Request $request, $id)
    {
        $solicitudCarta = SolicitudCarta::find($id);

        if (!$solicitudCarta) {
            return response()->json(['error' => 'Solicitud de carta no encontrada'], 404);
        }

        $request->validate([
            'estudiante_id' => 'required|exists:alumnos,id',
            'estado' => 'required',
            'comentarios' => 'string',
            'cartapdfs_id' => 'required|exists:cartapdfs,id',
            'empresa_id' => 'required|exists:empresas,id',
        ]);

        $solicitudCarta->update($request->all());

        return response()->json($solicitudCarta, 200);
    }

    // Eliminar una solicitud de carta por ID
    public function destroy($id)
    {
        $solicitudCarta = SolicitudCarta::find($id);

        if (!$solicitudCarta) {
            return response()->json(['error' => 'Solicitud de carta no encontrada'], 404);
        }

        $solicitudCarta->delete();

        return response()->json(['message' => 'Solicitud de carta eliminada correctamente'], 200);
    }
}
