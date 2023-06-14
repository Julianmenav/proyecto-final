<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DiscoverController extends Controller
{
    public function view(Request $request) {
        // Por ahora el unico controlador muestra las que tienen mas likes.
        
        $sortCategory = $request->sortCategory ?: 'created_at';
        $sortOrder = $request->sortOrder ?: 'desc';
        $count = 6;
        
        $paginator = Picture::with('user')->with('like')->with('savedItems')->withCount('like')->orderBy($sortCategory, $sortOrder)->orderBy('id')->cursorPaginate($count)->withQueryString();
        $morePages = $paginator->hasMorePages();

        if($paginator->onFirstPage()){
            return Inertia::render('Discover/Discover', ['picturesPag' => $paginator, 'morePages' => $morePages, 'order' => $sortOrder, 'category' => $sortCategory]);
        }
        
        $nextPage = $paginator->nextPageUrl();
        $pictures = $paginator->items();

        return json_encode(['pictures' => $pictures,'next_page_url' => $nextPage,'morePages' => $morePages]);

    }
    
}
