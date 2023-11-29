<?php

namespace App\Http\Controllers;

use App\Models\Convocatorias;
use App\Http\Requests\StoreConvocatoriasRequest;
use App\Http\Requests\UpdateConvocatoriasRequest;
use App\Http\Resources\ConvocatoriaCollection;
use App\Filters\ConvocatoriaFilter;
use App\Http\Requests\BulkStoreConvocatoriaRequest;
use App\Http\Resources\ConvocatoriaResource;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;

class ConvocatoriasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new ConvocatoriaFilter();
        $queryItems = $filter->transform($request);
        if (count($queryItems) == 0) {
            return new ConvocatoriaCollection(Convocatorias::paginate());

            # code...
        }
        else {
            $convocatoria = Convocatorias::where($queryItems)->paginate();
            return new ConvocatoriaCollection($convocatoria->appends($request->query()));
        }

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required',
            'descripcion' => 'required',
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date',
            'empresa_id' => 'required|exists:empresas,id',
            'imagen' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Validación para la imagen
        ]);

        $convocatoria = new Convocatorias([
            'titulo' => $request->input('titulo'),
            'descripcion' => $request->input('descripcion'),
            'fecha_inicio' => $request->input('fecha_inicio'),
            'fecha_fin' => $request->input('fecha_fin'),
            'empresa_id' => $request->input('empresa_id'),
        ]);

        if ($request->hasFile('imagen')) {
            $imagenPath = $request->file('imagen')->store('public/convocatorias');
            $convocatoria->imagen = Storage::url($imagenPath);
        }

        $convocatoria->save();

        return response()->json(['message' => 'Convocatoria creada con éxito', 'convocatoria' => $convocatoria], 201);
    }

    public function bulkStore(BulkStoreConvocatoriaRequest $request){
        $bulk = collect($request->all())->map(function($arr,$key){
            return Arr::except($arr,['empresaid','fechainicio','fechafin']);
        });
        Convocatorias::insert($bulk->toArray());

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $convocatoria = Convocatorias::find($id);

        if (!$convocatoria) {
            return response()->json(['message' => 'Convocatoria no encontrada'], 404);
        }

        return response()->json(['convocatoria' => $convocatoria], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Convocatorias $convocatorias)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateConvocatoriasRequest $request, Convocatorias $convocatorias)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $convocatoria = Convocatorias::findOrFail($id);
        $convocatoria->delete();

        return response()->json(['message' => 'Convocatoria eliminada con éxito'], 204);
    }

}
