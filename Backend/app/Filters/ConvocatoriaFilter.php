<?php
namespace App\Filters;

use App\Filters\ApiFilter;
use Illuminate\Http\Request;

class ConvocatoriaFilter extends ApiFilter{

    protected $safeParams =[
        'titulo' => ['eq'],
        'descripcion' => ['eq'],
        'fechainicio' => ['eq','gt','gte','lt','lte'],
        'fechafin' => ['eq','gt','gte','lt','lte'],
        'empresaid' => ['eq'],
    ];
    protected $columnMap =[
        'fechainicio' => 'fecha_inicio',
        'fechafin' => 'fecha_fin',
        'empresaid' => 'empresa_id',
    ];
    protected $operatorMap =[
        'eq' => '=',
        'lt' => '<',
        'lte' => '<=',
        'gt' => '>',
        'gte' => '>='
    ];

    }
