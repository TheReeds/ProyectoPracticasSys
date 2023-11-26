<?php

namespace App\Http\Controllers;

use App\Models\cartapdf;
use App\Http\Requests\StorecartapdfRequest;
use App\Http\Requests\UpdatecartapdfRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class CartapdfController extends Controller
{
    public function index()
    {
        try {
            $cartasPdf = CartaPdf::all();
            return response()->json($cartasPdf, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error interno del servidor'], 500);
        }
    }

    public function show($id)
    {
        try {
            $cartaPdf = CartaPdf::findOrFail($id);
            return response()->json($cartaPdf, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Carta PDF no encontrada'], 404);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error interno del servidor'], 500);
        }
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'contenido' => 'required|string',
            'fecha_generacion' => 'required|date',
        ]);

        try {
            $cartaPdf = CartaPdf::create($validatedData);
            return response()->json($cartaPdf, 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error interno del servidor'], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'contenido' => 'required|string',
            'fecha_generacion' => 'required|date',
        ]);

        try {
            $cartaPdf = CartaPdf::findOrFail($id);
            $cartaPdf->update($validatedData);
            return response()->json($cartaPdf, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Carta PDF no encontrada'], 404);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error interno del servidor'], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $cartaPdf = CartaPdf::findOrFail($id);
            $cartaPdf->delete();
            return response()->json(['message' => 'Carta PDF eliminada con éxito'], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Carta PDF no encontrada'], 404);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error interno del servidor'], 500);
        }
    }
}
