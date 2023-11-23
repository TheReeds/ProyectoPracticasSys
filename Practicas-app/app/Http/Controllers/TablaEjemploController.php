<?php

namespace App\Http\Controllers;

use App\Models\TablaEjemplo;
use Illuminate\Http\Request;

/**
 * Class TablaEjemploController
 * @package App\Http\Controllers
 */
class TablaEjemploController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tablaEjemplo = TablaEjemplo::paginate(10);

        return view('tabla-ejemplo.index', compact('tablaEjemplo'))
            ->with('i', (request()->input('page', 1) - 1) * $tablaEjemplo->perPage());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $tablaEjemplo = new TablaEjemplo();
        return view('tabla-ejemplo.create', compact('tablaEjemplo'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(TablaEjemplo::$rules);

        $tablaEjemplo = TablaEjemplo::create($request->all());

        return redirect()->route('tabla-ejemplos.index')
            ->with('success', 'TablaEjemplo created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tablaEjemplo = TablaEjemplo::find($id);

        return view('tabla-ejemplo.show', compact('tablaEjemplo'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $tablaEjemplo = TablaEjemplo::find($id);

        return view('tabla-ejemplo.edit', compact('tablaEjemplo'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  TablaEjemplo $tablaEjemplo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TablaEjemplo $tablaEjemplo)
    {
        request()->validate(TablaEjemplo::$rules);

        $tablaEjemplo->update($request->all());

        return redirect()->route('tabla-ejemplos.index')
            ->with('success', 'TablaEjemplo updated successfully');
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $tablaEjemplo = TablaEjemplo::find($id)->delete();

        return redirect()->route('tabla-ejemplos.index')
            ->with('success', 'TablaEjemplo deleted successfully');
    }
}
