<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class especialidad extends Model
{
    use HasFactory;

    public function especialidad(){
        return $this->belongsToMany(Especialidad::class);
    }
    public function convocatorias()
    {
        return $this->hasMany(Convocatoria::class);
    }
}
