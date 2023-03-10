<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DiscoverController extends Controller
{
    public function view(Request $request) {
        // Por ahora el unico controlador muestra las que tienen mas likes.

        $paginator = Picture::with('user')->with('like')->withCount('like')->orderBy('like_count','desc')->cursorPaginate(6);
        $morePages = $paginator->hasMorePages();

        if($paginator->onFirstPage()){
            return Inertia::render('Discover/Discover', ['picturesPag' => $paginator, 'morePages' => $morePages]);
        }
        
        $nextPage = $paginator->onLastPage() ? '' : $paginator->nextPageUrl();
        $pictures = $paginator->items();

        return json_encode(['pictures' => $pictures,'next_page_url' => $nextPage,'morePages' => $morePages]);

    }
    
}
