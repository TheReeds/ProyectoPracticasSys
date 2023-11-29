<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SolicitudCarta extends Model
{
    use HasFactory;

    protected $fillable = [
        'estudiante_id',
        'estado',
        'comentarios',
        'cartapdfs_id',
        'empresa_id',
    ];

    protected $factory = SolicitudCartaFactory::class;

    public function alumno()
    {
        return $this->belongsTo(Alumno::class, 'estudiante_id');
    }

    // Relación con el modelo CartaPdf
    public function cartaPdf()
    {
        return $this->belongsTo(CartaPdf::class, 'cartapdfs_id');
    }

    // Relación con el modelo Empresa
    public function empresa()
    {
        return $this->belongsTo(Empresa::class, 'empresa_id');
    }
}
