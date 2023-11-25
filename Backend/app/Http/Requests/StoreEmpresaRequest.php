<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreEmpresaRequest extends FormRequest
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
        return [
            'razonsocial' => ['required'],
            'direccion' => ['required'],
            'ubicacion' => ['required'],
            'email' => ['required'],
            'ruc' => ['required'],
            'telefono' => ['required'],

        ];
    }
    protected function prepareForValidation(){
        $this->merge([
            'razon_social' => $this->razonsocial
        ]);
    }
}
