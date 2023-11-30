<?php

namespace App\Http\Controllers;

use App\Models\Empresa;
use App\Http\Requests\StoreEmpresaRequest;
use App\Http\Requests\UpdateEmpresaRequest;
use App\Http\Resources\EmpresaCollection;
use App\Filters\EmpresaFilter;
use App\Http\Resources\EmpresaResource;
use Illuminate\Http\Request;

class EmpresaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new EmpresaFilter();
        $queryItems = $filter->transform($request);
        $includeConvocatorias = $request->query('includeConvocatorias');
        $empresas = Empresa::where($queryItems);
        if($includeConvocatorias){
            $empresas = $empresas->with('convocatorias');
        }
        return new EmpresaCollection($empresas->paginate()->appends($request->query()));
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
    public function store(StoreEmpresaRequest $request)
    {
        return new EmpresaResource(Empresa::create($request->all())) ;
    }

    /**
     * Display the specified resource.
     */
    public function show(Empresa $empresa)
    {
        $includeConvocatorias = request()->query('includeConvocatorias');
        if ($includeConvocatorias) {
            return new EmpresaResource($empresa->loadMissing('convocatorias'));
            # code...
        }
        return new EmpresaResource($empresa);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Empresa $empresa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEmpresaRequest $request, Empresa $empresa)
    {
        $empresa->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Empresa $empresa)
    {
        $empresa->delete();
        return response()->json(['message' => 'Empresa eliminada exitosamente']);
    }
}
