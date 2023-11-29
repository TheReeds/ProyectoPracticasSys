<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SolicitudCarta extends Model
{
    use HasFactory;

    protected $fillable = ['estudiante', 'estado', 'cartapdfs_id'];

    protected $factory = SolicitudCartaFactory::class;

    public function empresa()
{
    return $this->belongsTo(Empresa::class, 'empresa_id');
}
}
