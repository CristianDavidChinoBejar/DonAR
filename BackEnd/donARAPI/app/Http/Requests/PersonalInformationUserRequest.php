<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PersonalInformationUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'users_id'=>'required|numeric',
            'name' => 'required|string',
            'lastname' => 'required|string',
            'document_number' => 'required|numeric|unique:personal_information_users',
            'document_type_id' => 'required|in:DNI, PASAPORTE, LIBRETA CIVICA',
            'profile_picture' => 'string',
            'phone_number' => 'required|string',
            'address' => 'required|string',
        ];
    }
}
