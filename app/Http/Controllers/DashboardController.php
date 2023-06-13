<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Picture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    const COUNT = 9;

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
            return Inertia::render('Dashboard/Dashboard', ['picturesPag' => $paginator, 'morePages' => $morePages, 'order' => $sortOrder, 'category' => $sortCategory, 'search' => $search]);
        }
        
        $nextPage = $paginator->nextPageUrl();
        $pictures = $paginator->items();

        return json_encode(['pictures' => $pictures,'next_page_url' => $nextPage,'morePages' => $morePages]);
    }
}
