<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cartapdf extends Model
{
    use HasFactory;
    protected $fillable = ['contenido', 'fecha_generacion'];
    public function solicitudes()
    {
        return $this->hasMany(SolicitudCarta::class);
    }
}
