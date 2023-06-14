<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use App\Models\User;
use App\Models\Saved;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PictureController extends Controller
{
    public function view(Request $request, $picture_id )
    {
        $picture = Picture::with('user', 'comment.user')->withCount('like')->find($picture_id);
        if(!$picture){
            abort('404');
        }

        $ownPicture = Auth::id() == $picture->user_id;
        $liked = $picture->like()->where('user_id', Auth::id())->exists();
        return Inertia::render('Picture/Picture', ['picture' => $picture, 'ownPicture' => $ownPicture, 'liked' => $liked]);
    }

    public function like(Request $request)
    {
        $auth_id = Auth::id();
        $picture = Picture::find($request->picture_id);

        $user = User::find($auth_id);
        $liked = $picture->like()->where('user_id', $auth_id)->exists();

        $liked ? $user->like()->detach($picture) : $user->like()->attach($picture);
    }

    public function saveItem(Request $request)
    {
        $auth_id = Auth::id();
        $picture = Picture::find($request->picture_id);

        $user = User::find($auth_id);
        $saved = $picture->savedItems()->where('user_id', $auth_id)->exists();

        $saved 
            ? Saved::where([['user_id', $auth_id],['picture_id',$picture->id]])->delete()
            : Saved::create([
                'user_id' => $user->id,
                'picture_id' => $picture->id,
                'saved_group' => 'FAVORITE'
            ]);
    }
    
    public function delete(Request $request)
    {
        $picture = Picture::find($request->picture_id);
        if(Auth::id() !== $picture->user_id) return;
        
        $storage_path = str_replace('/storage', '/public', $picture->image_url);
        $picture->delete();
        Storage::delete($storage_path);   
    }
}
