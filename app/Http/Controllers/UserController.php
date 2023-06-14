<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Saved;
use App\Models\Picture;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;


class UserController extends Controller
{
    const COUNT = 6;

    public function view(Request $request, $user_id) {
        $sortCategory = $request->sortCategory ?: 'created_at';
        $sortOrder = $request->sortOrder ?: 'desc';
        $search = $request->search ?: 'own';
        $count = self::COUNT;

        $paginator = $search == 'saved' ? 
            Picture::whereHas('savedItems', function ($query) use ($user_id) {
                $query->where('user_id', $user_id);
            })->with('user')->with('like')->with('savedItems')->withCount('like')->orderBy($sortCategory, $sortOrder)->orderBy('id')->cursorPaginate($count)->withQueryString()
        :
            User::find($user_id)->picture()->with('user')->with('like')->with('savedItems')->withCount('like')->orderBy($sortCategory, $sortOrder)->orderBy('id')->cursorPaginate($count)->withQueryString();
        $morePages = $paginator->hasMorePages();
        
        if($paginator->onFirstPage()){

            // Get user info
            $user = User::find($user_id);
            $user_pictures = $user->picture()->withCount('like');
            $num_pictures_created = $user_pictures->count();
            $num_likes = $user_pictures->get()->sum('like_count');
            $num_saved_pictures = Saved::where('user_id', $user_id)->count();
            
            $user = ['id' => $user->id, 'name'=> $user->name, 'profile_pic' => $user->profile_pic,'numPicturesCreated'=>$num_pictures_created, 'numLikes'=> $num_likes, 'numSavedPictures' => $num_saved_pictures];

            return Inertia::render('Dashboard/Dashboard', ['user' => $user, 'picturesPag' => $paginator, 'morePages' => $morePages, 'order' => $sortOrder, 'category' => $sortCategory, 'search' => $search]);
        }
        
        $nextPage = $paginator->nextPageUrl();
        $pictures = $paginator->items();

        return json_encode(['pictures' => $pictures,'next_page_url' => $nextPage,'morePages' => $morePages]);
    }
}
