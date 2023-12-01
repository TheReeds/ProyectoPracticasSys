<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class nuevasempresas extends Model
{
    use HasFactory;
    protected $fillable = [
        'alumno_id',
        'razon_social',
        'direccion',
        'email',
        'ruc',
        'ubicacion',
        'telefono',
    ];

    // Relación con el modelo Alumno
    public function alumno()
    {
        return $this->belongsTo(Alumno::class);
    }
}
