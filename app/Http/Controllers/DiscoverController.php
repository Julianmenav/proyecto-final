<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DiscoverController extends Controller
{
    public function view(Request $request) {
        // Por ahora el unico controlador muestra las que tienen mas likes.
        $pictures = Picture::with('user')->with('like')->withCount('like')->orderBy('like_count','desc')->get();
        return Inertia::render('Discover/Discover', ['pictures' => $pictures]);
    }
}
