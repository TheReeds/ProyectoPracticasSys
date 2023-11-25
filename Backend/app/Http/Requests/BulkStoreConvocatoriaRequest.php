<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BulkStoreConvocatoriaRequest extends FormRequest
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
            '*.titulo' => ['required','string'],
            '*.descripcion' => ['required','text'],
            '*.fechainicio' => ['required','date_format:Y-m-d H:i:s'],
            '*.fechafin' => ['required','date_format:Y-m-d H:i:s'],
            '*.empresaid' => ['required','integer'],
        ];
    }
    protected function prepareForValidation(){
        $data = [];
        foreach ($this->toArray() as $obj){
            $obj['fecha_inicio'] = $obj['fechainicio'] ?? null;
            $obj['fecha_fin'] = $obj['fechafin'] ?? null;
            $obj['empresa_id'] = $obj['empresaid'] ?? null;
            $data[] = $obj;
        }
        $this->merge($data);
    }
}
