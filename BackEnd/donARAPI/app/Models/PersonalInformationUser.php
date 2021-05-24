<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalInformationUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'users_id',
        'name',
        'lastname',
        'day_of_birth',
        'document_number',
        'document_type_id',
        'profile_picture',
        'phone_number',
        'address'
    ];
}
