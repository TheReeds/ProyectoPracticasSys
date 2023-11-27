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
        return Convocatorias::create($request->all());
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
    public function show(Convocatorias $convocatorias)
    {
        return new ConvocatoriaResource($convocatorias);
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
