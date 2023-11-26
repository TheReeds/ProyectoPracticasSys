<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanPracticas extends Model
{
    use HasFactory;
    protected $fillable = ["fecha_inicio_plan","fecha_fin_plan","horas_planificadas","horas_semanales_planificadas","modalidad","turno","nombre_apellido_jefe","email_jefe","wahtsapp_jefe","tiempo_informe"];
}
