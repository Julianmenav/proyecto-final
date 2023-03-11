<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function view(Request $request) {
        $sortCategory = $request->sortCategory ?: 'like_count';
        $sortOrder = $request->sortOrder ?: 'desc';
        $count = 6;
        
        $auth_id = Auth::id();
        $paginator = User::find($auth_id)->picture()->with('user')->with('like')->withCount('like')->orderBy($sortCategory, $sortOrder)->orderBy('id')->cursorPaginate($count)->withQueryString();
        $morePages = $paginator->hasMorePages();
        
        if($paginator->onFirstPage()){
            return Inertia::render('Dashboard/Dashboard', ['picturesPag' => $paginator, 'morePages' => $morePages, 'order' => $sortOrder, 'category' => $sortCategory]);
        }
        
        $nextPage = $paginator->nextPageUrl();
        $pictures = $paginator->items();

        return json_encode(['pictures' => $pictures,'next_page_url' => $nextPage,'morePages' => $morePages]);
    }
}
