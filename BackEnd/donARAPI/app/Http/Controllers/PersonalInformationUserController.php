<?php

namespace App\Http\Controllers;

use App\Http\Requests\PersonalInformationUser as RequestsPersonalInformationUser;
use App\Http\Requests\PersonalInformationUserRequest;
use App\Models\PersonalInformationUser;
use Illuminate\Http\Request;

class PersonalInformationUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PersonalInformationUserRequest $request)
    {
        // dd($request->all());
        $data = PersonalInformationUser::create($request->all());
        return response()->json(['response'=>$data],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PersonalInformationUser  $personalInformationUser
     * @return \Illuminate\Http\Response
     */
    public function show(PersonalInformationUser $personalInformationUser)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PersonalInformationUser  $personalInformationUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PersonalInformationUser $personalInformationUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PersonalInformationUser  $personalInformationUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(PersonalInformationUser $personalInformationUser)
    {
        //
    }

    public function getPersonalDataByUserId(Request $request)
    {
        $userId = $request->post('user_id');
        $personalInformation = PersonalInformationUser::firstOrFail()->where('users_id',$userId);
        return response()->json(['response'=>$personalInformation],200);
    }
}
