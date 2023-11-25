<?php
namespace App\Filters;

use App\Filters\ApiFilter;
use Illuminate\Http\Request;

class EmpresaFilter extends ApiFilter{

    protected $safeParams =[
        'razonsocial' => ['eq','gt','lt'],
        'direccion' => ['eq'],
        'ubicacion' => ['eq'],
        'email' => ['eq'],
        'ruc' => ['eq'],
        'telefono' => ['eq'],
    ];
    protected $columnMap =[
        'razonsocial' => 'razon_social',
    ];
    protected $operatorMap =[
        'eq' => '=',
        'lt' => '<',
        'lte' => '<=',
        'gt' => '>',
        'gte' => '>='
    ];

    }
