<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class TablaEjemplo
 *
 * @property $id
 * @property $titulo
 * @property $descripcion
 * @property $especialidad_id
 * @property $fecha_inicio
 * @property $fecha_fin
 * @property $empresa_id
 * @property $created_at
 * @property $updated_at
 *
 * @property Empresa $empresa
 * @property Especialidad $especialidad
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class TablaEjemplo extends Model
{
    
    static $rules = [
		'titulo' => 'required',
		'descripcion' => 'required',
		'especialidad_id' => 'required',
		'fecha_inicio' => 'required',
		'fecha_fin' => 'required',
		'empresa_id' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['titulo','descripcion','especialidad_id','fecha_inicio','fecha_fin','empresa_id'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function empresa()
    {
        return $this->hasOne('App\Models\Empresa', 'id', 'empresa_id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function especialidad()
    {
        return $this->hasOne('App\Models\Especialidad', 'id', 'especialidad_id');
    }
    

}
