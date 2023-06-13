<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Picture;
use App\Models\Saved;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    const COUNT = 6;

    public function view(Request $request) {
        $sortCategory = $request->sortCategory ?: 'created_at';
        $sortOrder = $request->sortOrder ?: 'desc';
        $search = $request->search ?: 'own';
        $count = self::COUNT;

        $auth_id = Auth::id();

        $paginator = $search == 'saved' ? 
            Picture::whereHas('savedItems', function ($query) use ($auth_id) {
                $query->where('user_id', $auth_id);
            })->with('user')->with('like')->withCount('like')->orderBy($sortCategory, $sortOrder)->orderBy('id')->cursorPaginate($count)->withQueryString()
        :
            User::find($auth_id)->picture()->with('user')->with('like')->withCount('like')->orderBy($sortCategory, $sortOrder)->orderBy('id')->cursorPaginate($count)->withQueryString();
        $morePages = $paginator->hasMorePages();
        
        if($paginator->onFirstPage()){

            // Get user info
            
            $user_pictures = User::find($auth_id)->picture()->withCount('like');
            $num_pictures_created = $user_pictures->count();
            $num_likes = $user_pictures->get()->sum('like_count');
            $num_saved_pictures = Saved::where('user_id', $auth_id)->count();
            
            $user_stats = ['numPicturesCreated'=>$num_pictures_created, 'numLikes'=> $num_likes, 'numSavedPictures' => $num_saved_pictures];

            return Inertia::render('Dashboard/Dashboard', ['userStats' => $user_stats, 'picturesPag' => $paginator, 'morePages' => $morePages, 'order' => $sortOrder, 'category' => $sortCategory, 'search' => $search]);
        }
        
        $nextPage = $paginator->nextPageUrl();
        $pictures = $paginator->items();

        return json_encode(['pictures' => $pictures,'next_page_url' => $nextPage,'morePages' => $morePages]);
    }
}
