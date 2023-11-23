<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class empresa extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function especialidad(){
        return $this->belongsToMany(Especialidad::class);
    }
    public function comvocatoria(){
        return $this->belongsToMany(Comvocatoria::class);
    }

}
