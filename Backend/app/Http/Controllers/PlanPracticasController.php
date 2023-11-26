<?php

namespace App\Http\Controllers;

use App\Models\PlanPracticas;
use App\Http\Requests\StorePlanPracticasRequest;
use App\Http\Requests\UpdatePlanPracticasRequest;
use Illuminate\Http\Request;

class PlanPracticasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return PlanPracticas::all();
    }

    public function show($id)
    {
        return PlanPracticas::findOrFail($id);
    }

    public function store(Request $request)
    {
        return PlanPracticas::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $planpracticas = PlanPracticas::findOrFail($id);
        $planpracticas->update($request->all());

        return $planpracticas;
    }

    public function destroy($id)
    {
        $planpracticas = PlanPracticas::findOrFail($id);
        $planpracticas->delete();

        return 204;
    }
}
