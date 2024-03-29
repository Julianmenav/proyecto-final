<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Picture;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminController extends Controller
{

    public function view(Request $request) {

        if( isset($request->user_id)){
            $picturesPaginator = Picture::where('user_id', $request->user_id)->paginate(10);
            return Inertia::render('Admin/AdminPanelPictures', ['picturesPaginator' => $picturesPaginator]);
        }



        return Inertia::render('Admin/AdminPanelUsers', ['usersPaginator' => DB::table('users')->paginate(10)]);
 
    }

    public function destroy(Request $request)
    {
        if ( isset($request->user_id)){
            User::find($request->user_id)->delete();
        }
        
        if ( isset($request->picture_id)){
            Picture::find($request->picture_id)->delete();
        }
    }
}