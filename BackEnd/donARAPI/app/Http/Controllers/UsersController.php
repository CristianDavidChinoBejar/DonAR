<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function register(RegisterRequest $request)
    {
        // dd($request->all());
        $request->merge(['password' => bcrypt($request->input('password'))]);
        $User = User::create($request->only(['name','email','password']));

        return response()->json(['response'=>$User],200);
    }
}
