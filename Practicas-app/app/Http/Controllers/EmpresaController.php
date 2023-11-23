<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmpresaController extends Controller{

    public function create(){
        return view('empresas.create');
    }

    public function store(Request $request){
        $request->validate([
            'nombre'=>'requiresd|string',
        ]);
    }
}
