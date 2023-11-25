<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Empresa extends Model
{
    use HasFactory;
    protected $fillable =[
        "razon_social",
        "direccion",
        "ubicacion",
        "email",
        "ruc",
        "telefono",
    ]
    ;
    /**
     * Get all of the comments for the Empresa
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function convocatorias(): HasMany
    {
        return $this->hasMany(Convocatorias::class);
    }
}
