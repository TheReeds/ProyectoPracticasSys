<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Especialidad extends Model
{
    use HasFactory;
    protected $fillable =['nombre', 'area', 'descripcion'];

    public function empresas(){
        return $this->belongsToMany(Empresa::class);
    }

}
