<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Convocatorias extends Model
{
    use HasFactory;
    protected $fillable =[]
    ;
    /**
     * Get all of the comments for the Empresa
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function convocatorias(): BelongsTo
    {
        return $this->belongsTo(Empresa::class);
    }
}
