<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PictureController extends Controller
{
    public function view(Request $request, $picture_id = 0)
    {
        if ($picture_id == 0) {
            dd($request, 'NOT FOUND PAGE');
        }
        $picture = Picture::with('user')->withCount('like')->find($picture_id);
        return Inertia::render('Picture/Picture', ['picture' => $picture]);
    }

    public function like(Request $request)
    {
        $auth_id = Auth::id();
        $picture = Picture::find($request->picture_id);

        $user = User::find($auth_id);
        $liked = $picture->like()->where('user_id', $auth_id)->exists();

        $liked ? $user->like()->detach($picture) : $user->like()->attach($picture);
    }
    
    public function delete(Request $request)
    {
        $picture = Picture::find($request->picture_id);
        $storage_path = str_replace('/storage', '/public', $picture->image_url);
        $picture->delete();
        Storage::delete($storage_path);   
    }
}
