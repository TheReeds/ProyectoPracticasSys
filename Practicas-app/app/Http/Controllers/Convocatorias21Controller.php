<?php

namespace App\Http\Controllers;

use App\Models\Convocatorias21;
use Illuminate\Http\Request;

/**
 * Class Convocatorias21Controller
 * @package App\Http\Controllers
 */
class Convocatorias21Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $convocatorias21s = Convocatorias21::paginate(10);

        return view('convocatorias21.index', compact('convocatorias21s'))
            ->with('i', (request()->input('page', 1) - 1) * $convocatorias21s->perPage());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $convocatorias21 = new Convocatorias21();
        return view('convocatorias21.create', compact('convocatorias21'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(Convocatorias21::$rules);

        $convocatorias21 = Convocatorias21::create($request->all());

        return redirect()->route('convocatorias21.index')
            ->with('success', 'Convocatorias21 created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $convocatorias21 = Convocatorias21::find($id);

        return view('convocatorias21.show', compact('convocatorias21'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $convocatorias21 = Convocatorias21::find($id);

        return view('convocatorias21.edit', compact('convocatorias21'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  Convocatorias21 $convocatorias21
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Convocatorias21 $convocatorias21)
    {
        request()->validate(Convocatorias21::$rules);

        $convocatorias21->update($request->all());

        return redirect()->route('convocatorias21s.index')
            ->with('success', 'Convocatorias21 updated successfully');
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $convocatorias21 = Convocatorias21::find($id)->delete();

        return redirect()->route('convocatorias21s.index')
            ->with('success', 'Convocatorias21 deleted successfully');
    }
}
