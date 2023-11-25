<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateEmpresaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $method = $this->method();
        if ($method == 'PUT') {
            return[
                'razonsocial' => ['required'],
                'direccion' => ['required'],
                'ubicacion' => ['required'],
                'email' => ['required'],
                'ruc' => ['required'],
                'telefono' => ['required'],
            ];
        }else {
            return[
                'razonsocial' => ['sometimes','required'],
                'direccion' => ['sometimes','required'],
                'ubicacion' => ['sometimes','required'],
                'email' => ['sometimes','required'],
                'ruc' => ['sometimes','required'],
                'telefono' => ['sometimes','required'],
            ];
        }
    }
    protected function prepareForValidation(){
        if ($this->razonsocial) {
            $this->merge([
                'razon_social' => $this->razonsocial
            ]);
        }
    }
}
