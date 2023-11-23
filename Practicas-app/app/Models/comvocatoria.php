<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class comvocatoria extends Model
{
    use HasFactory;

    public function empresa(){
        return $this->belongsToMany(Empresa::class);
    }
}
